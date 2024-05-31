import React from 'react'
import "./homePage.css";

import img1 from "../../../assets/logo/l1.jpg"

import { Slider, Button} from "../../../components";

const HomePage = () => {
    return (
        <>
            <Slider />

            <section className='home-main'>
                <div className='home-info-container'>

                    <div className='home-info-img'>

                        <img src={img1} alt="" />
                        
                    </div>

                    <div className='home-info-content'>
                        <p className='home-info-title'>An toàn - Chất lượng - Giá cả hợp lý</p>
                        <h2>Nha Khoa Việt Anh</h2>
                        <p>
                            <span>Nha khoa Việt Anh</span> với phương châm đặt lợi ích của khách hàng lên hàng đầu và xem đó là chìa khóa quyết định sự thành công của doanh nghiệp. Chúng tôi luôn tâm niệm chăm sóc răng cho bạn cũng như đang chăm sóc răng cho chính người thân của mình. Không ngừng phát triển, không ngừng hoàn thiện là phương châm xuyên suốt của chúng tôi.<br/>
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

            <section className='home-service-main'>
                <div className='home-service-title'>
                    <h3>Title</h3>
                    <h5>SubTItle</h5>
                </div>

                <div className='home-service-content'>

                </div>

            </section>


        </>
    )
}

export default HomePage