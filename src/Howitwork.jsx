import React, { useState } from "react";
import WorkApi from "./Api/WorkApi";

const Howitwork = () => {
  const [workData, setWorkData] = useState(WorkApi);
  return (
    <>
      <section className="work-container container mx-auto ">
        <h1 className="main-heading text-center mt-2">How does it Work</h1>
        <div className="row">
          {workData.map((currElem) => {
            const { id, logo, title, info } = currElem;
            return (
              <>
                <div
                  className="col-12 col-lg-4 text-center 
                            work-container-subdiv"
                  key={id}
                >
                  <i className={`fontawesome-style ${logo}`}></i>
                  <h2 className="sub-heading">{title}</h2>
                  <p className="main-hero-para">{info}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Howitwork;
