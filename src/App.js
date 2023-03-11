import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Register from './register/Register';
import Login from './register/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
