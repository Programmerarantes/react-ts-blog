import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Sobre Nós */}
        <div className="about-us md:w-1/2 p-4">
          <p className="text-sm text-gray-600 mb-2">Sobre nós</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Nossa Missão
          </h2>
          <p className="text-gray-700 mb-4">
            Somos uma equipe dedicada de doulas comprometidas em apoiar e orientar mães durante a jornada da gravidez e parto. Nossa missão é fornecer um cuidado acolhedor e personalizado para garantir uma experiência de parto positiva e empoderadora.
          </p>
          <a href="/sobre-nos" className="text-blue-500 hover:underline">
            Saiba mais
          </a>
        </div>

        {/* Nossa Visão */}
        <div className="our-mission md:w-1/2 p-4">
          <p className="text-sm text-gray-600 mb-2">Nossa visão</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Compromisso com o Cuidado
          </h2>
          <p className="text-gray-700">
            Acreditamos que cada parto é único e merece ser celebrado com atenção e cuidado individualizados. Nosso objetivo é proporcionar um ambiente seguro e encorajador para que cada mãe possa vivenciar o parto com confiança e tranquilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
