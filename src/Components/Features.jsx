import { FaArrowsAlt, FaSyncAlt, FaSort, FaTasks } from "react-icons/fa";

const Features = () => {
  const features = [
    { icon: <FaArrowsAlt className="text-4xl text-[#F5558D]" />, title: "Drag & Drop Task Management", desc: "Easily move tasks between categories with drag-and-drop functionality." },
    { icon: <FaSyncAlt className="text-4xl text-[#F5558D]" />, title: "Instant Save & Real-time Updates", desc: "Changes are saved instantly and update in real time across devices." },
    { icon: <FaSort className="text-4xl text-[#F5558D]" />, title: "Reorder Tasks with Ease", desc: "Arrange tasks within categories effortlessly to match your workflow." },
    { 
      icon: <FaTasks className="text-4xl text-[#F5558D]" />, 
      title: "Add, Edit & Delete Tasks", 
      desc: "Easily create, modify, and remove tasks to keep your list up to date." 
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto w-[90%] text-center">
        <h2 className="text-3xl font-bold text-[#4c3575] mb-6">Features Section</h2>
        <p className="text-gray-600 mb-10">Enhance your productivity with these powerful features.</p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center border border-gray-200">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
