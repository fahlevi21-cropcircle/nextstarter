"use client";

import { useEffect, useRef } from "react";
import { 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap,
  Code2,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Layers,
  GitBranch,
  FileCode,
  Palette
} from "lucide-react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { name: ".NET", icon: Code2, color: "bg-purple-100 text-purple-600" },
    { name: "Angular", icon: Globe, color: "bg-red-100 text-red-600" },
    { name: "JavaScript", icon: FileCode, color: "bg-yellow-100 text-yellow-600" },
    { name: "TypeScript", icon: FileCode, color: "bg-blue-100 text-blue-600" },
    // { name: "HTML", icon: Code2, color: "bg-orange-100 text-orange-600" },
    { name: "CSS", icon: Palette, color: "bg-blue-100 text-blue-600" },
    { name: "Flutter", icon: Smartphone, color: "bg-cyan-100 text-cyan-600" },
    { name: "C#", icon: Code2, color: "bg-purple-100 text-purple-600" },
    { name: "MS SQL", icon: Database, color: "bg-blue-100 text-blue-600" },
    // { name: "Git", icon: GitBranch, color: "bg-orange-100 text-orange-600" },
    { name: "ReactJS", icon: Layers, color: "bg-cyan-100 text-cyan-600" },
    { name: "NextJS", icon: Globe, color: "bg-gray-100 text-gray-600" },
    { name: "PHP", icon: Code2, color: "bg-purple-100 text-purple-600" },
    { name: "Laravel", icon: Code2, color: "bg-red-100 text-red-600" },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen flex items-center justify-center bg-gray-50 py-16 lg:py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - About Me */}
          <div className="space-y-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            {/* Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Software Engineer with over 3 years of experience in developing web, mobile, and desktop applications. 
                Skilled in modern frameworks and tools, passionate about creating user-centric solutions and solving 
                complex technical challenges.
              </p>
            </div>

            {/* Bio Data */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Birth Date</p>
                    <p className="text-gray-900 font-medium">January 15, 1995</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-medium">john.doe@email.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900 font-medium">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                                 <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">Bachelor of Computer Science</h4>
                      <p className="text-blue-600 font-medium">University of Technology</p>
                      <p className="text-gray-500 text-sm">2013 - 2017</p>
                      <ul className="mt-3 space-y-1">
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Specialized in Software Engineering and Web Development</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Graduated with honors (GPA: 3.8/4.0)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">Active member of Computer Science Student Association</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="space-y-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            {/* Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tech Stack
              </h3>
              <p className="text-gray-600 text-lg">
                Technologies and frameworks I work with
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                                     <div
                     key={tech.name}
                     className="bg-white p-4 rounded-lg border border-gray-100 hover:scale-105 transition-all duration-300 group"
                     style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                   >
                    <div className="flex flex-col items-center space-y-3">
                      <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium text-gray-900 text-center">
                        {tech.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

                         {/* Current Learning Interests */}
             <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Currently Learning</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">AI for Daily Productivity</h5>
                    <p className="text-sm text-gray-600">Exploring how to leverage AI tools and automation to enhance daily workflow and productivity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Python Programming</h5>
                    <p className="text-sm text-gray-600">Learning Python for data analysis, automation, and expanding my programming toolkit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 