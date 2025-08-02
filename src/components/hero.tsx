"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex md:items-center justify-center relative bg-white pt-16 lg:pt-0"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-32 items-center">
          {/* Left Column - Text and Social Media */}
          <div className="flex flex-col justify-between h-full lg:h-auto space-y-6 lg:space-y-8 max-w-md lg:max-w-lg">
            {/* Text Content */}
            <div className="space-y-4 lg:space-y-6">
              {/* Greeting */}
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
                <p className="text-base sm:text-lg lg:text-xl text-gray-900 font-medium">
                  Hi, I'm
                </p>
              </div>

              {/* Name */}
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-600 mb-3 lg:mb-4 leading-tight">
                  / John Doe /
                </h1>
              </div>

              {/* Title */}
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-4 lg:mb-6 font-medium">
                  &lt; Software Engineer &gt;
                </h2>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.8s" }}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-900 mb-3">
                Follow me on
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={16} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-700" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-700" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter size={16} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "1s" }}>
            <div className="relative flex justify-center">
              {/* Outer circle with subtle border */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full border-2 border-gray-200 flex items-center justify-center">
                {/* Inner circle with blue gradient background */}
                <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  {/* Profile Picture */}
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                      alt="John Doe - Software Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Labels */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 bg-white shadow-lg rounded-lg px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-3 border border-gray-100">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">Developer</span>
                  <span className="text-xs text-gray-500">+5 years</span>
                </div>
              </div>

              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 bg-white shadow-lg rounded-lg px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-3 border border-gray-100">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">Engineer</span>
                  <span className="text-xs text-gray-500">+3 years</span>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 bg-white shadow-lg rounded-lg px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-3 border border-gray-100">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">Designer</span>
                  <span className="text-xs text-gray-500">+2 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero; 