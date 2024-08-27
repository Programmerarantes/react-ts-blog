const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-8">Entre em contato com nossa equipe</h1>
      <p className="text-lg mb-12 mx-auto max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
      
      <form className="mt-12 mx-auto max-w-lg">
        <div className="mb-6">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nome Completo"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Doula</option>
            <option value="general">Yoga para Gestante</option>
            <option value="support">Consultoria Amamentação</option>
            <option value="feedback">Uso da placenta</option>
            <option value="feedback">Terapia integrativa</option>
          </select>
        </div>
        <div className="mb-6">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Mensagem"
            
            style={{ resize: 'none' }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
