const Oportunity = () => {

    const handleRedirectToSalesPage = ()=>{
        window.location.href = "https://saudevivida.site/"
    }

    return (
        <div className="flex flex-col bg-zinc-100 p-4 rounded-xl my-8">
            <h2 className="text-red-700 font-medium text-center text-2xl"> OPORTUNIDADE ESPECIAL PARA NOSSOS LEITORES! </h2>
            <h3 className="font-medium text-center text-md my-2"> ÚLTIMAS 11 UNIDADES COM DESCONTO </h3>
            <img src="https://curcumy.net.br/wp-content/uploads/2022/09/promo-adv.jpg" alt="Imagem do curcumy" />
            <button 
                className="bg-green-400 p-4 px-8 mx-auto my-4 rounded-md shadow-md"
                onClick={handleRedirectToSalesPage}
            >Comprar agora</button>
        </div>
    )
}

export default Oportunity