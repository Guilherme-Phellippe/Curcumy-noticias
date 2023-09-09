import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";

const Search = ()=> { 
    const refContainerSearch = useRef();

    const handleSearchWord = (e)=>{
        if(e.key === "Enter"){
            window.location.reload();
        }
    }

    const handleClickSearch = ()=>{
        const container = refContainerSearch.current
        const input =  container.querySelector("input")
        const svg =  container.querySelector("svg")
        const h3 =  container.querySelector("h3")
        container.classList.remove("md:bg-red-800")
        container.classList.add("bg-zinc-100")
        container.classList.remove("md:w-[150px]")
        container.classList.add("w-[200px]")
        input.classList.remove("hidden")
        input.classList.add("block")
        h3.classList.add("hidden")
        svg.classList.add("text-zinc-700")
    }

    return(
        <div className="w-1/5 pr-4 flex justify-end items-center">
                <div 
                ref={refContainerSearch}
                    onClick={handleClickSearch}
                    className="w-full md:w-[150px] cursor-text flex items-center justify-start md:bg-red-800 p-1 rounded-md group transition-all duration-100 overflow-hidden"
                >
                    <MagnifyingGlass
                        size={24}
                        className="w-full md:w-1/5 group-hover:text-zinc-700 font-medium"
                    />
                    <h3 className="hidden md:block font-medium text-zinc-200">BUSCAR</h3>
                    <input
                        type="search"
                        className="w-4/5 hidden bg-transparent outline-none bg-zinc-100 text-zinc-700"
                        onKeyDown={handleSearchWord}
                    />
                </div>
            </div>
    )
}

export default Search