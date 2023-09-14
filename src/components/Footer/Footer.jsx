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
                    <svg
                        fill="none"
                        viewBox="0 0 42 42"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[36px]"
                    >
                        <path d="M30.167 4.866L38.12.134C38.99-.295 40 .345 40 1.512V30.31c0 .54-.585 1.133-1.307 1.133h-3.655a1.315 1.315 0 01-1.306-1.323V9.352l-2.444 1.458c-.868.426-1.855-.237-1.855-1.213V6.055c0-.507.285-.968.734-1.19zM14.11 25.831c-3.246 0-5.977-2.607-5.977-6.415 0-3.86 2.73-6.416 5.977-6.416 3.246 0 5.925 2.555 5.925 6.416 0 3.808-2.68 6.415-5.925 6.415zm7.368-18.463c-.773 0-1.236.469-1.236 1.251v1.356c-1.392-1.722-3.968-3.026-6.545-3.026C7.411 6.95 2 12.374 2 19.467c0 7.094 5.1 11.997 11.542 11.997a8.67 8.67 0 006.389-2.764c-.05 4.954-2.627 7.198-7.059 7.198-2.37 0-4.586-.731-7.161-2.4-.67-.469-1.443-.313-1.804.418L2.36 36.993c-.36.73-.257 1.408.464 1.877C6.02 40.956 9.782 42 13.028 42c8.502 0 13.19-4.643 13.19-15.335V8.62c0-.782-.463-1.251-1.236-1.251h-3.504z" fill="#fff"></path>
                    </svg>
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