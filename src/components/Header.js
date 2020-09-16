import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

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
                <img src="https://assets.adira.one/motor/assets/revamp-icons/pin_sidebar.svg" />
              </button>
            </div>
            <div className="momotor-logo">
              <a href="/" id="ember565" className="ember-view">        <img className="image-brand-mobile" src="https://assets.adira.one/motor/images/momotor.png" alt="momotor logo" />
              </a>      </div>
          </div>
          <div className="sidebar-button-pin-mobile">
            <div id="ember566" className="ember-view"><div className="header-pin d-lg-none" data-toggle="modal" data-target="#pinLocation">
              <img src="https://assets.adira.one/motor/assets/revamp-icons/Pin.svg" />
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


            {/* <div className="modal modal-search full-page fade" id="pinSearch" tabindex="-1" role="dialog" aria-labelledby="pinSearch" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="header">
                    <div className="back-button">
                      <button className="btn" data-dismiss="modal" type="close">
                        <img src="https://assets.adira.one/motor/assets/revamp-icons/back_mobile.svg" />
                      </button>
                    </div>
                    <div className="search-box">
                      <div className="input-group">
                        <input className="form-control input-query" name="search" placeholder="Coba 'Yamaha Nmax 2018'" autocomplete="off" autofocus="true" type="search" />
                        <div className="input-group-append">
                          <button className="btn btn-primary btn-search">
                            <img src="https://assets.adira.one/motor/assets/revamp-icons/Search.svg" alt="Momotor_Search.svg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="body">
                    <div className="search-result-suggestion-wrapper d-none">
                      <ul className="search-result-suggestion">
                        <li className="search-result-item">
                          <div className="result-wrapper">
                            <h3 className="search-query"></h3>
                            <h3 className="search-result-category">Semua Kategori</h3>
                          </div>
                          <div className="arrow-wrapper">
                            <img className="reverse-arrow" src="https://assets.adira.one/motor/assets/revamp-icons/back_mobile.svg" alt="go_arrow" />
                          </div>
                        </li>
                        <a>
                          <li className="search-result-item result-nmcy d-none">
                            <div className="result-wrapper">
                              <h3 className="search-query"></h3>
                              <h3 className="search-result-category">Kategori Motor Baru</h3>
                            </div>
                            <div className="arrow-wrapper">
                              <img className="reverse-arrow" src="https://assets.adira.one/motor/assets/revamp-icons/back_mobile.svg" alt="go_arrow" />
                            </div>
                          </li>
                        </a>
                        <li className="search-result-item">
                          <div className="result-wrapper">
                            <h3 className="search-query"></h3>
                            <h3 className="search-result-category">Kategori Motor Bekas</h3>
                          </div>
                          <div className="arrow-wrapper">
                            <img className="reverse-arrow" src="https://assets.adira.one/motor/assets/revamp-icons/back_mobile.svg" alt="go_arrow" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="img-illustration-and-text-wrapper">
                      <img className="img-illustration" src="https://assets.adira.one/motor/assets/revamp-icons/search_mobile_illustration.png" alt="momotor_search" />
                      <h4 className="body-text">Mau cari motor apa?</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
