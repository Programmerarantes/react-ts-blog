import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto flex flex-col items-center">

        <div className='w-full flex justify-center pb-10 mb-6 md:w-1/2 md:mb-0'>
          <img src="https://res.cloudinary.com/dasvwni1e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1724162234/depapocomasdoulas_yjgzpw.jpg"
            alt="Logo"
            className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-lg" 
          />
        </div>

  
        <div className='w-full md:flex md:justify-center md:space-x-8'>
          <div className="w-full md:w-1/2 p-4">
            <p className="text-sm text-gray-600 mb-2">Sobre nós</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Cuidando e Orientando
            </h2>
            <p className="text-gray-700 mb-4">
              Somos uma equipe dedicada de doulas comprometidas em apoiar e orientar mães durante a jornada da gravidez e parto. Nossa missão é fornecer um cuidado acolhedor e personalizado para garantir uma experiência de parto positiva e empoderadora.
            </p>
            <a href="/aboutus" className="text-blue-500 hover:underline">
              Saiba mais
            </a>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <p className="text-sm text-gray-600 mb-2">Cuidando e orientando</p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Compromisso com o Cuidado
            </h2>
            <p className="text-gray-700">
              Acreditamos que cada parto é único e merece ser celebrado com atenção e cuidado individualizados. Nosso objetivo é proporcionar um ambiente seguro e encorajador para que cada mãe possa vivenciar o parto com confiança e tranquilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
