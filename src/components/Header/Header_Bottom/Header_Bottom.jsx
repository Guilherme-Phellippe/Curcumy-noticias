import Menu from "../components/Menu";
import Search from "../components/Search";


const Header_Bottom = () => {

    return (
        <div className="w-full h-[63%] bg-[#c4170c] flex items-center justify-between p-0 md:p-4">
            <div className="w-1/5 md:w-[200px] flex items-center justify-center">
               <Menu />
               
            </div>
            <h2 className="w-3/5 text-center text-4xl text-white">SAÚDE</h2>
            <Search />
        </div>
    )
}

export default Header_Bottom