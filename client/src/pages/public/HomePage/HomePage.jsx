import React from 'react'
import "./info_style/homePage.css";
import "./service_style/serviceStyle.css";
import "./booking_style/booking_homeStyle.css";
import "./fixbact_style/fixbact_style.css";
import "./achievement_style/achievement_style.css";

import Slider from "react-slick";

import { Link } from 'react-router-dom';

import img1 from "../../../assets/logo/l1.jpg"
import { serviceList } from '../../../utils/service';
import { Button, CardSlick } from "../../../components";
import Booking from '../../../components/Booking/Booking';

// swiper
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
// style swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomePage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    const data = [
        {
            id: 1,
            name: "name a",
            img: "https://mighty.tools/mockmind-api/content/human/65.jpg",
            review: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            id: 2,
            name: "name a",
            img: "https://mighty.tools/mockmind-api/content/human/44.jpg",
            review: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            id: 3,
            name: "name a",
            img: "https://mighty.tools/mockmind-api/content/human/45.jpg",
            review: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            id: 4,
            name: "name a",
            img: "https://mighty.tools/mockmind-api/content/human/55.jpg",
            review: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            id: 5,
            name: "name a",
            img: "https://mighty.tools/mockmind-api/content/human/35.jpg",
            review: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            id: 6,
            name: "name a",
            img: "https://mighty.tools/mockmind-api/content/human/63.jpg",
            review: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
        {
            id: 7,
            name: "name a",
            img: "https://mighty.tools/mockmind-api/content/human/62.jpg",
            review: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        },
    ];



    return (
        <>


            <section className='home-main'>
                <div className='home-info-container'>

                    <div className='home-info-img'>

                        <img src={img1} alt="" />

                    </div>

                    <div className='home-info-content'>
                        <p className='home-info-title'>An toàn - Chất lượng - Giá cả hợp lý</p>
                        <h2>Nha Khoa Việt Anh</h2>
                        <p>
                            <span>Nha khoa Việt Anh</span> với phương châm đặt lợi ích của khách hàng lên hàng đầu và xem đó là chìa khóa quyết định sự thành công của doanh nghiệp. Chúng tôi luôn tâm niệm chăm sóc răng cho bạn cũng như đang chăm sóc răng cho chính người thân của mình. Không ngừng phát triển, không ngừng hoàn thiện là phương châm xuyên suốt của chúng tôi.<br />
                        </p>

                        <p>
                            Với ước mơ thành lập trung tâm Nha khoa đẳng cấp quốc tế, an toàn, nơi có thể đón khách hàng từ các nước phát triển, mang đến dịch vụ, kết quả hỗ trợ điều trị hoàn hảo cho mỗi khách hàng. Góp phần vinh danh nền nha khoa Việt Nam trên trường quốc tế.
                        </p>

                        <p>
                            Hãy khám phá điều khác biệt tại trung tâm <span>Nha khoa Việt Anh</span>. Chúng tôi sẽ mang đến cho Quý khách dịch vụ nha khoa hoàn hảo.
                        </p>

                        <div className='home-info-btn'>
                            <Button
                                children="Hello world"
                            />
                        </div>

                        {/* <Button /> */}
                    </div>
                </div>
            </section>

            {/* service */}
            <section className='home-service-main'>
                <div className='home-service-title'>
                    <h5>Chúng tôi cung cấp</h5>
                    <h3>Dịch vụ - Kỹ thuật</h3>
                </div>

                <div className='home-service-container'>
                    {
                        serviceList?.map((item, idx) => (
                            <div className='home-service-box' key={item.id}>
                                <div className='home-service-img'>
                                    <img src={item.img} alt="" />
                                </div>

                                <div className='home-service-text'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <Button
                                        children="Xem thêm"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>

            {/* lich hen */}
            <section className='booking-home-main'>
                <Booking />
            </section>

            {/* kien thuc nha khoa */}

            <section className='fixbact-main'>
                <div className='fixbact-title'>
                    <h5>Tất cả khách hàng của chúng tôi đều rất vui sau khi điều trị</h5>
                    <h3>Cảm nhận của khách hàng</h3>
                </div>
                
                <Swiper
                    // install Swiper modules
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 2,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                        1190: {
                            slidesPerView: 4,
                        }
                    }}
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log("slide change")}
            >
                {data?.map((item, idx) => (
                    <SwiperSlide 
                        className="fixbact-box" 
                        key={idx}
                        >
                        {/* <div className=""> */}
                            <div className="fixbact-content">
                                <div className="fixbact-img">
                                    <img
                                        className=""
                                        // src="https://static.wixstatic.com/media/2c0034_5916d66c114c4a3fb055fd0fff15f402~mv2.png"
                                        src={item.img}
                                        alt=""
                                    />
                                </div>
                                <div className="fixbact-text">
                                    <h3>{item.review}</h3>
                                    <p className="paragraph mb-2">
                                        {item.name}        
                                    </p>
                                
                                </div>
                            {/* </div> */}
                        </div>
                    </SwiperSlide>
                ))

                }
            </Swiper>



                


            </section>

            {/* thanh tuu */}


        </>
    )
}

export default HomePage