import React, { useState } from 'react';
import './Slider.css'; // CSS faylni ulash


const Slider = () => {
    const items = [
        { id: 1, title: "Televizor, foto-video va audio", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png" },
        { id: 2, title: "Noutbuk, printer, kompyuterlar", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/K83YTs4SqPeI3Ohx1lN0bDnbiV1Z9EnwZHMr2HsjIlDhmT48cBgn4C0Ve9Br.png" },
        { id: 3, title: "Smartfon, telefon, gadjet, aksessuarlar", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/yfGs0HUuX5wKnXwPbOyEswpZFzzGhmHdpptTriBTKm01HUxMqTBEg1QA2CQr.png" },
        { id: 4, title: "Maishiy texnika", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png" },
        { id: 5, title: "Barchasi oshxona uchun", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/eCJj0q3ixqzqS3xvZhnMSQnYC1SLTnLB475I5l5ltz6rxi9rUmYauATe5Pa6.png" },
        { id: 6, title: "Sport anjomlari", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png" },
        { id: 7, title: "Go‘zallik va salomatlik", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png" },
        { id: 8, title: "Chet eldan tovarlar", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png" },
        { id: 9, title: "Avto jihozlar", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png" },
        { id: 10, title: "Barchasi ofis, uy va bog‘ uchun", image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slider">
            <button className="arrow left" onClick={prevSlide}>‹</button>
            <div className="slider-content">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
            <button className="arrow right" onClick={nextSlide}>›</button>
        </div>
    );
};

export default Slider;
