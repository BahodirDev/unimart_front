import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './register/Register';
import Login from './register/Login';
import Navbar from './componets/Navbar';
import Password from './register/Password';
import Seller from './seller/Seller';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/password' element={<Password />} />
        <Route path='/seller' element={<Seller />} />
      </Routes>
    </div>
  );
}

export default App;
