
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './components/header/Header.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home";
import History from "./pages/history/History";



function App() {
  return (
   
      <>
        <BrowserRouter>
       
          <Header />

          <Routes>
           
          <Route path="/" element={<Home/>} />
          <Route path="/histoy" element={<History/>} />
            {/* <Route path="/history" element={<History />} /> */}
          </Routes>
       
        <Footer />
            </BrowserRouter>
      </>
  
  );
}

export default App;
