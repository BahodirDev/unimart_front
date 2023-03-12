import React from 'react'

function AuctionProducts() {
    return (
        <div className='auction_div'>
            <div className='auction_title'>
                <div className='auction_title_div'>
                    <h4>Auktsion mahsulotlari</h4>
                    <button className='btn btn-danger'>View More</button>
                </div>
            </div>
            <div className='auction_img'>
                <div>
                    <img src="https://unimart.uz/uploads/all/gBXLEsMR4yrTHw5XYoqSGIJPHtNcJTMbcXRzjQ1m.png" alt="" />
                </div>
                <div>
                    <img src="https://unimart.uz/uploads/all/MG67e8CaZbtSeqntkmYPaVssHAP6R1gsGQI7Dlxn.png" alt="" />
                </div>
                <div>
                    <img src="https://unimart.uz/uploads/all/MbHHP736CILRonobHv0OWHPjyhTM6uEyFOgG2CrW.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuctionProducts