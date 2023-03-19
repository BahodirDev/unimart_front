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
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchedCategory, fetchedPosts } from './redux/action/action';


function App() {
  const dispacth = useDispatch()
  axios.defaults.baseURL = "https://unimart-shop-90ecd-default-rtdb.asia-southeast1.firebasedatabase.app"

  useEffect(() => {
    loadingPosts()
  }, [])

  const loadingPosts = async () => {
    // posts
    let data = await axios.get("/posts.json")
    let convertArray = []
    for (let i in data.data) {
      convertArray.push({ id: i, title: data?.data[i].title, img: data?.data[i].img, category: data?.data[i].category, price: data?.data[i].price });
    }
    dispacth(fetchedPosts(convertArray))
    // category
    let data2 = await axios.get("/categories.json")
    let convertArray2 = []
    for (let i in data2.data) {
      convertArray2.push({ id: i, title: data2?.data[i].title, img: data2?.data[i].img,});
    }
    dispacth(fetchedCategory(convertArray2))

  }

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
