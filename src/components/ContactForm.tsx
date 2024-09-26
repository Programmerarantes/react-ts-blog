const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl mb-6">Entre em contato com nossa equipe</h1>
      <p className="text-base mb-12 mx-auto max-w-xl">
        Se você precisa de apoio durante sua gestação ou parto, entre em contato com nossa equipe de doulas. Estamos aqui para ajudar!
      </p>

      <form className="mt-12 mx-auto max-w-lg text-left">
        <div className="mb-6">
        <label  className="block mb-2 text-sm font-medium text-gray-600">Nome:</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nome Completo"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-600 ">Email:</label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-600 ">Assunto:</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Assunto"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-600 ">Mensagem:</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Mensagem"

            style={{ resize: 'none' }}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
