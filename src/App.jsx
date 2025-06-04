
import { Routes,Route } from "react-router-dom"
import './index.css'
import './components/header/Header.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Location from "./pages/location/Location"
import History from "./pages/history/History"

function App() {
 

  return (
      
  
    <>
    <main>
 <Header/>
   

   
    <Routes>
      
     <Route path="/" element={<Home/>}/>
     <Route path="/location" element={<Location/>}/>
     <Route path="/history" element={<History/>}/>
     
    </Routes>
     </main>
     <Footer/>
    </>
  )
}

export default App
