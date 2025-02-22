import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Contact = () => {

      const handleFormSubmit = (event) => {
            event.preventDefault();
            
            // Submit the form (you can perform an AJAX request here if needed)
            const form = event.target;
            const formData = new FormData(form);
            
            // Send data to the API
            fetch(form.action, {
              method: form.method,
              body: formData,
            })
            .then((response) => {
              // Check if the request was successful
              if (response.ok) {
                  Swal.fire({
                              title: "Message send successfully!",
                              icon: "success",
                              timer: 2000,
                              showConfirmButton: false,
                            });
                  
                form.reset();
              } else {
               Swal.fire({
                                         title: "Error",
                                         text: "There was an error in sending message. Please try again.",
                                         icon: "error",
                                   });
                       
              }
            })
            .catch((error) => {
                  console.log(error)
              toast("There was an error submitting the form.");
            });
          };

      return (
        <section className="w-full pt-24 pb-16 bg-gray-100">
          <div className="container mx-auto w-[90%]">
            
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-[#4c3575] text-center mb-8">Get in Touch</h2>
    
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Contact Form */}
              <div className="bg-white shadow-lg p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#4c3575] mb-4">Send Us a Message</h3>
                <form className="space-y-4"
                action="https://getform.io/f/apjjdkwa"
                method='POST'
                id="form"
                onSubmit={handleFormSubmit}
                >
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border rounded-md focus:outline-[#F5558D]"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border rounded-md focus:outline-[#F5558D]"
                  />
                  <textarea 
                    rows="4" 
                    placeholder="Your Message" 
                    className="w-full p-3 border rounded-md focus:outline-[#F5558D]"
                  ></textarea>
                  <button 
                    type="submit" 
                    className="bg-[#F5558D] text-white py-2 px-6 rounded-lg hover:bg-[#e0447c] transition">
                    Send Message
                  </button>
                </form>
              </div>
    
              {/* Contact Details & Map */}
              <div className="space-y-6">
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#4c3575] mb-2">Contact Details</h3>
                  <p className="text-gray-600">📧 Email: support@tasksync.com</p>
                  <p className="text-gray-600">📞 Phone: +880 1815432178</p>
                  <p className="text-gray-600">📍 Address: 123 Task Street, Productivity City</p>
                </div>
    
                {/* Google Map Embed */}
                <div className="w-full">
                <iframe 
                className="w-full h-56 rounded-lg shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.9537363153167!3d-37.816279742021824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577efc27f695bf!2sMelbourne!5e0!3m2!1sen!2sau!4v1635480421321!5m2!1sen!2sau"
                allowFullScreen
                loading="lazy"
                title="Google Map Location"
              ></iframe>
                </div>
              </div>
    
            </div>
          </div>
        </section>
      );
    };
    
    export default Contact;
    