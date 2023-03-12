import React, { useState } from 'react'
import NewProducts from '../componets/NewProducts'
import { NavLink } from "react-router-dom"

function Product() {
    const [son, setSon] = useState(0)
    const [miqdor, setMiqdor] = useState(10)

    const getson = (val) => {
        if (val == "plus") {
            setSon(son + 1)
        } else {
            setSon(son - 1)
        }
    }

    return (
        <div className='product_header_div'>
            <div className='product_body_div'>
                <div className='product_img_div'>
                    <img src="https://unimart.uz/uploads/all/z65ezUYA4V27HmP8go3H0GPjBPQhUBjxyT7OowJs.jpg" alt="" />
                </div>
                <div className='product_comment_div'>
                    <div className='product_card'>
                        <h5>Creed Aventus Eau De Parfum</h5>
                    </div>
                    <div className='product_card'>
                        <div className='sotiladi'>
                            <p>Sotilgan:</p>
                            <h6>Parfumshop</h6>
                        </div>
                    </div>
                    <div className='product_card'>
                        <p>Narxi:</p>
                        <h4>0 UZS</h4>
                    </div>
                    <div className='product_card'>
                        <p>Miqdori:</p>
                        <div className='number_div'>
                            <button disabled={son < 1} onClick={() => getson("minus")}>
                                <i className="material-icons">remove</i>
                            </button>
                            <b>{son}</b>
                            <button disabled={son >= miqdor} onClick={() => getson("plus")}>
                                <i className="material-icons">add</i>
                            </button>
                            <p>({miqdor} mavjud)</p>
                        </div>
                    </div>
                    <div>
                        <div className='product_card'>
                            <p>Umumiy narx::</p>
                            <h4>0 UZS</h4>
                        </div>
                        <div className='product_button'>
                            <button>Savatchaga Qo'shish</button>
                            <button>Hozir Harid Qilish</button>
                        </div>
                        <div className='product_button'>
                            <button>Istaklar Qo'shish</button>
                            <button>Taqqoslash</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product_comment_header'>
                <div>
                    <div className='product_comment_div1_'>
                        <div className='product_comment_div3'>
                            <p>Sotilgan</p>
                            <b>Parfumshop</b>
                            <p>Tashkent, Chilonzor</p>
                            <div className='product_comment_div'>
                                <p>(0 mijozlar sharhlari)</p>
                            </div>
                        </div>
                        <div className='product_button1_'>
                            <div className='product_button2_'>
                                Do'konga Tashrif Buyurish
                            </div>
                        </div>
                    </div>
                    <div className='TopSellingProducts'>
                        <div className='TopSellingProducts_title'>
                            <h5>Eng ko'p sotiladigan mahsulotlar</h5>
                        </div>
                        <div className='TopSellingProducts_div'>
                            <div className='TopSellingProducts_card'>
                                <div>
                                    <img src="https://unimart.uz/uploads/all/urjPlHoHmWunocyWRpO7u10107qOecIHvcj8Iiba.jpg" alt="" />
                                </div>
                                <div>
                                    <p>LAMSA BODY LOTION 80 GM</p>
                                    <h4>35,000 UZS</h4>
                                </div>
                            </div>
                            <div className='TopSellingProducts_card'>
                                <div>
                                    <img src="https://unimart.uz/uploads/all/z65ezUYA4V27HmP8go3H0GPjBPQhUBjxyT7OowJs.jpg" alt="" />
                                </div>
                                <div>
                                    <p>LAMSA BODY LOTION 80 GM</p>
                                    <h4>35,000 UZS</h4>
                                </div>
                            </div>
                            <div className='TopSellingProducts_card'>
                                <div>
                                    <img src="https://unimart.uz/uploads/all/OSx2HVsgReByejTBAHDBL4RjNrbDBdTxPzZvocvv.jpg" alt="" />
                                </div>
                                <div>
                                    <p>LAMSA BODY LOTION 80 GM</p>
                                    <h4>35,000 UZS</h4>
                                </div>
                            </div>
                            <div className='TopSellingProducts_card'>
                                <div>
                                    <img src="https://unimart.uz/uploads/all/Ndhd7Xo1ESJvbk5xz6BjNhLKASwlwv2vdCA2RJi8.jpg" alt="" />
                                </div>
                                <div>
                                    <p>LAMSA BODY LOTION 80 GM</p>
                                    <h4>35,000 UZS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='product_description'>
                        <div className='product_description_title'>
                            <NavLink className="product_navlink" to={""}>Tavsif</NavLink>
                            <NavLink className="product_navlink" to={""}>Sharhlar</NavLink>
                        </div>
                        <div className='product_description_text'>
                            <p>
                                Аромат Creed Aventus — не просто пример классического парфюма для мужчин, но и духи с многолетней историей. Представители этой культовой французской компании утверждают, что прообраз современного Крид Авентус был создан основателями бренда еще в XVIII веке, и уже тогда завоевал популярность у европейских модников. Спустя не одно столетие — в 2010 году — этот аромат получил новую жизнь. Переосмысленная пирамида духов получилась чуть более стильной и современной, однако полностью сохранила настроение оригинала. Наиболее подробно раскрыть характер Creed Aventus поможет следующая информация: <br /><br />

                                Этот аромат стал одним из первых в категории фруктовой шипровой парфюмерии. Его звучание придется по нраву и любителям классики, и тем модникам, которые предпочитают стильные и необычные мужские парфюмы: Creed Aventus совершенно точно не оставит равнодушным никого! Звучание представленного аромата останется актуальным в любое время года: и в жаркую погоду, и в более прохладный сезон аккорды духов будут уместными. При этом даже в летний зной ноты аромата не будут казаться излишне интенсивными.

                                Стильное строгое оформление флакона Крид Авентус дополнительно подчеркивает оригинальность самого аромата.
                            </p>
                        </div>
                    </div>
                    <div className='Relatedproducts'>
                        <NewProducts title={"Tegishli mahsulotlar"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product