const Coments = () => {
    const coments = [
        {
            name: "Luana Soares",
            photo: "https://curcumy.net.br/wp-content/uploads/2022/09/Camada-3-min.png",
            date: "HÁ 1 DIA",
            text: "Eu estava no aguardo de um produto assim, e finalmente lançaram. Vou aproveitar que está na promoção e comprar vai que o preço aumenta, estamos no Brasil ne hahahah",
            answers: [


            ]
        },
        {
            name: "Rubens Sales",
            photo: "https://curcumy.net.br/wp-content/uploads/2022/09/avatar.svg",
            date: "HÁ 1 DIA",
            text: "Comprei pra mim e chegou tudo certo aqui em Recife, sempre desconfio em comprar na internet, mas esse foi o único confiável pra mim. Estou amando minha vida sem dor.",
            answers: [
                {
                    name: "Mayara Almeida",
                    photo: "https://curcumy.net.br/wp-content/uploads/2022/09/2.jpg",
                    date: "HÁ 1 DIA",
                    text: "Obrigada por comentar Rubens, eu vi na internet e estava meio desconfiada mas depois que você falou, e lendo os comentários aqui, vi que o negocio funciona mesmo, vou pedir o meu hoje.",
                }
            ]
        },
        {
            name: "Gabriela Oliveira",
            photo: "https://curcumy.net.br/wp-content/uploads/2022/09/3.jpg",
            date: "Há 3 DIAS",
            text: "Estou tomando há 2 semanas. Estava prestes a fazer uma cirurgia na coluna, passei uma pomada que o médico passou mas nada resolveu, resolvi arriscar o Curcumy e após o terceiro dia de uso já não sentia mais nada, obrigado Curcumy .",
            answers: [
                {
                    name: "Ana Flávia",
                    photo: "https://curcumy.net.br/wp-content/uploads/2022/09/Camada-1-min.png",
                    date: "HÁ 3 DIAS",
                    text: "Sério? Eu ja estou desesperada kkkk, sinto que tenho que experimentar isso, mas será que funciona pra fibrobialgia? já não aguento mais kkkkk",
                },
                {
                    name: "Maria Fernanda",
                    photo: "https://curcumy.net.br/wp-content/uploads/2022/09/5.jpg",
                    date: "HÁ 3 DIAS",
                    text: `Amiga, funciona sim, também não aguentava mais de tanta dor, uso desde quando lançou aqui no brasil e foi o unico que funcionou comigo. eu comprei nesse site aqui <a className="underline" href="https://curcumytratamento.ver-receita.cloud/">curcumy.com.br/oficial`,
                },
            ]
        },

    ]


    return (
        <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl my-8"><span className="font-bold">108 </span> COMENTÁRIOS</h2>
            <div className="w-full shadow-sm flex flex-col rounded-xl border-[1px]">
                {
                    coments.map(coment =>
                        <div
                            key={coment.name}
                            className="flex flex-col border-b-[1px]"
                        >
                            <div className="flex flex-col">
                                <div className="flex">
                                    <div className="flex justify-center my-4 w-1/5 h-full p-0 md:p-4">
                                        <img
                                            className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] rounded-full"
                                            src={coment.photo}
                                            alt={`imagem de ${coment.name}`}
                                        />
                                    </div>
                                    <div className="w-4/5 flex flex-col p-4">
                                        <h2 className="text-xl">{coment.name}</h2>
                                        <h3 className="text-sm text-zinc-500">{coment.date}</h3>
                                        <p className="mt-4 text-zinc-500">{coment.text}</p>
                                    </div>
                                </div>
                                <div
                                    key={coment.name}
                                    className="w-full flex items-end flex-col"
                                >
                                    {
                                        coment.answers.map(answer =>
                                            <div key={answer.name} className="flex w-[90%] rounded-lg bg-zinc-100">
                                                <div className="flex justify-center my-4 w-1/5 h-full md:p-4">
                                                    <img
                                                        className="w-[50px] h-[50px] rounded-full"
                                                        src={answer.photo}
                                                        alt={`imagem de ${answer.name}`}
                                                    />
                                                </div>
                                                <div className="w-4/5 flex flex-col p-4">
                                                    <h2 className="text-xl">{answer.name}</h2>
                                                    <h3 className="text-sm text-zinc-500">{answer.date}</h3>
                                                    <p className="mt-4 text-zinc-500" dangerouslySetInnerHTML={{ __html:answer.text}}></p>
                                                </div>
                                            </div>
                                        )
                                    }


                                </div>
                            </div>
                        </div>
                    )
                }
                <button className="p-2 border-[1px] bg-zinc-300 cursor-pointer text-red-800/50">
                    Para ver todos os comenários você precisa ter uma conta
                </button>
            </div>
        </div>
    )
}

export default Coments