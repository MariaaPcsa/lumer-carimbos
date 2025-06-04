
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import './components/header/Header.css'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import History from "./pages/history/History";
import Location from "./pages/location/Location";


function App() {
  return (
    <BrowserRouter>
      <>
        <main>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
