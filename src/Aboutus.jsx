import React, { useState } from 'react'
import HowToUse from './Api/HowToUse'
import c1 from "./image/Cpay.jpg"
const Aboutus = () => {
    const [aboutData, setAboutData] = useState(HowToUse)
    return (
        <>
            <section className="common-section our-Service mx-auto ">
                <div className=" container mb-5 mx-auto">
                    <div className="row">

                        <div className="col-12 col-lg-5 mt-5 text-center our-Service-leftside-img">
                            <img className="img-fluid" src={c1} alt="" />
                        </div>
                        {/* right side */}
                        <div className="col-12 col-lg-7 our-Service-list mx-auto">
                            <h3 className="mini-title">
                                -- AVAILBALE @ GOOGLE AND IOS APP ONLY
                            </h3>
                            <h1 className="main-heading"> How to use the App?</h1>
                            {
                                aboutData.map((currElem) => {
                                    const { id, title, info } = currElem;
                                    return <>
                                        <div className="row our-Service-info" key={id}>
                                            <div className="col-1 our-Service-number">{id}</div>
                                            <div className="col-10 our-Section-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">
                                                    {info}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                            <br />
                            <button className="btn-style btn-style-border">lean more..</button>
                        </div>
                    </div>
                </div>
            </section>


            {/*-----------------------------------2nd round------------------ */}
            <section className="common-section our-Service our-Section-rightside mx-auto ">
                <div className=" container mb-5">
                    <div className="row">


                        {/* right side */}
                        <div className="col-12 col-lg-7 our-Service-rightside-content ">
                            <h3 className="mini-title">
                                -- SUPPORT IN ANY LANGUAGE
                            </h3>
                            <h1 className="main-heading">World class support is available 24/7</h1>
                            {
                                aboutData.map((currElem) => {
                                    const { id, title, info } = currElem;
                                    return <>
                                        <div className="row our-Service-info" key={id}>
                                            <div className="col-1 our-Service-number">{id}</div>
                                            <div className="col-10 our-Section-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">
                                                    {info}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                            <br />
                            <button className="btn-style btn-style-border">lean more..</button>
                        </div>
                        {/* image */}
                        <div className="col-12 col-lg-5 mt-5 text-center our-Service-rightside-img">
                            <img className="img-fluid" src={c1} alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Aboutus;
