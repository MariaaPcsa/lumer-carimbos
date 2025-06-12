
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './components/header/Header.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import History from "./pages/history/History";
import Location from "./pages/location/Location";
import FAQ from "./pages/faq/FAQ";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/location" element={<Location/>} />
         <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
