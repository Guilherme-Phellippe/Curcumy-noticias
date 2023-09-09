import Coments from "./components/Coments"
import Introduction from "./components/Introduction"
import Oportunity from "./components/Oportunity"
import Text1 from "./components/Text1"
import Text2 from "./components/Text2"
import Text3 from "./components/Text3"
import Text4 from "./components/Text4"
import Text5 from "./components/Text5"
import Text6 from "./components/Text6"

const Main = () => {

    return (
        <main className="w-screen max-w-[1500px] mx-auto bg-white">
            <div className="w-full max-w-[1200px] mx-auto mt-32 mb-16">
                <div className="w-2/3">
                    <Introduction />
                    <Text1 />
                    <Text2 />
                    <Text3 />
                    <Text4 />
                    <Text5 />
                    <Oportunity />
                    <Text6 />
                    <Coments />
                </div>
                <div className="w-1/3">

                </div>
            </div>
        </main>
    )
}

export default Main