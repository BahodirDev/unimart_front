import React from 'react'
import { NavLink } from 'react-router-dom'

function Accordion() {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div>
                                <h5>Kategotiyalar</h5>
                            </div>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div classNameName='category_card_body'>
                                <NavLink to={"/category"} className='category_card'>
                                    <img src="https://unimart.uz/uploads/all/8K6TpHoouUdZY2Zw0WHPiWkNWHorugIs856jbeVW.png" alt="" />
                                    <p>Telefonlar va aksessuarlar</p>
                                </NavLink>
                                <NavLink to={"/category"} className='category_card'>
                                    <img src="https://unimart.uz/uploads/all/rxGxryBY0H07QaUoOmh3AWXlm0QIaKgUmdFrKl0e.png" alt="" />
                                    <p>Kompyuterlar va ofis jihozlari</p>
                                </NavLink>
                                <NavLink to={"/category"} className='category_card'>
                                    <img src="https://unimart.uz/uploads/all/nwnSYA4Z5eyVsZBXynMrqfeAdVrELOl3f7zao5mx.jpg" alt="" />
                                    <p>Maishiy texnika</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion