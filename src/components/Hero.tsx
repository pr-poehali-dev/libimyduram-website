import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 animate-fade-in">
          Привет, я<span className="text-purple-600 block mt-2">Дизайнер</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in max-w-2xl mx-auto leading-relaxed">
          Создаю красивые и функциональные цифровые решения с фокусом на
          пользовательский опыт
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors duration-300 font-medium"
          >
            Посмотреть работы
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-purple-600 hover:text-purple-600 transition-colors duration-300 font-medium"
          >
            Связаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
