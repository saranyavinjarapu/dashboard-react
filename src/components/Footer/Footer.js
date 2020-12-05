import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__container">
          <div className="Footer__mainContainer">
            <div className="Footer__linksContainer">
              <div className="Footer__ItemsContainer">
                <a
                  href="https://innoloft.com/home"
                  className="Footer__ItemsText"
                >
                  Contact
                </a>
              </div>
              <div className="Footer__ItemsContainer">
                <a
                  href="https://innoloft.com/home"
                  className="Footer__ItemsText"
                >
                  Data Privacy
                </a>
              </div>
              <div className="Footer__ItemsContainer">
                <a
                  href="https://innoloft.com/home"
                  className="Footer__ItemsText"
                >
                  Imprint
                </a>
              </div>
              <div className="Footer__ItemsContainer">
                <a
                  href="https://innoloft.com/home"
                  className="Footer__ItemsText"
                >
                  Terms of use
                </a>
              </div>
              <div className="Footer__ItemsContainer">
                <a href="https://innoloft.com/home"> Blog</a>
              </div>
            </div>
            <div className="Footer__copyrightInfo">©2020 Innoloft GmbH</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
