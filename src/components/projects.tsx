"use client";

import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [currentReview, setCurrentReview] = useState(0);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Vigenesia",
      description: "Front-end for Vigenesia project with Flutter for Universitas Bina Sarana Informatika (Learning Purpose)",
      technologies: ["Flutter", "Laravel", "Bootstrap", "PHP"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      ready: false,
      rating: 4.8
    },
    {
      title: "Film Circle",
      description: "A film news platform that delivers the latest movie updates using TheMovieDatabase API, with dynamic content, search functionality, and responsive design.",
      technologies: ["Java", "Android", "API"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      ready: false,
      rating: 4.6
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects, skills, and experience with responsive design, smooth animations, and contact integration.",
      technologies: ["NextJS", "Tailwind CSS", "Shadcn/UI", "TypeScript"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      ready: false,
      rating: 4.9
    },
    {
      title: "Modern ERP",
      description: "A fully modern ERP system with integrated modules for inventory, finance, HR, and sales, ETC., built using a modern tech stack and responsive design",
      technologies: ["NextJS", "C#", "ASP.NET", "SQL Server", "Docker"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      ready: false,
      rating: 4.7
    },
    {
      title: "Budget Management",
      description: "A budget management app for tracking income, expenses, and savings goals with real-time analytics, intuitive UI, and cross-platform support",
      technologies: ["NextJS", "Prisma", "PostgreSQL", "NextAuth", "MDX"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      ready: false,
      rating: 4.5
    },
    {
      title: "Temperature Monitoring",
      description: "An IoT-based temperature monitoring system that collects real-time data from sensors, provides alerts, and displays trends through a web dashboard and mobile app",
      technologies: ["C++", "Arduino UNO", "ASP.NET", "NextJS"],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      ready: false,
      rating: 4.8
    }
  ];

  const businessPartners = [
    {
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face",
      review: "Outstanding work quality and professional communication throughout the project. Delivered exactly what we needed on time and within budget.",
      rating: 5,
      position: "CTO"
    },
    {
      name: "InnovateLab",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      review: "Exceptional technical skills and problem-solving abilities. The team was impressed with the innovative solutions provided.",
      rating: 5,
      position: "Lead Developer"
    },
    {
      name: "Digital Dynamics",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      review: "Professional, reliable, and highly skilled. The project exceeded our expectations and we look forward to future collaborations.",
      rating: 4,
      position: "Project Manager"
    },
    {
      name: "StartupHub",
      logo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      review: "Amazing attention to detail and user experience focus. The final product was exactly what our users needed.",
      rating: 5,
      position: "CEO"
    },
    {
      name: "CodeCraft Studio",
      logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      review: "Technical expertise combined with excellent communication skills. A pleasure to work with on complex projects.",
      rating: 4,
      position: "Technical Lead"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % businessPartners.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + businessPartners.length) % businessPartners.length);
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="min-h-screen flex items-center justify-center bg-white py-16 lg:py-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Title */}
          <div className="text-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My Open Source Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-white text-xs font-medium">
                            {project.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 flex items-center justify-center space-x-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm"
                      >
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Partner Reviews */}
          <div className="space-y-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Clients Say
              </h3>
              <p className="text-gray-600 text-lg">
                Reviews from business partners and clients
              </p>
            </div>

            {/* Reviews Container */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevReview}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <button
                onClick={nextReview}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>

              {/* Reviews */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentReview * 100}%)` }}
                >
                  {businessPartners.map((partner, index) => (
                    <div
                      key={partner.name}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center max-w-2xl mx-auto">
                        <div className="flex justify-center mb-6">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${i < partner.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                                  }`}
                              />
                            ))}
                          </div>
                        </div>

                        <Quote className="w-8 h-8 text-blue-600 mx-auto mb-4" />

                        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                          "{partner.review}"
                        </p>

                        <div className="flex items-center justify-center space-x-3">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="text-left">
                            <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                            <p className="text-sm text-gray-600">{partner.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {businessPartners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentReview ? "bg-blue-600" : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 