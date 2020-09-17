import React, { useState } from "react";

const FormMomotor = ({ handleSubmit, history }) => {
    const [nama, setNama] = useState("");
    const [noktp, setNoKTP] = useState("");
    const [kelurahan, setKelurahan] = useState("");
    // const [data, setData] = useState({})
    // update search text state
    const OnSubmit = () => {
        // setSearchEntry(e.target.value);
        let data = {
            type: 'momotor',
            attributes: {
                nama,
                noktp,
                kelurahan
            }
        }
        // setData(data)
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(data)
            setNama("")
            setNoKTP("")
            setKelurahan("")
        }
    };
    return (<>
        <div
            className="search-form"
        >   <div className="back-button">
                <a href="/" id="ember565" className="ember-view"> 
                <img src="https://assets.adira.one/motor/assets/revamp-icons/back_mobile.svg" alt="back"/>Kembali
                </a>
            </div>
            <h3>Form pengajuan</h3>
            <div className="forminput">
                <div className="label">
                    Nama
                </div>
                <input
                    type="text"
                    name="search"
                    placeholder="Nama..."
                    onChange={(e) => setNama(e.target.value)}
                    value={nama}
                />
            </div>
            <div className="forminput">
                <div className="label">
                    No KTP
                </div>
                <input
                    type="text"
                    name="search"
                    placeholder="No KTP..."
                    onChange={(e) => setNoKTP(e.target.value)}
                    value={noktp}
                />
            </div>
            <div className="forminput">
                <div className="label">
                    Kelurahan
                </div>
                <input
                    type="text"
                    name="search"
                    placeholder="Kelurahan..."
                    onChange={(e) => setKelurahan(e.target.value)}
                    value={kelurahan}
                />
            </div>
            <button
                type="submit"
                className="submit-button"
                onClick={() => OnSubmit()}
            >
                Submit
                {/* <svg height="32" width="32">
                    <path
                        d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                        fill="#ffffff"
                        fillRule="evenodd"
                    />
                </svg> */}
            </button>
        </div>
        </>
    );
};

export default FormMomotor;
