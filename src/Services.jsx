import React, { useState } from "react";
import ServiceApi from "./Api/ServiceApi";

const Services = () => {
  const [serviceData, setServiceData] = useState(ServiceApi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center font-weight-bold">
            How to send money
          </h1>
          <div className="row mx-auto">
            {serviceData.map((currElem) => {
              const { id, logo, title, info } = currElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-headingSer">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
