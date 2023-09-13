import { Envelope } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import axios from "axios";

const GetEmail = () => {
    const refContainer = useRef();
    const timeout = useRef();

    useEffect(() => {
        timeout.current = setTimeout(() => {
            refContainer.current.classList.add("grid")
            refContainer.current.classList.remove("hidden")
            setTimeout(() => {
                refContainer.current.classList.remove("scale-0")
                refContainer.current.classList.add("scale-100")
                refContainer.current.classList.add("bg-[#fffa]")
                clearTimeout(timeout.current)
            }, 1000);
        }, 60000);
    }, []);

    const handleClose = ({ target }) => {
        if (target.dataset.close === "true") {
            refContainer.current.classList.add("hidden")
            refContainer.current.classList.remove("grid")
            clearTimeout(timeout.current)
        }
    }

    
    const handleSendLead = async ({ currentTarget }) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const input = refContainer.current.querySelector("input");
        const email = input.value ;

        if (regex.test(email)) {
            currentTarget.textContent = "Enviando..."
            const response = await axios.post("https://alk.temsabor.blog/lead", {
                email: input.value,
                product: "Curcumy Advertorial",
                site: "https://ultimas-noticias-do-mundo.temsabor.site/"
            }).catch(err => console.log(err))
            if (response.status === 200) {
                handleClose({ target: { dataset: { close: "true" } } })
            }
        } else alert("Formato de e-mail invalido!")
    }

    return (
        <div
            className="hidden scale-0 transition-transform duration-300 w-screen h-screen fixed top-0 left-0 z-50  place-items-center "
            ref={refContainer}
            onClick={handleClose}
            data-close="true"
        >
            <div className="w-[95%] max-w-[500px] bg-gradient-to-br from-[#7393dd] to-[#2c2c7e] rounded-xl shadow-lg border-[1px] border-[#6f3700] p-4">
                <h2 className="text-xl font-bold uppercase text-center text-[#ffffff] italic">Quer receber nossas ultimas noticias?</h2>
                <h3 className="text-center text-xl leading-6 text-[#fffd]">Enviamos diaremente noticias do Brasil e do mundo direto no seu e-mail.</h3>
                <h3 className="text-center text-xl my-4 mt-8 font-medium leading-6 text-white">Deixe seu E-mail para receber nossas noticias</h3>
                <div className="flex items-center justify-start bg-zinc-100 px-4 rounded-xl">
                    <div className="p-2">
                        <Envelope  className="fill-blue-900 text-3xl" />
                    </div>
                    <input
                        type="email"
                        placeholder="exemplo@email.com"
                        className="w-3/5 bg-zinc-100 text-xl my-4 rounded-xl outline-none text-zinc-900"
                    />
                </div>
                <div className="w-full flex justify-evenly items-center gap-4 mt-4">
                    <span
                        className="text-zinc-100 opacity-50 cursor-pointer underline"
                        onClick={handleClose}
                        data-close="true"
                    >Não quero</span>
                    <button
                        onClick={handleSendLead}
                        className="bg-blue-500 p-2 rounded-xl text-white"
                    >
                        ENVIAR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetEmail