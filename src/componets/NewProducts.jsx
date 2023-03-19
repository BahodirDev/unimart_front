import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"


function NewProducts({ title, buttonTitle }) {

    const { posts } = useSelector(state => state.posts)


    return (
        <div className={title == "Tegishli mahsulotlar" ? 'new_products new_products2' : `new_products`}>
            <div className='new_products_title'>
                <h4>{title}</h4>
                {
                    buttonTitle &&
                    <button className='btn btn-danger'>{buttonTitle}</button>
                }
            </div>
            <div className='proucts_body_div'>
                {
                    posts?.map((val, idx) => {
                        return (
                            <div key={idx} className='product_cart'>
                                <Link to={"/product"}>
                                    <img src={val?.img} alt="" />
                                </Link>
                                <b>{val?.price} UZS</b>
                                <p>{val?.title}</p>
                                <div className='like_ikons_div'>
                                    <div>
                                        <i className='material-icons'>favorite_border</i>
                                    </div>
                                    <div>
                                        <i className='material-icons'>autorenew</i>
                                    </div>
                                    <div>
                                        <i className='material-icons'>shopping_cart</i>
                                    </div>
                                </div>
                                <div className='club_poit'><h6>Club Point:</h6><h6>0</h6></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewProducts;