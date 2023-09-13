import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import GetEmail from "./modals/getEmail"

function App() {

  return (
    <div className="flex flex-col">
      <Header />
      <Main />
      <Footer />
      <GetEmail />
    </div>
  )
}

export default App
