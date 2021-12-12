import React, { useState } from "react";
import g1 from "./image/mobile.jpg";

const Contacts = () => {
  const [useData, setUseData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUseData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUseData({ ...useData, [name]: value });
  };
  // firebase
  const submitData = async (event) => {
    event.preventDefault();
    // destucture
    const { firstName, lastName, phone, email, address, message } = useData;
    // empty data not fill
    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://contact-details-17332-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          header: {
            "Content-Type": "applictaion/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        // form filling to empty
        setUseData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the Data");
      }
    } else {
      alert("plz fill the Data");
    }
  };
  return (
    <>
      <section className="contactus-section ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contactus-leftside col-12 col-lg-5">
                  <h1 className="main-heading">
                    Connect With our <br />
                    Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae dicta quo asperiores itaque dolore
                  </p>
                  <figure>
                    <img src={g1} className="img-fluid" alt="Contactus" />
                  </figure>
                </div>
                {/* -------rightside contact form */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          id=""
                          className="form-control"
                          name="firstName"
                          value={useData.firstName}
                          onChange={postUseData}
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          id=""
                          className="form-control"
                          name="lastName"
                          value={useData.lastName}
                          onChange={postUseData}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          id=""
                          className="form-control"
                          name="phone"
                          value={useData.phone}
                          onChange={postUseData}
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          id=""
                          className="form-control"
                          name="email"
                          value={useData.email}
                          onChange={postUseData}
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          id=""
                          className="form-control "
                          name="address"
                          value={useData.address}
                          onChange={postUseData}
                          placeholder="ADD Address"
                        />
                      </div>
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          id=""
                          className="form-control"
                          name="message"
                          value={useData.message}
                          onChange={postUseData}
                          placeholder="Enter Your Message"
                        />
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label main-hero-para">
                        Checked checkbox
                      </label>
                    </div>
                    <button
                      onClick={submitData}
                      type="submit"
                      className="btn btn-style w-100"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
