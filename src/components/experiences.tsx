"use client";

import { useEffect, useRef } from "react";
import { 
  Calendar,
  MapPin,
  Building2,
  Briefcase,
  Award,
  Users,
  TrendingUp,
  Code2
} from "lucide-react";

const Experiences = () => {
  const experiencesRef = useRef<HTMLDivElement>(null);

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

    if (experiencesRef.current) {
      observer.observe(experiencesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "Jakarta, Indonesia",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of enterprise-level applications using modern technologies. Mentoring junior developers and implementing best practices for code quality and performance.",
      achievements: [
        "Led a team of 5 developers in building a comprehensive e-commerce platform",
        "Improved application performance by 40% through optimization techniques",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted code reviews"
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
      icon: Building2,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLab",
      location: "Bandung, Indonesia",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Developed and maintained multiple web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 3 client-facing applications with 99.9% uptime",
        "Reduced bug reports by 50% through improved testing practices",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile development processes"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Jest"],
      icon: Code2,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Frontend Developer",
      company: "Digital Dynamics",
      location: "Surabaya, Indonesia",
      period: "2020 - 2021",
      type: "Full-time",
      description: "Specialized in creating responsive and user-friendly web interfaces. Worked closely with designers to implement pixel-perfect designs.",
      achievements: [
        "Developed 5 responsive web applications",
        "Improved user experience scores by 35%",
        "Optimized website loading speed by 45%",
        "Collaborated with UX/UI designers on design systems"
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS", "Sass", "Webpack"],
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      location: "Yogyakarta, Indonesia",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Started career as a junior developer, learning modern web development practices and contributing to various projects.",
      achievements: [
        "Contributed to 2 major project releases",
        "Learned modern development workflows and tools",
        "Participated in code reviews and team meetings",
        "Built foundational knowledge in web development"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Git"],
      icon: Users,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section
      id="experiences"
      ref={experiencesRef}
      className="min-h-screen flex items-center justify-center bg-gray-50 py-16 lg:py-24"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Title */}
          <div className="text-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              My professional journey in software development, from junior developer to senior engineer
            </p>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 lg:left-1/2 lg:transform lg:-translate-x-px"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => {
                const IconComponent = experience.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={experience.title + experience.company}
                    className={`relative flex items-start ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg lg:left-1/2 lg:transform lg:-translate-x-2"></div>

                    {/* Content Card */}
                    <div className={`ml-16 lg:ml-0 lg:w-5/12 ${isEven ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                      <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                        {/* Header */}
                        <div className="flex items-start space-x-4 mb-6">
                          <div className={`w-12 h-12 ${experience.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {experience.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <div className="flex items-center space-x-1">
                                <Building2 className="w-4 h-4" />
                                <span>{experience.company}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center space-x-1 text-blue-600">
                                <Calendar className="w-4 h-4" />
                                <span>{experience.period}</span>
                              </div>
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                {experience.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {experience.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                            <Award className="w-5 h-5 text-blue-600" />
                            <span>Key Achievements</span>
                          </h4>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            <span>Technologies Used</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "1s" }}>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Experience Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                  <div className="text-gray-600">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences; 