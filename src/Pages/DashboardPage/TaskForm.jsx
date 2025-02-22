import { useContext, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const TaskForm = () => {
      const {user}=useContext(AuthContext)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");
  console.log(category)
  //const timestamp = new Date().toLocaleString(); // Auto-generated timestamp
  const axiosPublic=useAxiosPublic()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Title is required!");
      return;
    }

    const newTask = {
      title,
      description,
      category,
      Useremail:user?.email,
      timestamp: Date.now()
    };
     console.log(newTask)
     axiosPublic.post("/tasks",newTask, {
      headers: {
            "Content-Type": "application/json",
      },
})
      .then((response) => {
            const { insertedId } = response.data;
            console.log(insertedId);
            if (insertedId) {
                  Swal.fire({
                        title: "Task Created!",
                        text: "Task has been added successfully.",
                        icon: "success",
                  });
                  //alert("Task created successfully")
                  setTitle("");
                  setDescription("");
                  setCategory("To-Do");
                  
            }
      })
      .catch((error) => {
            console.error(error);
            Swal.fire({
                  title: "Error",
                  text: "There was an error creating task. Please try again.",
                  icon: "error",
            });
            //alert("Error creating task")
      });
    //onSubmit(newTask);
    
  };

  return (
    <div className="bg-gray-200 py-16 px-5 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4c3575]">Create New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title*</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value.slice(0, 50))}
            required
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter task title(Max 50 chars)"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value.slice(0, 200))}
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Enter task description(Max 200 chars)"
          />
        </div>

        {/* Timestamp (Read-only)
        <div>
          <label className="block text-sm font-medium text-gray-700">Timestamp</label>
          <input
            type="text"
            value={timestamp}
            readOnly
            className="w-full mt-1 p-2 border rounded-md bg-gray-100"
          />
        </div> */}

        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option disabled value="">Pick a Category</option>
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#F5558D] text-white px-4 py-2 rounded-lg hover:bg-[#e04479] transition "
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
