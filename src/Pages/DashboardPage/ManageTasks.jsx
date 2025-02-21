import { MdCategory } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaClock, FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const ManageTasks = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      const validTasks = res.data.filter((task) => task._id && task._id.length === 24);
      return validTasks;
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEditClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleUpdate = async (e) => {
      e.preventDefault();
    
      // Create the updated task object
      const updatedTask = {
            ...selectedTask,
            title: e.target.title.value,
            description: e.target.description.value,
            category: e.target.category.value,
          };
    
      try {
        // Send the update request to the server
         await axiosPublic.put(`/tasks/${selectedTask._id}`, updatedTask);
    
        // Show success message
        Swal.fire({
          title: "Updated!",
          text: "Task updated successfully!",
          icon: "success",
        });
    
        // Refresh the task list
        refetch();
    
        // Close the modal
        setIsModalOpen(false);
      } catch (err) {
        console.error("Error updating task:", err);
        Swal.fire("Error!", "Failed to update task. Please try again.", "error");
      }
    };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.delete(`/tasks/${id}`);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting task:", error);
          Swal.fire("Error!", "Failed to delete task. Please try again.", "error");
        }
      }
    });
  };

  const [localTasks, setLocalTasks] = useState(tasks);

  useEffect(() => {
    setLocalTasks(tasks); // Synchronize local tasks with fetched tasks
  }, [tasks]);
  
  
    const onDragEnd = async (result) => {
        const { destination, source, draggableId } = result;
      
        if (!destination) return; // Task was dropped outside a valid area
      
        // If the task was dropped in the same position, do nothing
        if (destination.index === source.index && destination.droppableId === source.droppableId) {
          return;
        }
      
        // Clone tasks array
        const updatedTasks = [...tasks];
      
        // Find the task being moved
        const movedTaskIndex = updatedTasks.findIndex((task) => task._id === draggableId);
        if (movedTaskIndex === -1) return; // Task not found, exit
      
        const movedTask = updatedTasks[movedTaskIndex];
      
        if (destination.droppableId === source.droppableId) {
          // Reordering within the same category
          updatedTasks.splice(movedTaskIndex, 1); // Remove task from old position
          updatedTasks.splice(destination.index, 0, movedTask); // Insert task at new position
      
          // Update local state first
          setLocalTasks(updatedTasks);
      
          // Send the reordered tasks to the server
          await reorderTasksInDatabase(updatedTasks);
        } else {
          // Moving to a different category
          movedTask.category = destination.droppableId;
      
          // Update local state
          const newTasks = updatedTasks.map((task) =>
            task._id === draggableId ? movedTask : task
          );
          setLocalTasks(newTasks);
      
          // Send update to the server
          await updateTaskInDatabase(draggableId, { category: destination.droppableId });
        }
      
         refetch(); // Ensure the UI updates with fresh data
      };
  
      const reorderTasksInDatabase = async (tasks) => {
         try {
                await axiosPublic.put("/tasks/reorder", { tasks });
              } catch (error) {
                console.error("Error reordering tasks:", error);
              }
            };
      
          
            const updateTaskInDatabase = async (id, updateData) => {
              try {
                await axiosPublic.put(`/tasks/${id}`, updateData);
              } catch (error) {
                console.error("Error updating task:", error);
              }
            };
  

  const categories = [
    { title: "To Do", key: "To-Do" },
    { title: "In Progress", key: "In Progress" },
    { title: "Done", key: "Done" },
  ];

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="gap-4 p-4 bg-white min-h-screen text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Droppable key={category.key} droppableId={category.key}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="p-4 bg-[#F5556D] rounded-lg"
              >
                <h2 className="text-xl font-bold mb-4">{category.title}</h2>
                <div className="grid gap-4">
                  {localTasks
                    .filter((task) => task.category === category.key)
                    .map((task, index) => (
                      <Draggable key={task._id} draggableId={task._id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-4 bg-white text-black rounded-lg shadow-lg flex flex-col justify-between h-72"
                          >
                            <h1 className="text-center font-bold text-[18px] text-[#4c3575] flex-grow">{task.title}</h1>
                            <p className="text-[14px] text-center flex-grow">{task.description}</p>
                            <p className="flex items-center gap-2 flex-grow">
                              <MdCategory />{task.category}
                            </p>
                            <p className="flex items-center gap-2 flex-grow">
                              <FaClock />{new Date(task.timestamp).toLocaleDateString("en-US", options)}
                            </p>
                            <div className="flex items-center gap-2 mt-2 flex-grow">
                              <button onClick={() => handleEditClick(task)}>
                                <FaEdit className="text-green-600 text-xl" />
                              </button>
                              <button onClick={() => handleDelete(task._id)}>
                                <FaTrash className="text-red-600 text-xl" />
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>

      {/* Modal for Editing Tasks */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[50%]">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedTask?.title}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  defaultValue={selectedTask?.description}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  defaultValue={selectedTask?.category}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  {categories.map((category) => (
                    <option key={category.key} value={category.key}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#F5556D] text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DragDropContext>
  );
};

export default ManageTasks;