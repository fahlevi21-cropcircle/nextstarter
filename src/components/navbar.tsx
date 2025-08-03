"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Download } from "lucide-react";
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of the navbar
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experiences", href: "#experiences", id: "experiences" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
        : "bg-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex gap-0 items-center">
            <div className='bg-[url(/logo.png)] bg-blend-overlay bg-cover bg-center w-12 h-12'></div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="hidden lg:flex flex-col text-sm font-bold text-blue-600 hover:text-blue-700 transition-all duration-300"
            >
              <p className='my-0'>CropCircle Studio</p>
              <p className='my-0'>Portfolio</p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 relative ${activeSection === item.id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            {/* <Button
              className="bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact me
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${isMenuOpen
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${activeSection === item.id
                ? "text-blue-600 font-semibold bg-blue-50"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0"
              onClick={() => {
                scrollToSection("contact");
                setIsMenuOpen(false);
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 