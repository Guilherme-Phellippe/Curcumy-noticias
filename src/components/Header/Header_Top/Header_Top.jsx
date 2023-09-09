const links = [
    {
        name: "globo.com",
        color: 1,
        link: "https://www.globo.com/"
    },
    {
        name: "g1",
        color: 2,
        link: "https://g1.globo.com/?utm_source=barraGCOM"
    },
    {
        name: "ge",
        color: 3,
        link: "https://g1.globo.com/?utm_source=barraGCOM"
    },
    {
        name: "gshow",
        color: 4,
        link: "https://g1.globo.com/?utm_source=barraGCOM"
    },
    {
        name: "globoplay",
        color: 5,
        link: "https://g1.globo.com/?utm_source=barraGCOM"
    },
];


const Header_Top = () => {
    return (
        <div className="w-full px-2 md:px-4 h-[37%] bg-zinc-100 flex justify-between">
            <div className="w-1/2 h-full flex items-center gap-2 text-sm md:text-md">
                {
                    links.map(link =>
                        <a key={link.name} href={link.link} target="_blank" rel="noreferrer"  >
                            <h2
                                className={`font-bold 
                                    ${link.color === 1 ? "text-blue-600" :
                                        link.color === 2 ? "text-red-800" :
                                            link.color === 3 ? "text-green-500" :
                                                link.color === 4 ? "text-orange-400" : "text-red-500"
                                    }
                                `}
                            >{link.name}</h2>
                        </a>
                    )
                }
            </div>

            <div className="flex items-center gap-2">
                <span className="text-zinc-500/50 text-xs hidden md:block">ASSINE JÁ</span>

                <a 
                    href="https://authx.globoid.globo.com/6870/login?url=https%3A%2F%2Fid.globo.com%2Fauth%2Frealms%2Fglobo.com%2Flogin-actions%2Fauthenticate%3Fsession_code%3DfnZ_qvCsIhAnBHqcMQphWeJs7KMtF4nsfgYz472V0Y0%26execution%3D8feb8053-1729-44f9-bfa0-783a70e68d14%26client_id%3Dbarra%2540apps.globoid%26tab_id%3D_H8dKtHxswM%26request-context%3DQ1oVVn&error=&request-context=Q1oVVn"
                    target="_blank"
                    className=" text-sm text-zinc-500/70 border-[1px] bg-white shadow-md px-2 rounded-md"
                    rel="noreference noreferrer"
                >
                    Assine já
                </a>
            </div>
        </div>
    )
}

export default Header_Top;