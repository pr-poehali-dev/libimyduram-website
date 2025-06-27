import React from "react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">Портфолио</div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              О себе
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
            >
              Контакты
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
