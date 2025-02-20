
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I add a task in TaskSync?",
    answer: "Simply click on the 'Add Task' button, enter task details, and hit save. The task will instantly be added to your list.",
  },
  {
    question: "Can I reorder my tasks?",
    answer: "Yes! You can drag and drop tasks within a category to reorder them as per your preference.",
  },
  {
    question: "Does TaskSync save changes automatically?",
    answer: "Absolutely! All changes, including adding, deleting, and reordering tasks, are saved instantly.",
  },
  {
    question: "Can I move tasks between categories?",
    answer: "Yes, simply drag a task from one category (To-Do, In Progress, Done) to another.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#4c3575] text-center mb-8">Frequently Asked Questions</h2>
        <div className="container mx-auto w-[90%]">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-[#F5558D]">
              <button
                className="w-full text-left flex justify-between items-center p-4 bg-white shadow-md rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? <FaChevronUp className="text-[#F5558D]" /> : <FaChevronDown className="text-[#F5558D]" />}
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 bg-white border-t border-[#F5558D] transition duration-300 ease-in-out">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
