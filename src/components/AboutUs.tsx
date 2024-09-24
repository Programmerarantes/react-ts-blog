
const equipe = [
    {
        name: 'Camila Bernardi',
        role: 'Yoga para Gestante',
        description: 'Camila é especialista em yoga para gestantes, ajudando futuras mães a se prepararem física e emocionalmente para o parto.',
        imageUrl: 'https://res.cloudinary.com/dasvwni1e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723831596/small_portrait_young_school_student_d3b1cc28a8.jpg',
        link: '/about/camilab'
    },
    {
        name: 'Adri Bueno',
        role: 'Terapeuta',
        description: 'Adri é terapeuta com foco em apoio emocional e bem-estar, oferecendo sessões terapêuticas personalizadas.',
        imageUrl: 'https://res.cloudinary.com/dasvwni1e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723831596/small_portrait_young_school_student_d3b1cc28a8.jpg',
        link: '/about/adrib'
    },
    {
        name: 'Diana',
        role: 'Amamentação',
        description: 'Diana é consultora em amamentação, apoiando mães com orientações práticas e emocionais para uma amamentação saudável.',
        imageUrl: 'https://res.cloudinary.com/dasvwni1e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1723831596/small_portrait_young_school_student_d3b1cc28a8.jpg',
        link: '/about/diana'
    },
]


export const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto my-8 p-4 bg-gray-100 rounded-lg text-center">
            <div className="flex flex-col items-center">
                <img
                    src="https://res.cloudinary.com/dasvwni1e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1724162234/depapocomasdoulas_yjgzpw.jpg"
                    alt="de papo com as doulas"
                    className="w-40 h-40 object-cover rounded-full border-2 mb-4"
                />
                <div className="w-full p-6">
                    <h1 className="text-2xl font-bold mb-4">DE PAPO COM AS DOULAS</h1>
                    <p className="text-base">
                        O principal item do enxoval é a informação! Acompanhamento na gestação, parto e puerpério.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 my-12 mx-12 text-justify">
                <div className="flex-1 m-4">
                    <h1 className="text-xl font-semibold mb-2">Sobre Nós</h1>
                    <p className="text-lg">
                        Somos uma equipe apaixonada de doulas, dedicada a apoiar mães durante a jornada da gravidez e do parto. Desde o início da gestação até o pós-parto, oferecemos apoio contínuo e orientação especializada para garantir uma experiência de parto positiva e acolhedora.
                    </p>
                </div>
                <div className="flex-1 m-4">
                    <h2 className="text-xl font-semibold mb-2">Nossa Missão</h2>
                    <p className="text-lg ">
                        Nossa missão é fornecer um cuidado individualizado e compassivo para cada mãe, promovendo um ambiente seguro e encorajador. Acreditamos que cada parto é único e merece ser celebrado com a atenção e respeito que cada mãe e bebê necessitam.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {equipe.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col my-6 max-w-3xl mx-auto items-center text-left bg-white shadow-md rounded-lg overflow-hidden lg:flex-row"
                    >
                        <div className="w-full lg:w-1/3 flex justify-center p-6">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="object-cover w-40 h-40 rounded-full"
                            />
                        </div>
                        <div className="w-full lg:w-2/3 p-6 lg:pl-8">
                            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                            <h3 className="text-lg text-gray-600 mb-4">{member.role}</h3>
                            <p className="text-gray-700 mb-4">{member.description}</p>
                            <a
                                href='#'
                                className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                            >
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


