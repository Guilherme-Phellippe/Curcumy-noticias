import Header_Bottom from "./Header_Bottom/Header_Bottom"
import Header_Top from "./Header_Top/Header_Top"

const Header = () => {
    return (
        <header className="w-screen h-[120px]">
            <Header_Top />            
            <Header_Bottom />           
        </header>
    )
}

export default Header