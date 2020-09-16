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
        {/* <div class="col-md-12"> */}
        {/* <div class="row"> */}
            <ul class="custom-breadcrumb">
                <li><a href="/" id="ember634" class="ember-view">Beranda</a></li>
                <li><a href="/motor-baru/yamaha" id="ember635" class="ember-view">Yamaha</a></li>
                <li>X-MAX</li>
            </ul>
        {/* </div> */}
        {/* </div> */}
        <div class="products-spec-nmcy-outer-wrapper">
            {/* <div class="row"> */}
                {/* <div class="col-md-9"> */}
                    <div class="products-spec-nmcy-wrapper">
                        <div class="products-spec-image-wrapper">
                            <img class="img-fluid" src="https://assets.adira.one/motor/assets/nmcy/xmax/xmax-colored-black-big.png" alt="main-image" />
                        </div>
                        <div class="products-spec-wrapper">
                            <div class="products-spec-title-wrapper">
                                <p class="products-spec-subtitle margin-top-title">Yamaha</p>
                                <h1 class="products-spec-title">X-MAX</h1>
                            </div>
                            <div class="products-spec-title-wrapper">
                                <div class="products-spec-title-inner-wrapper">
                                    <p class="products-spec-subtitle">Mulai dari</p>
                                    <h1 class="products-spec-price">Rp 61,475,000</h1>
                                </div>
                                <div class="products-spec-title-inner-wrapper">
                                    <p class="products-spec-subtitle-bold">Lokasi</p>
                                    <h1 class="products-spec-title highligts">Jakarta</h1>
                                </div>
                            </div>
                        </div>
                        <div class="images-thumbnail">
                            <ul class="images-thumbnail-group">
                                <li class="images-thumbnail-list">
                                    <img src="https://assets.adira.one/motor/assets/nmcy/xmax/xmax-slider-hazard-lamp.png" class="img-fluid" />
                                </li>
                                <li class="images-thumbnail-list">
                                    <img src="https://assets.adira.one/motor/assets/nmcy/xmax/xmax-slider-multifunction-speedometer.png" class="img-fluid" />
                                </li>
                                <li class="images-thumbnail-list">
                                    <img src="https://assets.adira.one/motor/assets/nmcy/xmax/xmax-slider-adjustable-windshield-&amp;-handlebars-position.png" class="img-fluid" />
                                </li>
                                <li class="images-thumbnail-list images-thumbnail-number">
                                    <div class="number-layer">+6</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div class="col-md-3"> */}
                    <div class="products-variant-nmyc-wrapper">
                        <div class="products-variant-inner-wrapper">
                            <p class="products-variant-title">Varian Motor</p>
                            <ul class="product-variant-type">
                                <li class="variant-type-list highlights active">X-MAX
                                </li>
                            </ul>
                        </div>
                        <div class="products-colors-inner-wrapper">
                            <p class="products-variant-title">Warna</p>
                            <ul class="product-variant-colors">
                                <li class="variant-colors-list spec black active"></li>
                                <li class="variant-colors-list spec blue "></li>
                                <li class="variant-colors-list spec red "></li>
                                <li class="variant-colors-list spec silver "></li>
                            </ul>
                        </div>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </div>
    </div>

    <nav class="navbar fixed-bottom navbar-expand-sm navbar-light bg-light sticky-product-navs">
        {/* <div class="container"> */}
            <div class="button-wrapper">

                <button class="btn btn-outline-primary btn-block font-weight-bold">
                    <span>Tukar Tambah</span>
                </button>
                <button onClick={() => nextPath()} class="btn btn-primary btn-block font-weight-bold gtm-button-ajukan-motorbaru-yamaha">Ajukan Pembiayaan</button>

            </div>
            
        {/* </div> */}
    </nav>
</>
}

export default DetailMomotor;