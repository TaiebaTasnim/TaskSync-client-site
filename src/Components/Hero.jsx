const Hero = () => {
      return (
        <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <img
            src="https://i.ibb.co.com/dJwyDHDh/pexels-fauxels-3183153.jpg"
            alt="Task Management"
            className="absolute w-full h-full object-cover"
          />
    
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
    
          {/* Content */}
          <div className="relative z-10 text-center text-white px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold">
              Effortless Task Management
            </h1>
            <p className="mt-4 text-[16px] md:text-[18px] opacity-90">
              Organize, track, and complete your tasks seamlessly with TaskSync. From planning to completion, streamline your workflow with intuitive task tracking and real-time updates.
            </p>
            <button className="mt-6 px-6 py-3 text-lg font-semibold bg-[#F5558D] rounded-lg hover:bg-[#e04a7a] transition">
              Get Started
            </button>
          </div>
        </section>
      );
    };
    
    export default Hero;
    