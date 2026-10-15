import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;