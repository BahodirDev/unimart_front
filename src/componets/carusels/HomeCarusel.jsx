import React from 'react'

function HomeCarusel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img id='carusel_img' src="https://unimart.uz/uploads/all/fH0atrHuaZtKHacG9zdBeWJpIivJhvvlyjB9zRCs.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img id='carusel_img' src="https://unimart.uz/uploads/all/4N7W3eE5s7BA8Bmg85ebt6Y2WgJuJM5UXe1GTYZC.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HomeCarusel