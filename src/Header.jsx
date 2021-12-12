import React from 'react'
import h1 from './image/nath.jpg';
import h2 from './image/pays.jpg'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center
                         flex-column align-items-start order-lg-first order-last ">
                            <h1 className="display-2">Online Payment Made <br />easy for you</h1>
                            <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quibusdam repellat deserunt architecto ex dolorum incidunt quia.
                                Tenetur consequatur aliquam architecto quam eius,
                                est obcaecati veniam consequuntur nobis animi. Quas, cupiditate!</p>
                            <h3>Get Early access for you</h3>

                            {/* input field */}
                            <div className="input-group col-10">
                                <input type="text" className="rounded-pill w-75 w-lg-75 p-2 me-3 form-control-text"
                                    placeholder="Enter your email" />
                                <div className="input-group-text col-2">
                                    Get at Now
                                </div>
                            </div>
                        </div>

                        {/* main header right-side */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center
                         align-items-center main-herosection-images order-md-first order-sm-first ">
                            <img src={h1} alt="hero" className="img-fluid mx-auto" />
                            <img src={h2} alt="hero" className="img-fluid mx-auto main-hero-img2" />
                        </div>

                    </div>

                </section>
            </header>
        </>
    )
}

export default Header;
