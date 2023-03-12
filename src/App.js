import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Footer from './componets/Footer';
import Product from './pages/Product';
import Policy from './componets/Policy';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
        </Routes>
        <Policy/>
        <Footer />
      </div>
    </>
  );
}

export default App;
