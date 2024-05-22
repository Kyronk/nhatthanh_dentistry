import React, { useEffect, useState } from 'react'
import "./slider.css";

// import image
import img1 from "../../assets/p1.jpg";
import img2 from "../../assets/p2.jpg";
import img3 from "../../assets/p3.jpg";
import img4 from "../../assets/p4.jpg";
import img5 from "../../assets/p5.jpg";


const dataSlider = [
    {
        id: 1,
        image: img1,
        title: "text title",
        subTitle: "text sub title",
    },
    {
        id: 2,
        image: img2,
        title: "text title",
        subTitle: "text sub title",
    },
    {
        id: 3,
        image: img3,
        title: "text title",
        subTitle: "text sub title",
    },
    {
        id: 4,
        image: img4,
        title: "text title",
        subTitle: "text sub title",
    },
    {
        id: 5,
        image: img5,
        title: "text title",
        subTitle: "text sub title",
    },
]

const Slider = ({ images = dataSlider }) => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut =
            autoPlay &&
            setTimeout(() => {
                slideRight();
            }, 2500);
    });

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };
    // console.log(current);

    return (
        <section className='slider-container'>
            <div
                className="carousel"
                onMouseEnter={() => {
                    setAutoPlay(false);
                    clearTimeout(timeOut);
                }}
                onMouseLeave={() => {
                    setAutoPlay(true);
                }}
            >
                <div className="carousel_wrapper">
                    {images.map((image, index) => {
                        return (
                            /* (condition) ? true : false */

                            <div
                                key={index}
                                className={
                                    index == current
                                        ? "carousel_card carousel_card-active"
                                        : "carousel_card"
                                }
                            >
                                <img className="card_image" src={image.image} alt="" />
                                <div className="card_overlay">
                                    <h2 className="card_title">{image.title}</h2>
                                    <span>{image.sub}</span>
                                </div>
                            </div>
                        );
                    })}
                    <div className="carousel_arrow_left" onClick={slideLeft}>
                        &lsaquo;
                    </div>
                    <div className="carousel_arrow_right" onClick={slideRight}>
                        &rsaquo;
                    </div>
                    <div className="carousel_pagination">
                        {images.map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        index == current
                                            ? "pagination_dot pagination_dot-active"
                                            : "pagination_dot"
                                    }
                                    onClick={() => setCurrent(index)}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Slider