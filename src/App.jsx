
import { Routes,Route } from "react-router-dom"
import './App.css'
import './components/header/Header.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"


function App() {
 

  return (
      
 
    <>
 <Header/>
    
    <Routes>
      
     <Route path="/" element={<Home/>}/>
     
    </Routes>
     <Footer/>
    </>
  )
}

export default App
