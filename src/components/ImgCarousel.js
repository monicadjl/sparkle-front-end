import React, { useState, useEffect } from 'react';
import './ImgCarousel.css'

import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import today from '../images/today.jpeg';

const images = [
    image4,
    image2,
    image3,
    image1,
    image5,
    image6,
    today
];

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <section id="image-carousel" className="image-carousel">
            <div className="image-carousel__image-container">
            <img src={images[currentImageIndex]} alt="" className="image-carousel__image" />
            <button className="image-carousel__nav-button image-carousel__prev-button" onClick={prevImage}>
                &#8249;
            </button>
            <button className="image-carousel__nav-button image-carousel__next-button" onClick={nextImage}>
                &#8250;
            </button>
            </div>
        </section>
    );
};

export default ImageCarousel;
