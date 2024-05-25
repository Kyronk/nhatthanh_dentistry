import React from 'react'
import "./footer.css";
import Button from '../Button/Button';

import logo from "../../assets/logo/l1.jpg";

import { SiZalo } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { BsMailbox2Flag } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

// import Zalo from "../../assets/icon/zalo.svg";


const Footer = () => {
    return (
        <footer className='footer-main'>
            <div className='footer-container'>
                
                <div className='content'>
                    <div className='row'>
                        <img src={logo} alt="" />
                        <h2>Nha khoa Nhật Thành</h2>
                        <span>
                            Nha khoa thẩm mỹ uy tín tốt nhất Đồng Nai. <br/>
                            Chỉnh nha Đà Nẵng – Bọc răng sứ Đồng Nai</span>

                        
                        <ul className='social'>
                            <li><a href=""><FaFacebook fontSize="28" /></a></li>
                            <li><a href=""><SiZalo fontSize="28" /></a></li>
                            <li><a href=""><FaFacebookMessenger fontSize="28" /></a></li>
                        </ul>
                    </div>

                    <div className='row'>
                        <h2>Thông tin nha khoa</h2>
                        {/* 2 the div */}
                        <div className='contact'>
                            <div>
                                
                                <h3>Dịch vụ kí thuật</h3>

                            </div>

                            <div>
                                <h3>Nhổ răng không đau</h3>
                            </div>

                            <div>
                                <h3>Niền răng thẩm mĩ</h3>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <h2>Liên hệ</h2>
                        <ul>
                            <li>
                                <FaHouseChimney/> 
                                <span>Nha Khoa nhat thanh: abc-123/12 - An Binh - Đồng Nai</span>
                            </li>
                            <li>
                                <span><FaHouseChimney/></span> 
                                <span>Nha Khoa nhat thanh: abc-123/12 - An Binh - Đồng Nai</span>
                                
                            </li>
                            <li>
                                <a href="">
                                <FaPhone />  0129877666 - 0998876766
                                </a>
                            </li>
                            <li>
                                <BsMailbox2Flag /> <span>nhakhoanhatthanh@gmail.com</span>
                            </li>
                            <li>
                                <a href="">
                                    <TbWorld /> <span>nhatthanhdentistry.com.vn</span>
                                </a>
                            </li>
                        </ul> 
                    </div>

                </div>

            </div>

            <div className="copyrightText">
            Copy 2025 online ... all right reserved. 
            </div>
        </footer>
    )
}

export default Footer