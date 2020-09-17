import React from "react";
import { useHistory } from 'react-router-dom';
// import Form from "./Form";
// import Navigation from "./Navigation";


const DetailMomotor = () => {
    const history = useHistory();
    const nextPath = () => {
        history.push("/formmomotor");
      }
      
    return <><div id="section-product-details-nmcy">
        {/* <div className="col-md-12"> */}
        {/* <div className="row"> */}
            {/* <ul className="custom-breadcrumb">
                <li><a href="/" id="ember634" className="ember-view">Beranda</a></li>
                <li><a href="/motor-baru/yamaha" id="ember635" className="ember-view">Yamaha</a></li>
                <li>X-MAX</li>
            </ul> */}
        {/* </div> */}
        {/* </div> */}
        <div className="products-spec-nmcy-outer-wrapper">
            {/* <div className="row"> */}
                {/* <div className="col-md-9"> */}
                    <div className="products-spec-nmcy-wrapper">
                        <div className="products-spec-image-wrapper">
                            <img className="img-fluid" src="https://assets.adira.one/motor/assets/nmcy/xmax/xmax-colored-black-big.png" alt="main" />
                        </div>
                        <div className="products-spec-wrapper">
                            <div className="products-spec-title-wrapper">
                                <p className="products-spec-subtitle margin-top-title">Yamaha</p>
                                <h1 className="products-spec-title">X-MAX</h1>
                            </div>
                            <div className="products-spec-title-wrapper">
                                <div className="products-spec-title-inner-wrapper">
                                    <p className="products-spec-subtitle">Mulai dari</p>
                                    <h1 className="products-spec-price">Rp 61,475,000</h1>
                                </div>
                                <div className="products-spec-title-inner-wrapper">
                                    <p className="products-spec-subtitle-bold">Lokasi</p>
                                    <h1 className="products-spec-title highligts">Jakarta</h1>
                                </div>
                            </div>
                        </div>
                        <div className="images-thumbnail">
                            <ul className="images-thumbnail-group">
                                <li className="images-thumbnail-list">
                                    <img src="https://assets.adira.one/motor/assets/nmcy/xmax/xmax-slider-hazard-lamp.png" className="img-fluid" alt="main" />
                                </li>
                                <li className="images-thumbnail-list">
                                    <img src="https://assets.adira.one/motor/assets/nmcy/xmax/xmax-slider-multifunction-speedometer.png" className="img-fluid" alt="main"/>
                                </li>
                                <li className="images-thumbnail-list">
                                    <img src="https://assets.adira.one/motor/assets/nmcy/xmax/xmax-slider-adjustable-windshield-&amp;-handlebars-position.png" className="img-fluid" alt="main"/>
                                </li>
                                <li className="images-thumbnail-list images-thumbnail-number">
                                    <div className="number-layer">+6</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="col-md-3"> */}
                    <div className="products-variant-nmyc-wrapper">
                        <div className="products-variant-inner-wrapper">
                            <p className="products-variant-title">Varian Motor</p>
                            <ul className="product-variant-type">
                                <li className="variant-type-list highlights active">X-MAX
                                </li>
                            </ul>
                        </div>
                        <div className="products-colors-inner-wrapper">
                            <p className="products-variant-title">Warna</p>
                            <ul className="product-variant-colors">
                                <li className="variant-colors-list spec black active"></li>
                                <li className="variant-colors-list spec blue "></li>
                                <li className="variant-colors-list spec red "></li>
                                <li className="variant-colors-list spec silver "></li>
                            </ul>
                        </div>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </div>
    </div>

    <nav className="navbar fixed-bottom navbar-expand-sm navbar-light bg-light sticky-product-navs">
        {/* <div className="container"> */}
            <div className="button-wrapper">

                <button className="btn btn-outline-primary btn-block font-weight-bold">
                    <span>Tukar Tambah</span>
                </button>
                <button onClick={() => nextPath()} className="btn btn-primary btn-block font-weight-bold gtm-button-ajukan-motorbaru-yamaha">Ajukan Pembiayaan</button>

            </div>
            
        {/* </div> */}
    </nav>
</>
}

export default DetailMomotor;