import { List, X } from "@phosphor-icons/react"
import { useEffect, useRef } from "react"

const Menu = () => {
    const refContainerMenu = useRef();

    const handleOpenMenu = (isOpen) => {
        if (isOpen) {
            refContainerMenu.current.style.visibility = "visible"
            refContainerMenu.current.style.transform = "translate(0%)"
            const timeout = setTimeout(()=>{
                handleOpenMenu(false)
                clearTimeout(timeout)
            }, 5000 );
        } else {
            refContainerMenu.current.style.visibility = "hidden"
            refContainerMenu.current.style.transform = "translate(-100%)"
        }
    }

    useEffect(()=>{
        
    },[])


    return (
        <>
            <div
                className="cursor-pointer flex items-center w-1/2 md:border-r-[1px] border-r-zinc-100 border-dashed"
                onClick={()=> handleOpenMenu(true)}
            >
                <List
                    size={28}
                    className="font-bold"
                />
                <h3 className="text-md font-medium text-white hidden md:block">MENU</h3>
            </div>
            {/* MENU */}
            <div
                className="w-full md:w-1/3 lg:w-1/5 h-full flex flex-col fixed top-0 left-0 bg-white transition-transform duration-700 -translate-x-full"
                ref={refContainerMenu}
            >
                <div className="w-full flex justify-end p-4">
                    <X
                        className="text-3xl cursor-pointer fill-red-600"
                        onClick={()=> handleOpenMenu(false)}
                    />
                </div>
                <div className="h-4/5 flex flex-col items-center mt-32">
                    <div className="w-[100px] h-[100px] rounded-full grid place-items-center animate-bounce duration-200">
                        <div className="w-1/5 h-1/5 bg-red-600 rounded-full"></div>
                    </div>
                    <div className="w-[100px] h-1 shadow-md"></div>
                    <span className="animate-pulse">Carregando...</span>
                </div>

            </div>
        </>
    )
}

export default Menu