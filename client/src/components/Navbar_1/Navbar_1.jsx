import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./navbar_1.css";

import path from '../../utils/path';

const Navbar_1 = () => {
    return (
        <>
            <nav>

                <div className='wrapper'>
                    <div className="logo">
                        <Link to={`/${path.HOME}`}>Logo</Link>
                    </div>

                    <input type="radio" name="slide" id="menu-btn" />
                    <input type="radio" name="slide" id="cancel-btn" />

                    <ul className="nav-links">
                        <label htmlFor="cancel-btn" className="btn cancel-btn">
                            <i className="fas fa-times"></i>
                        </label>
                        {/* <li><a href="">Trang chủ</a></li> */}
                        <li>
                            <Link to={`/${path.GIOI_THIEU}`} className='desktop-item'>Giới thiệu</Link>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item" >Giới thiệu</label>
                            <ul className="drop-menu">
                                <li><a href="">Drop menu 1</a></li>
                                <li><a href="">Drop menu 2</a></li>
                                <li><a href="">Drop menu 3</a></li>
                                <li><a href="">Drop menu 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`/${path.DICH_VU}`} className="desktop-item">Dịch vụ</Link>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item" >Đánh giá</label>
                            <ul className="drop-menu">
                                <li><a href="">Drop menu 1</a></li>
                                <li><a href="">Drop menu 2</a></li>
                                <li><a href="">Drop menu 3</a></li>
                                <li><a href="">Drop menu 4</a></li>
                            </ul>
                        </li>
                        <li>
                            <Link to={`/${path.KY_THUAT}`} className="desktop-item">Kỹ thuật </Link>

                            <input type="checkbox" id="showMega" />
                            <label htmlFor="showMega" className="mobile-item">Đánh giá</label>

                            <div className="mega-box">
                                <div className="content">
                                    {/* <div className="row">

                                    </div> */}

                                    <div className="row">
                                        <header>Design Service</header>
                                        <ul className="mega-links">
                                            <li><a href="">Drop menu 1</a></li>
                                            <li><a href="">Drop menu 2</a></li>
                                            <li><a href="">Drop menu 3</a></li>
                                            <li><a href="">Drop menu 4</a></li>
                                        </ul>
                                    </div>

                                    <div className="row">
                                        <header>Email Service</header>
                                        <ul className="mega-links">
                                            <li><a href="">Drop menu 1</a></li>
                                            <li><a href="">Drop menu 2</a></li>
                                            <li><a href="">Drop menu 3</a></li>
                                            <li><a href="">Drop menu 4</a></li>
                                        </ul>
                                    </div>

                                    <div className="row">
                                        <header>Security Service</header>
                                        <ul className="mega-links">
                                            <li><a href="">Drop menu 1</a></li>
                                            <li><a href="">Drop menu 2</a></li>
                                            <li><a href="">Drop menu 3</a></li>
                                            <li><a href="">Drop menu 4</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li><Link to={`/${path.BANG_GIA}`}>Bảng giá</Link></li>
                        <li><Link to={`/${path.THONG_TIN_TU_VAN}`}>Thông tin liên hệ và tư vấn</Link></li>
                        <li><a href="">Góp ý</a></li>

                    </ul>

                    <label htmlFor="menu-btn" className="btn menu-btn">
                        <i className="fas fa-bars"></i>
                    </label>

                </div>

            </nav>
        </>
    )
}

export default Navbar_1;