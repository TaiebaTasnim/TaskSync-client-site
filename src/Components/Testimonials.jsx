import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    review: "TaskSync has completely transformed the way I manage my daily tasks. The drag-and-drop feature is a game changer!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah Lee",
    review: "I love how tasks are updated in real-time. No more refreshing the page to see changes. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Smith",
    review: "Being able to reorder tasks instantly and keep everything organized has boosted my productivity. Great tool!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto w-[90%] text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#4c3575] mb-6">What Our Users Say</h2>
        <p className="text-gray-600 mb-10">See how TaskSync is helping users stay organized and productive.</p>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center border border-gray-200">
              <FaQuoteLeft className="text-3xl text-[#F5558D] mx-auto mb-4" />
              <p className="text-gray-700 italic">&quot;{testimonial.review}&quot;</p>
              <div className="flex items-center justify-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-[#F5558D] object-cover"
                />
                <h3 className="ml-3 text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
