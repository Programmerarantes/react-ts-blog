// src/pages/AboutUsPage.tsx
import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Sobre Nós</h1>
      <p className="text-lg mb-4">
        Somos uma equipe apaixonada de doulas dedicadas a apoiar mães durante a jornada de gravidez e parto. Desde o início da gestação até o pós-parto, oferecemos apoio contínuo e orientação especializada para garantir uma experiência de parto positiva e acolhedora.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Nossa Missão</h2>
      <p className="text-lg">
        Nossa missão é fornecer um cuidado individualizado e compassivo para cada mãe, promovendo um ambiente seguro e encorajador. Acreditamos que cada parto é único e merecemos ser celebrado com a atenção e respeito que cada mãe e bebê precisam.
      </p>
    </div>
  );
};

export default AboutUsPage;
