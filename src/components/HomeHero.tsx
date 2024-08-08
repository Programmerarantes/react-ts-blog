

const HomeHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8">
      <div className="md:w-1/2 p-4">
        <img src="/" alt="sasa" className="rounded-lg" />
      </div>
      <div className="md:w-1/2 p-4 flex flex-col justify-center h-full">
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">de papao com as Doulas</h1>
        <p className="text-lg text-center md:text-left">
          Texto introdutório, pode ser um resumo ou uma mensagem de boas-vindas.
          Texto introdutório, pode ser um resumo ou uma mensagem de boas-vindas.
          Texto introdutório, pode ser um resumo ou uma mensagem de boas-vindas.
          Texto introdutório, pode ser um resumo ou uma mensagem de boas-vindas.
          Texto introdutório, pode ser um resumo ou uma mensagem de boas-vindas.
          Texto introdutório, pode ser um resumo ou uma mensagem de boas-vindas.
        </p>
      </div>
    </div>
  );
}

export default HomeHero