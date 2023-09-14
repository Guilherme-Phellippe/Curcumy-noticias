const links = [
    {
        name: "noticas.com",
        color: 1,
    },
    {
        name: "Exlusivo",
        color: 2,
    },
    {
        name: "Esporte",
        color: 3,
    },
    {
        name: "Shows",
        color: 4,
    },
    {
        name: "Eventos",
        color: 5,
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
                    href="/"
                    className=" text-sm text-zinc-500/70 border-[1px] bg-white shadow-md px-2 rounded-md"
                >
                    Assine já
                </a>
            </div>
        </div>
    )
}

export default Header_Top;