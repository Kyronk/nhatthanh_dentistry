import React from 'react'

import "./navbar.css";

const Navbar = () => {
    return (
        <>
            <nav>

                <div className='wrapper'>
                    <div className="logo"><a href="">Logo</a></div>

                    <input type="radio" name="slide" id="menu-btn" />
                    <input type="radio" name="slide" id="cancel-btn" />

                    <ul className="nav-links">
                        <label htmlFor="cancel-btn" className="btn cancel-btn">
                            <i className="fas fa-times"></i>
                        </label>
                        {/* <li><a href="">Trang chủ</a></li> */}
                        <li>
                            <a href="" className='desktop-item'>Giới thiệu</a>
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
                            <a href="" className="desktop-item">Dịch vụ</a>
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
                            <a href="" className="desktop-item">Kỹ thuật </a>

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
                        <li><a href="">Bảng giá</a></li>
                        <li><a href="">Thông tin liên hệ và tư vấn</a></li>
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

export default Navbar