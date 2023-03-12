import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './register/Register';
import Login from './register/Login';
import Navbar from './componets/Navbar';
import Password from './register/Password';
import Seller from './seller/Seller';
import SellerDashboard from './seller/SellerDashboard';
import CreateProduct from './seller/CreateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
      <Navbar/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/password' element={<Password />} />
        <Route path='/seller' element={<Seller />} />
        <Route path='/seller/dashboard' element={<SellerDashboard />} />
        <Route path='/product/create' element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
