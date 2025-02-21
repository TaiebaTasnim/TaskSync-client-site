 
// import { MdCategory } from "react-icons/md";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import {  FaClock, FaEdit, FaTrash } from "react-icons/fa";
// import Swal from "sweetalert2";
// import {     useState } from "react";
// //import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";




// const ManageTasks = () => {
//   const axiosPublic = useAxiosPublic();
  
//   const { data: tasks = [],refetch } = useQuery({
//     queryKey: ["tasks"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/tasks");
//       // Filter out tasks with invalid IDs
//     const validTasks = res.data.filter(task => task._id && task._id.length === 24);
    
//     console.log("Fetched valid tasks:", validTasks); // Debugging line

//     return validTasks;
//     },
//   })


//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedTask, setSelectedTask] = useState(null)

//   const handleEditClick = (task) => {
//       setSelectedTask(task);
//       setIsModalOpen(true);
//     };

//     const handleUpdate = async (e) => {
//       e.preventDefault();
//       const updatedTask = {
//         ...selectedTask,
//         title: e.target.title.value,
//         description: e.target.description.value,
//         category: e.target.category.value,
//       };
  
//       try {
//         await axiosPublic.put(`/tasks/${selectedTask._id}`, updatedTask);
//         Swal.fire({
//             title: "Updated!",
//             text: "Task updated successfully!",
//             icon: "success"
//       });
       
//         refetch();
//         setIsModalOpen(false);
//       } catch (err) {
//             console.log(err)
//             Swal.fire('Error!', 'Failed to update task. Please try again.', 'error');
//       }
//     };
  

//   const handleDelete = async (id) => {
//       Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!',
//       }).then(async (result) => {
//         if (result.isConfirmed) {
//           try {
//             // Delete trainer from database
//             await axiosPublic.delete(`/tasks/${id}`);
    
//             refetch()
    
//             // Show success message
//             Swal.fire({
//                   title: "Deleted!",
//                   text: "Your task has been deleted.",
//                   icon: "success"
//             });
//           } catch (error) {
//             console.error('Error deleting task:', error);
    
//             // Show error message
//             Swal.fire('Error!', 'Failed to delete task. Please try again.', 'error');
//           }
//         }
//       });
//     };

//   const categories = [
//     { title: "To Do", key: "To-Do" },
//     { title: "In Progress", key: "In Progress" },
//     { title: "Done", key: "Done" },
//   ];

//   const options = {
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     hour12: true,
//   };

//   return (
      
//     <div className=" gap-4 p-4 bg-white min-h-screen text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
//       {categories.map((category) => (
//         <div key={category.key} className="p-4 bg-[#F5556D] rounded-lg">
//           <h2 className="text-xl font-bold mb-4">{category.title}</h2>
//           <div className="grid  gap-4">
//             {tasks
//               .filter((task) => task.category === category.key)
//               .map((task) => (
//                 <div
//                   key={task._id}
//                   className="p-4 bg-white text-black rounded-lg shadow-lg flex flex-col justify-between h-56 "
//                 >
//                   <h1 className="text-center font-bold text-[18px] text-[#4c3575] flex-grow">{task.title}</h1>
//                   <p className="text-[14px] text-center flex-grow">{task.description}</p>
                  
//                     <p className="flex items-center gap-2 flex-grow"><MdCategory />{task.category}</p>
//                     <p className="flex items-center gap-2 flex-grow"><FaClock />{new Date(task.timestamp).toLocaleDateString("en-US", options)}</p>
//                     <div className="flex items-center gap-2 mt-2 flex-grow">
//                         <button onClick={() => handleEditClick(task)}>
//                         <FaEdit className="text-green-600 text-xl"></FaEdit>
//                         </button>
                        
//                         <button onClick={()=>handleDelete(task._id)}>
//                         <FaTrash  className="text-red-600 text-xl"></FaTrash>
//                         </button>
                       
//                     </div>
                  
//                 </div>
//               ))}
             
            
//           </div>
//         </div>
//       ))}
//         {isModalOpen && (
//        <div className="fixed inset-0  bg-opacity-50 flex items-center  justify-center z-50">
//        <div className="bg-gray-100 border-2 border-[#F5556D] text-black rounded-lg p-6 container mx-auto w-[90%] md:w-[70%]">
//          <h2 className="text-xl font-bold mb-4">Update Profile</h2>
//           <form onSubmit={handleUpdate} className="space-y-4">
//             <div>
//               <label className="block font-semibold mb-1">Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 defaultValue={selectedTask.title}
//                 className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-semibold mb-1">Description</label>
//               <textarea
//                 name="description"
//                 defaultValue={selectedTask.description}
//                 className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-semibold mb-1">Category</label>
//               <select
//                 name="category"
//                 defaultValue={selectedTask.category}
//                 className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               >
//                 {categories.map((category) => (
//                   <option key={category.key} value={category.key}>{category.title}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="flex justify-end space-x-2">
//               <button
//                 type="button"
//                 className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-[#abc502] text-black rounded-lg"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </form>

//           </div>
//           </div>
//         )}
      
//     </div>

//   );
// };

// export default ManageTasks;


