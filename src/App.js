import './App.css';
import Navbar from './component/navbar/Navbar';
import Slider from './component/slider/Slider';
import Swiper from './component/swiper/Swiper';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from './component/card/Card';
import ProductInfo from './router/ProductInfo';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Swiper />
      <Slider />
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/product-info" element={<ProductInfo />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
