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
      title: "Business Application Developer",
      company: "PT. Indopoly Swakarsa Industry Tbk.",
      location: "Purwakarta, Jawa Barat",
      period: "Jan 2025 - Present",
      type: "Contract",
      description: "Involved in the development of an integrated, data-centralized ERP system, contributing to multiple platforms including web, mobile, and desktop applications. Collaborated closely with cross-functional teams to deliver scalable business solutions aligned with company standards",
      achievements: [
        "Consistently adhered to company coding guidelines and development SOPs",
        "Improved overall code quality through refactoring and best practices",
        "Enhanced application performance across platforms",
        "Maintained high performance with an average KPI score above 90%"
      ],
      technologies: ["ReactJS", "C#", "WinForms", "Flutter", "ASP.NET", "SQL Server"],
      icon: Building2,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Full Stack Developer",
      company: "PT. Namina Solusi Telematika",
      location: "Jakarta Selatan, Jawa Barat",
      period: "Jan 2023 - Dec 2024",
      type: "Contract",
      description: "Working in client company PT Asahimas Flat Glass Tbk. Cikampek and played a key role in the application migration to a modern tech stack, contributing to the development of impactful projects across web and mobile platforms. Actively involved in both frontend and backend improvements, ensuring scalability, performance, and user satisfaction.",
      achievements: [
        "Revamped the UI/UX of the company’s web application for a more intuitive user experience",
        "Boosted mobile app rating from 2.8 to 3.9 on the Play Store and improved stability on iOS",
        "Optimized SQL queries for large datasets, significantly reducing load times",
        "Delivered projects efficiently using Agile methodology and strong team collaboration"
      ],
      technologies: ["Angular", "Typescript", "C#", "SQL Server", "EF Core", "Flutter"],
      icon: Code2,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Backend Developer Intern",
      company: "PT. Citiasia Inc.",
      location: "Jakarta Selatan, Jawa Barat",
      period: "Aug 2021 - Feb 2022",
      type: "Remote",
      description: "Participated in the Ministry of Education’s Kampus Merdeka Batch 1 program, contributing to the development of a major online survey platform. As a student intern, I gained hands-on experience in backend development while also expanding into full-stack responsibilities.",
      achievements: [
        "Developed 5 responsive web applications",
        "Improved user experience scores by 35%",
        "Optimized website loading speed by 45%",
        "Collaborated with UX/UI designers on design systems"
      ],
      technologies: ["Laravel", "JavaScript", "HTML", "CSS", "PHP", "cPanel", "MySQL"],
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "IT Support Intern",
      company: "PT. Asri Pancawarna",
      location: "Cikampek, Jawa Barat",
      period: "Aug 2017 - Oct 2017",
      type: "Contract",
      description: "Provided technical support for hardware and software issues, including printer repairs, software installations, and server PC setup. Assisted in ensuring smooth IT operations across the organization.",
      achievements: [
        "Responded quickly to user-reported issues, minimizing downtime",
        "Trained users on proper software usage to improve efficiency and reduce recurring problems"
      ],
      technologies: [],
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
              A software development journey that began with no coding knowledge, evolving into an experienced developer through consistent learning and hands-on experience at every stage.
            </p>
            <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
            {/* Timeline Line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-200 lg:left-1/2 lg:transform lg:-translate-x-px"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => {
                const IconComponent = experience.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={experience.title + experience.company}
                    className={`relative flex items-start ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                    style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg lg:left-1/2 lg:transform lg:-translate-x-2"></div>

                    {/* Content Card */}
                    <div className={`ml-8 lg:ml-0 lg:w-5/10 ${isEven ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
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
                            <div className="flex flex-col space-y-1 text-sm text-gray-600 mb-2">
                              <div className="flex items-center space-x-1">
                                <Building2 className="w-4 h-4" />
                                <span>{experience.company}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
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
                        {experience.technologies.length > 0 && <div>
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
                        </div>}
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