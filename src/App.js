import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={}/> */}
        </Routes>
    </div>
  );
}

export default App;
