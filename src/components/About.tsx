import React from "react";
import Icon from "@/components/ui/icon";

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Frontend", level: 85 },
    { name: "Branding", level: 90 },
    { name: "Illustration", level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Обо мне
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Я дизайнер с 5-летним опытом создания цифровых продуктов.
              Специализируюсь на создании интуитивно понятных интерфейсов,
              которые решают реальные задачи пользователей.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Работал с стартапами и крупными компаниями, помогая им создавать
              продукты, которые любят пользователи.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <Icon name="Mail" size={18} className="text-purple-600" />
                <span className="text-gray-700">designer@example.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <Icon name="MapPin" size={18} className="text-purple-600" />
                <span className="text-gray-700">Москва, Россия</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Навыки</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
