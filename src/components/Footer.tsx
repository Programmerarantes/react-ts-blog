const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="text-center mb-6">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <img src="#" alt="Logo" className="mx-auto h-12 w-auto" />
                    </div>

                    <div className="bg-gray-700 py-10 rounded-lg">
                        <div className="flex flex-col md:flex-row justify-around items-center">
                            <p>Assine nossa newsletter para receber as últimas atualizações e novidades</p>
                            <div className="flex items-center space-x-2">
                                <input type="email" placeholder="Insira seu email" className="px-3 py-2 rounded-1-md text-black focus:outline-none" />
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Inscrever-se</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">

                </div>
            </div>
        </footer>
    )
}

export default Footer