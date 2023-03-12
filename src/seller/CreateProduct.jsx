import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './seller.css'

function CreateProduct(props) {
    const [mahsulot, setMahsulot] = useState('')
    const [birlik, setBirlik] = useState('')
    const [miqdor, setMiqdor] = useState(1)
    const [teg, setTeg] = useState('')
    const [rasm, setRasm] = useState('')
    const [link, setLink] = useState('')
    return (
        <div className='main'>
            <div className="aiz-sidebar left c-scrollbar">
                <div className="aiz-side-nav-logo-wrap">
                    <div className="d-block text-center">
                        <img className="mw-100 mb-3 img" src="https://unimart.uz/uploads/all/cDW170KJr9KNZDbNJ8EuEqEOjRA55SyiFHvu6O9e.png" alt="Unimart" />
                        <h3 className="fs-16  m-0 text-primary">News</h3>
                        <p className="text-primary email">toxtasinovabduvohid77@gmail.com</p>
                    </div>
                </div>
                <div className="aiz-side-nav-wrap">
                    <div className="px-20px mb-3">
                        <input className="inp7 form-control bg-soft-secondary border-0 form-control-sm text-white" type="text" placeholder="Menyuda qidirish" />
                    </div>
                    <ul className="aiz-side-nav-list" id="search-menu">
                    </ul>
                    <ul className="aiz-side-nav-list metismenu" id="main-menu" data-toggle="aiz-side-menu">
                        <li className="aiz-side-nav-item">
                            <Link to={"seller/dashboard"} className="aiz-side-nav-link">
                                <i className="fa-sharp fa-solid fa-house icn"></i>
                                <span className="aiz-side-nav-text">Boshqaruv paneli</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item" >
                            <Link to={"/"} className="aiz-side-nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-sharp fa-solid fa-cart-shopping icn"></i>
                                <span className="aiz-side-nav-text" >Mahsulot(lar)</span>
                                <span className="aiz-side-nav-arrow" />
                            </Link>
                            <ul className="aiz-side-nav-list level-2 mm-collapse dropdown-menu">
                                <li className="aiz-side-nav-item">
                                    <Link to={"/product/create"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Mahsulot(lar)</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <Link to={"https://unimart.uz/seller/product-bulk-upload/index"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Mahsulotni ommaviy yuklash</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <Link to={"https://unimart.uz/seller/digitalproducts"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Raqamli mahsulotlari</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <Link to={"https://unimart.uz/seller/reviews"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Mahsulot sharhlari</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"https://unimart.uz/seller/uploads"} className="aiz-side-nav-link ">
                                <i className="fa-sharp fa-solid fa-folder-open icn"></i>
                                <span className="aiz-side-nav-text">Yuklangan fayllar</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"https://unimart.uz/seller/coupon"} className="aiz-side-nav-link ">
                                <i className="fa-solid fa-bullhorn icn"></i>
                                <span className="aiz-side-nav-text">Kupon</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"javascript:void(0);"} className="aiz-side-nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-sharp fa-solid fa-gavel icn"></i>
                                <span className="aiz-side-nav-text">Auction</span>
                                <span className="aiz-side-nav-arrow" />
                            </Link>
                            <ul className="aiz-side-nav-list level-2 mm-collapse dropdown-menu">
                                <li className="aiz-side-nav-item">
                                    <Link to={"https://unimart.uz/seller/auction_products"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Barcha auksion mahsulotlari</span>
                                    </Link>
                                </li>
                                <li className="aiz-side-nav-item">
                                    <Link to={"https://unimart.uz/seller/auction_products-orders"} className="aiz-side-nav-link ">
                                        <span className="aiz-side-nav-text">Auction Product Orders</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"https://unimart.uz/seller/orders"} className="aiz-side-nav-link ">
                                <i className="fa-sharp fa-solid fa-money-bill icn"></i>
                                <span className="aiz-side-nav-text">Buyurtmalar</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item mm-active">
                            <Link to={"https://unimart.uz/refund-request"} className="aiz-side-nav-link active" aria-expanded="true">
                                <i className="fa-sharp fa-solid fa-backward icn"></i>
                                <span className="aiz-side-nav-text">To'lovni qaytarish so'rovi olindi</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"/setting"} className="aiz-side-nav-link ">
                                <i className="fa-solid fa-gear icn"></i>
                                <span className="aiz-side-nav-text">Do'kon sozlamalari</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"https://unimart.uz/seller/payments"} className="aiz-side-nav-link ">
                                <i className="fa-solid fa-clock-rotate-left icn"></i>
                                <span className="aiz-side-nav-text">To'lovlar tarixi</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"https://unimart.uz/seller/money-withdraw-requests"} className="aiz-side-nav-link ">
                                <i className="fa-solid fa-money-bill-wave icn"></i>
                                <span className="aiz-side-nav-text">Pul yechib olish</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"https://unimart.uz/seller/commission-history"} className="aiz-side-nav-link">
                                <i className="fa-solid fa-file-invoice icn"></i>
                                <span className="aiz-side-nav-text">Commission History</span>
                            </Link>
                        </li>
                        <li className="aiz-side-nav-item">
                            <Link to={"https://unimart.uz/seller/support_ticket"} className="aiz-side-nav-link ">
                                <i className="fa-sharp fa-solid fa-atom icn"></i>
                                <span className="aiz-side-nav-text">Qo'llab-quvvatlash tiketi</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='quti77'>
                <div className='aiz-topbar'>
                </div>
                <div className='setting'>
                    <div className='dokon'>
                        <h5>Mahsulotingizni qo'shing</h5>
                    </div>
                    <div className='dokon2'>
                        <div className='asosiy'>
                            <h5>Asosiy ma'lumotlar</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Mahsulot nomi<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control mb-3" placeholder="Mahsulot nomi" value={mahsulot} onChange={(e) => { setMahsulot(e.target.value) }} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-md-2 col-form-label">Kategoriya</label>
                                    <div className="col-md-10">
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="1">Erkaklar kiyimi</option>
                                            <option value="22">-- Ustki kiyim</option>
                                            <option value="62">---- Kurtkalar</option>
                                            <option value="63">---- Paltolar</option>
                                            <option value="64">---- Puxoviklar</option>
                                            <option value="69">---- Рубашка</option>
                                            <option value="24">-- Brendlar</option>
                                            <option value="79">-- Аксессуары для Мужчин</option>
                                            <option value="65">---- Galstuklar</option>
                                            <option value="66">---- Ko'zoynaklar</option>
                                            <option value="67">---- Kamarlar</option>
                                            <option value="68">---- Sharflar</option>
                                            <option value="2">Ayollar uchun kiyimlar</option>
                                            <option value="25">-- Brendlar</option>
                                            <option value="26">-- Aksessuarlar</option>
                                            <option value="27">-- Kategoriyalar</option>
                                            <option value="3">Hamma narsa bolalar uchun</option>
                                            <option value="28">-- O'g'il bolalar uchun kiyimlar</option>
                                            <option value="29">-- Qizlar kiyimlari</option>
                                            <option value="30">-- O'yinchoqlar va aksessuarlar</option>
                                            <option value="78">-- Для малышей</option>
                                            <option value="7">Go'zallik va so'glik</option>
                                            <option value="33">-- Makiaj</option>
                                            <option value="34">-- Yuzni parvarish qilish</option>
                                            <option value="35">-- Tana parvarishi</option>
                                            <option value="36">-- Sochni parvarish qilish</option>
                                            <option value="37">-- Parfyumeriya</option>
                                            <option value="38">-- Sog'liq uchun</option>
                                            <option value="39">-- Gigiena</option>
                                            <option value="40">-- Manikyur va pedikyur</option>
                                            <option value="41">-- Erkaklar uchun</option>
                                            <option value="72">-- Комплексное масло для волос</option>
                                            <option value="73">-- Кондиционер для волос</option>
                                            <option value="74">-- ЛЕЧЕБНЫЕ И КОСМЕТИЧЕСКИЕ МАСЛА</option>
                                            <option value="75">-- Витамины и порошки</option>
                                            <option value="76">-- Лечебные кремы и мази</option>
                                            <option value="77">-- Хайлайтер</option>
                                            <option value="8">Kompyuterlar va ofis jihozlari</option>
                                            <option value="42">-- Noutbuklar va kompyuterlar</option>
                                            <option value="43">-- Аксессуары</option>
                                            <option value="44">-- Komponentlar</option>
                                            <option value="45">-- Gamerlar uchun</option>
                                            <option value="46">-- Ofis jihozlari</option>
                                            <option value="9">Telefonlar va aksessuarlar</option>
                                            <option value="15">-- Mobil telefonlar</option>
                                            <option value="16">-- Gadjetlar</option>
                                            <option value="17">-- Telefon uchun g'iloflar</option>
                                            <option value="19">-- Quloqchinlar</option>
                                            <option value="21">-- Запчасти для телефонов</option>
                                            <option value="23">-- Aksessuarlar</option>
                                            <option value="10">Maishiy texnika</option>
                                            <option value="47">-- Maishiy texnika</option>
                                            <option value="88">---- Увлажнители воздуха</option>
                                            <option value="48">-- Go'zallik uchun texnikalar</option>
                                            <option value="49">-- Katta maishiy texnikalar</option>
                                            <option value="50">-- Mahsulotlarni maydalash uchun texnika</option>
                                            <option value="11">Zargarlik buyumlari va soatlar</option>
                                            <option value="31">-- Bijuteriya va taqinchoqlar</option>
                                            <option value="32">-- Soatlar</option>
                                            <option value="12">Avto tovarlar</option>
                                            <option value="51">-- Avtoelektronika</option>
                                            <option value="52">-- Asboblar va parvarish</option>
                                            <option value="53">-- Avto aksessuarlar</option>
                                            <option value="54">-- Инструменты и уход</option>
                                            <option value="13">Uy uchun mahsulotlar</option>
                                            <option value="55">-- Mebel</option>
                                            <option value="57">-- Narsalarni saqlash uchun jixozlar</option>
                                            <option value="58">-- Tekstil</option>
                                            <option value="59">-- Aksessuarlar</option>
                                            <option value="80">-- Товары для кухни</option>
                                            <option value="14">Sport va o'yin-kulgi</option>
                                            <option value="60">-- Sport uchun mahsulotlar</option>
                                            <option value="61">-- Sport buyumlari</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label className="col-md-2 col-form-label">
                                        Brend
                                    </label>
                                    <div className="col-md-10">
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="1">Brendni tanlash</option>
                                            <option value="1">Chanel</option>
                                            <option value="1">Nike</option>
                                            <option value="1">Addidas</option>
                                            <option value="1">Lora piano</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label mt">Birlik<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="text" Name="form-control mb-3" placeholder="Birlik (masalan,KG,kompyuter va boshqalar)" value={birlik} onChange={(e) => { setBirlik(e.target.value) }} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Minimal xarid miqdori<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="number" className="form-control mb-3" placeholder="Meta sarlavhasi" value={miqdor} onChange={(e) => { setMiqdor(e.target.value) }} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Teg<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control mb-3" placeholder="Teg" value={teg} onChange={(e) => { setTeg(e.target.value) }} required />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Qaytariladigan<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="radio" name='radio' required />
                                    </div>
                                    <label className="col-md-2 col-form-label">Qaytarilmaydigan<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="radio" name='radio' required />
                                    </div>
                                </div>
                                <div className="dokon3">
                                    <button type="submit" className="btn2 btn btn-sm btn-primary">Saqlash</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className='dokon2'>
                        <div className='asosiy'>
                            <h5>Mahsulot rasmlari</h5>
                        </div>
                        <div class="card-body">
                            <form className>
                                <div className="row mb-3">
                                    <label className="col-md-2 col-form-label">Galereya rasmlari</label>
                                    <div className="col-md-10">
                                        <input type="file" className='form-control' placeholder='Faylni tanlang' value={rasm} onChange={(e) => { setRasm(e.target.files) }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Eskiz tasviri (290x300)</label>
                                    <div className="col-md-10">
                                        <input type="file" className='form-control' placeholder='Faylni tanlang' value={rasm} onChange={(e) => { setRasm(e.target.files) }} />
                                    </div>
                                </div>
                                <div className="dokon3">
                                    <button type="submit" className="btn2 btn btn-sm btn-primary">Saqlash</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='dokon2'>
                        <div className='asosiy'>
                            <h5>Mahsulot rasmlari</h5>
                        </div>
                        <div class="card-body">
                            <form className>
                                <div className="row mb-3">
                                    <label className="col-md-2 col-form-label">
                                        Video Provider
                                    </label>
                                    <div className="col-md-10">
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="1">Youtube</option>
                                            <option value="1">Dailymotion</option>
                                            <option value="1">Vimeo</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <label className="col-md-2 col-form-label">Video linki<span className="text-danger text-danger">*</span></label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control mb-3" placeholder="Video link" value={link} onChange={(e) => { setLink(e.target.value) }} required />
                                    </div>
                                </div>
                                <div className="dokon3">
                                    <button type="submit" className="btn2 btn btn-sm btn-primary">Saqlash</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;