"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Send,
  User,
  Building2,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", company: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      
      // Reset error message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 812-3456-7890",
      href: "tel:+6281234567890"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jakarta, Indonesia",
      href: "#"
    }
  ];

  return (
    <>
      <section
        id="contact"
        ref={contactRef}
        className="min-h-screen flex items-center justify-center bg-white py-16 lg:py-24"
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Section Title */}
            <div className="text-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Ready to start a project or have a question? I&apos;d love to hear from you.
              </p>
              <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    I&apos;m always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and development.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={info.title}
                        href={info.href}
                        className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 group"
                        style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                      >
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{info.title}</h4>
                          <p className="text-gray-600">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Availability Status */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-800">Available for new opportunities</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    I&apos;m currently accepting new projects and collaborations. 
                    Let&apos;s discuss how we can work together!
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Tell me about your project or inquiry..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-green-800">Message sent successfully! I&apos;ll get back to you soon.</span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <span className="text-red-800">Something went wrong. Please try again.</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Build Something Amazing Together</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I&apos;m passionate about creating innovative solutions and bringing ideas to life. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-400 text-sm">
                  © 2024 Your Name. All rights reserved.
                </div>
                <div className="text-gray-400 text-sm">
                  Code generated with ❤️ by{" "}
                  <a 
                    href="https://cursor.sh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Cursor AI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact; 