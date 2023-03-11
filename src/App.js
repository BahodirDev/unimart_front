import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './register/Register';
import Login from './register/Login';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
