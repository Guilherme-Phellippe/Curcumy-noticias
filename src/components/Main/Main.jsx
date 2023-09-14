import { useEffect } from "react"
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

    useEffect(()=>{
        const timeout = setTimeout(() => {
            // eslint-disable-next-line no-undef
            fbq("trackCustom", "news_UserIsInterested")
            clearTimeout(timeout);
        }, 100000);

        return ()=> clearTimeout(timeout);
    },[])

    return (
        <main className="w-screen max-w-[1500px] mx-auto bg-white">
            <div className="w-full max-w-[1200px] mx-auto mt-12 md:mt-32 mb-16">
                <div className="w-full px-2 md:px-0 md:w-2/3">
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
                <div className="w-1/3 hidden md:block">

                </div>
            </div>
        </main>
    )
}

export default Main