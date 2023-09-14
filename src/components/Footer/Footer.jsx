import { Envelope, PaperPlaneTilt } from "@phosphor-icons/react"
import axios from "axios";
import { useRef } from "react"

const Footer = () => {
    const containerEmailRef = useRef();

    const handleSendEmail = async ({ currentTarget }) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const input = containerEmailRef.current.querySelector("input");
        const email = input.value;

        if (regex.test(email)) {
            const response = await axios.post("https://alk.temsabor.blog/lead", {
                email: input.value,
                product: "Curcumy Advertorial",
                site: "https://ultimas-noticias-do-mundo.temsabor.site/"
            }).catch(err => console.log(err))
            if (response.status === 200) {
                //eventos facebook
                // eslint-disable-next-line no-undef
                fbq('trackCustom', 'Lead_FooterEmailSuccess');
                alert("Enviado com sucesso!");
                input.value = "";
                currentTarget.textContent = "Enviado!";
            }
        } else alert("Formato de e-mail invalido!")

    }

    return (
        <footer className="bg-[#c4170c] w-full p-2 md:p-4">
            <div className="h-1/2 flex">
                <div className="flex justify-center items-center gap-4">
                    <p className="text-white">Últimas noticias</p>
                </div>
            </div>
            <div className="h-1/2 flex flex-col my-8 text-white">
                <h2 className="text-white font-bold text-xl">Quer receber noticias no seu email?</h2>
                <h3 className="text-white">Deixe seu e-mail agora mesmo...</h3>
                <div
                    className="w-full sm:w-1/4 flex items-center justify-between bg-zinc-100 px-4 rounded-xl my-4"
                    ref={containerEmailRef}
                >
                    <div className="p-2">
                        <Envelope className="fill-blue-900 text-3xl" />
                    </div>
                    <input
                        type="email"
                        placeholder="exemplo@email.com"
                        onKeyDown={(e) => e.code === "Enter" && handleSendEmail(e)}
                        className="w-3/5 bg-zinc-100 text-xl my-4 rounded-xl outline-none text-zinc-900"
                    />
                    <button
                        onClick={handleSendEmail}
                    ><PaperPlaneTilt className="fill-blue-900 text-3xl" /></button>
                </div>
            </div>
            <div className="h-1/2 flex items-end">
                <span className="text-white text-xs">© Copyright 2000-2023 Noticias de Comunicação S.A.</span>
            </div>
        </footer>
    )
}

export default Footer