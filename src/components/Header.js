import React from "react";
// import Form from "./Form";
// import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      {/* <Form history={history} handleSubmit={handleSubmit} /> */}
      {/* <Navigation /> */}
      <nav id="navigation-desktop" className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top d-block d-sm-none">
        <div className="navigation-mobile-sidebar-and-logo">
          <div className="sidebar-burgerbar-and-logo">
            <div className="sidebar-button-burgerbar-mobile">
              <button id="sidebarCollapse" className="navbar-toggler" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" type="button">
                <img src="https://assets.adira.one/motor/assets/revamp-icons/pin_sidebar.svg" alt="sidebar" />
              </button>
            </div>
            <div className="momotor-logo">
              <a href="/" id="ember565" className="ember-view">        <img className="image-brand-mobile" src="https://assets.adira.one/motor/images/momotor.png" alt="momotor logo" />
              </a>      </div>
          </div>
          <div className="sidebar-button-pin-mobile">
            <div id="ember566" className="ember-view"><div className="header-pin d-lg-none" data-toggle="modal" data-target="#pinLocation">
              <img src="https://assets.adira.one/motor/assets/revamp-icons/Pin.svg" alt="sidebar" />
            </div>
              
            </div>
          </div>
        </div>
        <div className="navigation-mobile-search-bar">
          <div id="ember567" className="ember-view"><div className="container" data-toggle="modal" data-target="#pinSearch">
            <div className="mobile-search">
              <span>Coba "Yamaha Nmax 2018"</span>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
