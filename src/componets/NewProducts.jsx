import React from 'react'

function NewProducts({ title, buttonTitle }) {
    return (
        <div className='new_products'>
            <div className='new_products_title'>
                <h4>{title}</h4>
                {
                    buttonTitle &&
                    <button className='btn btn-danger'>{buttonTitle}</button>
                }
            </div>
            <div className='proucts_body_div'>
                <div className='product_cart'>
                    <img src="https://unimart.uz/uploads/all/OSx2HVsgReByejTBAHDBL4RjNrbDBdTxPzZvocvv.jpg" alt="" />
                    <b>0 UZS</b>
                    <p>Dior Sauvage Parfum 100 ml</p>
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
                <div className='product_cart'>
                    <img src="https://unimart.uz/uploads/all/z65ezUYA4V27HmP8go3H0GPjBPQhUBjxyT7OowJs.jpg" alt="" />
                    <b>0 UZS</b>
                    <p>Dior Sauvage Parfum 100 ml</p>
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
                <div className='product_cart'>
                    <img src="https://unimart.uz/uploads/all/5KPw6Lauyc1FvgtHtSURtgK6SJeEZSmhteKlZrTo.jpg" alt="" />
                    <b>0 UZS</b>
                    <p>Dior Sauvage Parfum 100 ml</p>
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
            </div>
        </div>
    )
}

export default NewProducts;