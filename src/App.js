import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './register/Register';
import Login from './register/Login';
import Navbar from './componets/Navbar';
import Password from './register/Password';
import Seller from './seller/Seller';
import SellerDashboard from './seller/SellerDashboard';
import CreateProduct from './seller/CreateProduct';
import Home from './pages/Home';
import Footer from './componets/Footer';
import Product from './pages/Product';
import Policy from './componets/Policy';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/password' element={<Password />} />
        <Route path='/seller' element={<Seller />} />
        <Route path='/seller/dashboard' element={<SellerDashboard />} />
        <Route path='/product/create' element={<CreateProduct />} />
      </Routes>
      <Policy />
      <Footer />
    </div>
  );
}

export default App;
