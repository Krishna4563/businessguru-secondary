import React from "react";
import "./footer.css";
import companylogo from "../Assets/companyLogo.jpg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    setTimeout(() => {
      navigate("/");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService1 = () => {
    setTimeout(() => {
      navigate("/services/startup-advisory");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService2 = () => {
    setTimeout(() => {
      navigate("/services/human-resource");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService3 = () => {
    setTimeout(() => {
      navigate("/services/marketing-consulting");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService4 = () => {
    setTimeout(() => {
      navigate("/services/digital-marketing");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService5 = () => {
    setTimeout(() => {
      navigate("/services/lead-generation");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService6 = () => {
    setTimeout(() => {
      navigate("/services/virtual-cxo");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService7 = () => {
    setTimeout(() => {
      navigate("/services/web-development");
      window.scrollTo(0, 0);
    }, 200);
  };

  const handleService8 = () => {
    setTimeout(() => {
      navigate("/services/customer-success-consulting");
      window.scrollTo(0, 0);
    }, 200);
  };

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-1" onClick={handleHome}>
          <img src={companylogo} alt="company-logo" />
          <p className="title">BusinessGuru</p>
          <p className="title-quote">Connect | Consult | Collaborate</p>
        </div>
        <div className="footer-2">
          <h3>Services</h3>
          <div className="s-inner-div-1">
            <p onClick={handleService1}>Startup Advisory</p>
            <p onClick={handleService2}>Human Resource</p>
            <p onClick={handleService3}>Marketing Consulting</p>
            <p onClick={handleService4}>Digital Marketing</p>
            <p onClick={handleService5}>Lead Generation</p>
            <p onClick={handleService6}>Virtual CXO</p>
            <p onClick={handleService7}>Web Development</p>
            <p onClick={handleService8}>Customer Success Consulting</p>
          </div>
        </div>
        <div className="footer-3">
          <h3>Get in Touch</h3>
          <div className="s-inner-div">
            <p>BusinessGuru Consulting Pvt. Ltd.</p>
            <p>CIN: U11111HR1111PTC111111 </p>
            <p>Address line 1</p>
            <p>Address line 2</p>
            <span>
              {" "}
              <p>
                <b>Phone:</b> 91.111111111
              </p>
            </span>
            <p>
              <b>Email:</b> Businessguru@gmail.com
            </p>
            <div className="footer-div-3">
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
              <div className="social-media-2">
                <img src={companylogo} alt="company-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        {" "}
        Copyright © 2024 BusinessGuru, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
