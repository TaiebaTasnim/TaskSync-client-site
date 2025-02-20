const AboutUs = () => {
      return (
        <section className="w-full pt-24 pb-16 bg-gray-100">
          <div className="container mx-auto w-[90%]">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-[#4c3575] text-center mb-8">About TaskSync</h2>
    
            {/* Introduction with Image */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white shadow-lg p-8 rounded-lg">
              <div>
                <h3 className="text-2xl font-semibold text-[#4c3575]  mb-4">Who We Are</h3>
                <p className="text-gray-600 leading-relaxed">
                  TaskSync is your go-to task management solution, designed to help individuals and teams stay organized, efficient, and productive. 
                  With real-time updates and seamless task management, you can focus on what truly matters.
                </p>
              </div>
              <img 
                src="https://i.ibb.co.com/3mK4RSCV/pexels-kampus-7857565.jpg" 
                alt="Task Management Team"
                className="w-full h-auto rounded-lg shadow-md border-2 border-[#F5556D]"
              />
            </div>
    
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#4c3575] mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To simplify task management through intuitive design and real-time updates, ensuring productivity and efficiency for all users.
                </p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#4c3575] mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading task management platform, empowering users with cutting-edge features and seamless collaboration.
                </p>
              </div>
            </div>
    
            {/* Why Choose Us */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-[#4c3575] text-center mb-6">Why Choose TaskSync?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                  <h4 className="text-xl font-semibold text-[#F5558D] mb-2">Instant Updates</h4>
                  <p className="text-gray-600">Your tasks sync in real-time, ensuring no data loss and up-to-date task lists.</p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                  <h4 className="text-xl font-semibold text-[#F5558D] mb-2">Drag & Drop</h4>
                  <p className="text-gray-600">Easily manage tasks with an intuitive drag-and-drop interface.</p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                  <h4 className="text-xl font-semibold text-[#F5558D] mb-2">Seamless Task Management</h4>
                  <p className="text-gray-600">Add, edit, delete, and reorder tasks effortlessly.</p>
                </div>
              </div>
            </div>
    
          </div>
        </section>
      );
    };
    
    export default AboutUs;
    