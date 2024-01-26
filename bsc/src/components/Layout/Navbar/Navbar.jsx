import React, { useState } from 'react'
// import Select from 'react-select';
import './../../sass/Navbar.scss'
import Logo from './../../../assets/Navbar/Group 2762.svg'

const Navbar = () => {
    const [currentLanguage, setCurrentLanguage] = useState('ENG');

    const handleLanguageChange = (event) => {
        setCurrentLanguage(event.target.value);
    };

    return (
        <nav id="nav">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="left_side">
                            <div className="logo">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <ul className="right_side justify-content-end">
                            <li>Haqqımızda</li>
                            <li>Xidmətlər</li>
                            <li>Layihələr</li>
                            <li>Əlaqə</li>
                            <li>
                                <select
                                    id="languageSelect"
                                    value={currentLanguage}
                                    onChange={handleLanguageChange}
                                >
                                    <option value="Az">Az</option>
                                    <option value="En">En</option>
                                </select>
                            </li>
                            <li>
                                <button>Sifariş et</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar