import './Card.css';
import { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillStar } from "react-icons/ai"
import { FiMessageSquare } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // React Router-dan foydalanamiz
import "number-brm";

function Card() {
    const navigate = useNavigate(); // useNavigate-ni ishlatamiz
    const [event] = useState([
        {
            id: 1,
            title: "Игровая консоль Sony PlayStation 5 Slim CD ,1TB (from U.A.E)",
            price: 2_509_000,
            img: 'https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-07-29/uel0TmctQBCuuPqyfNuO3r9TR3kiIrKFxmOtQv1YOeR2wtgDHo1cOYIQGeYc.jpg'
        },
        {
            id: 2,
            title: "Honor X7b 8/128GB",
            price: 2_415_800,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/gmKpama5ndJd3cUB58hzcHazjK1bxWBL7Nbwqzawn5M994yNNU1OYJRyDp6Y.jpg'
        },
        {
            id: 3,
            title: "Apple 15 Pro  ",
            price: 14_493_000,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-24/GXnlCe9OvklS1p0BdVMR0qp9NhQhJQz3ySaRmEnz7XbK8BjnEPLZhKxR2gzw.jpg'
        },
        {
            id: 4,
            title: "Xiamo Redmi 12",
            price: 2_091_000,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/X9ag7McgovFRdMkNVM69vPvV9ycaMgFEgN1iqQdKx3PIuxrkQ849nyGPbaXD.jpg'
        },
        {
            id: 5,
            title: "Samsung Galaxy A15",
            price: 2_209_500,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-08-02/bnK9uRgVG9tyAdlxGzfMvaztbKCINaeTWtkYxjnjCGhoFTFRM7skgSOtDddM.jpg'
        },
        {
            id: 6,
            title: "Xiaomi Redmi Note 13",
            price: 2_287_000,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/U2sN2UcpfFt8DP243Sv7u6qUNi3HcmhfZtRTiQAKFsFRE61RnzZRBcnkMq7B.jpg'
        },
        {
            id: 7,
            title: "Samsung Galaxy S24",
            price: 8_829_000,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/48HWaawTxY3boTO1JB9NZS0gEK8EbkLaY3QMDjFXrSk3OK62XS9ek9lhkP7Q.jpg',
        },
        {
            id: 8,
            title: "Xiaomi Redmi 13C",
            price: 1_682_200,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-24/AK75xdKuWk5l7Q7GJt95BArGIb8YzAxpHeOnxvlzk6zFA16WSmZxDCfxkHIx.jpg',
        },
        {
            id: 9,
            title: "Игровая приставка Sony PlayStation PS5 Slim Digital",
            price: 6_499_000,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/Eg0izQU1CgoBH9m2PzQyKPq4cFyPy0XKf1fPrB3dD1sFXqSsfv3ofmqU7YKw.jpg',
        },
        {
            id: 10,
            title: "Samsung Galaxy A35",
            price: 3_968_000,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-07-29/6CA2LG733Q5z5pL8S0u85Zb9zr3IEV0BqS521xkvJUYmKB9VrIlzY8msjrxc.jpg',
        },
        {
            id: 11,
            title: "Аккумляторы Delkor 60Ah",
            price: 998_100,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-09-10/0aIc5uCTEjlkVhru8e6kHPMTyx497HMbGN57xI9DuWczhOne6UGpF74ZDdUL.jpg',
        },
        {
            id: 12,
            title: "Автомагнитола Pioneer FH-S725BT",
            price: 2_188_800,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-09-10/ysEUZvg7k6KeEb5uhMmr2NPEubRTbWerFuyBK5u9WOtu7fwk7oKc2cCXE7Bt.jpg',
        },
        {
            id: 13,
            title: "Диска для автомобиля R18 0292 5-112 MB 4шт",
            price: 7_886_760,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-09-10/Fcs9SIDzEQCHrmIZdKRZA3QPeUCJY0fwnkL1XcAJ5LhV5Ldtkwlgz1CPWQr1.jpg',
        },
        {
            id: 14,
            title: "Автосигнализация Magicar Dominant 909 (Оригинал)",
            price: 3_304_000,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-09-10/C9cI4kvEtoWMDNA34ncJVJsVcKZZBOkgRHAFUO3mYEjly0V8esHezQr3c9Fp.jpg',
        },
        {
            id: 15,
            title: "Радар-детектор Neoline X-COP 8800s",
            price: 3_462_000,
            img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-09-10/UDUkwqXphdBOJBhnvkADmyrSUpVr0e8oxeAyjhJGEJtH8ADhYQC3jPVtfwE1.jpg',
        }





    ]);

    const handleBuyNow = (product) => {
        navigate('/product-info', { state: product }); // Mahsulot ma'lumotlarini ikkinchi sahifaga o'tkazamiz
    };





    return (
        <div className="product__wrapper__container ">
            <div className="product__wrapper">
                {event.map((e) => {
                    return (
                        <div key={e.id} className='card'>
                            <div className='card__image'>
                                <img src={e.img} alt="" />
                            </div>
                            <button className="card__heart">
                                <AiOutlineHeart />
                            </button>

                            <button className="card__cart">
                                <AiOutlineShoppingCart />
                            </button>

                            <h3>{e.title && e.title.slice(0, 48)}</h3>

                            <div className="card__rating">
                                <div className="card__rate">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <span>
                                    <FiMessageSquare /> 0 sharh
                                </span>
                            </div>

                            <div className="card__price">
                                <div>
                                    <del>{Math.round(e.price * 1.5).brm("int")} so'm</del>
                                    <p>{e.price.brm("int")} so'm</p>
                                </div>
                                <div className="card__monthly">
                                    <span>
                                        {Math.round((e.price * 1.44) / 12).brm("int")} so'm/oyiga
                                    </span>
                                </div>
                            </div>
                            <br />
                            <br />
                            <button
                                className='btn btn-primary mb-2 taptoCart'
                                onClick={() => handleBuyNow(e)} // Tugma bosilganda handleBuyNow funksiyasi chaqiriladi
                            >
                                <p>Mahsulotni korish</p>
                            </button>



                        </div>
                    )



                })}

            </div>
        </div>
    );
}

export default Card;

