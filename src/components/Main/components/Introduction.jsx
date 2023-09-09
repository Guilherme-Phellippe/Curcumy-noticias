const Introduction = () => {
    const date = new Date();
    const currentDate = `${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;


    return (
        <div className="flex flex-col">
            <h1 className="text-black font-bold text-2xl md:text-4xl">Exclusivo: Gotas com Extratos de Raízes e Colageno UC2 podem acabar com dores em poucos dias</h1>
            <h3 className="text-zinc-500 text-lg leading-6 md:leading-8 md:text-xl my-4 md:my-6">
                Solução natural para quem sofre com dores no corpo, artrite, artrose, reumatismo, fibromialgia e etc.
            </h3>
            <div className="flex flex-col">
                <span className="text-zinc-400 text-sm md:text-md text-center">02/07/2023 16h58 | Atualizado em: {currentDate}</span>
                <img src="https://curcumy.net.br/wp-content/uploads/2022/09/ingerir.jpg" alt="imagem do curcumy" />
                <span className="text-center text-sm text-zinc-400 my-1">Ingerir apenas 15 gotas por dia dessa substância natural é o suficiente para te devolver uma vida sem dor.</span>
            </div>
        </div>
    )
}

export default Introduction