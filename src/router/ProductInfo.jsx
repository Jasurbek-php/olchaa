import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "number-brm";

import {
    AiFillStar,
    AiOutlineHeart,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import {
    BsFacebook,
    BsTelegram,
    BsTwitter,
    BsWhatsapp,
} from "react-icons/bs";
import "./ProductInfo.css"; // Stil uchun o'zingizga mos fayl
import { Card } from "react-bootstrap"; // React Bootstrap ishlatilsa

function ProductInfo() {
    const { state } = useLocation();
    const [mainImage, setMainImage] = useState(state.url);
    const [data] = useState([]);

    const filteredData = data.filter((item) => {
        const firstWord = item.title.split(" ")[0].toLowerCase();
        return firstWord.includes(state.title.split(" ")[0].toLowerCase());
    });

    return (
        <div className="container">
            <div className="product__info__container">
                <div className="product__info">
                    <div className="additional__images">
                        {state.additionalImages && state.additionalImages.length > 0 ? (
                            state.additionalImages.map((item, id) => (
                                <div key={id}>
                                    <img
                                        src={state.img}
                                        alt={state.title}
                                        onClick={() => setMainImage(item)}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>Hech qanday qo'shimcha rasm mavjud emas</p>
                        )}
                    </div>

                    <div className="main__image">
                        <img src={mainImage} alt={state.title} />
                    </div>
                    <div className="product__info__section">
                        <h3 className="title">{state.title}</h3>
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
                                <del>{Math.round(state.price * 1.5).brm("int")} so'm</del>
                                <p>{state.price.brm("int")} so'm</p>
                            </div>
                            <div className="card__monthly">
                                <span>
                                    {Math.round((state.price * 1.44) / 12).brm("int")} so'm/oyiga
                                </span>
                            </div>
                        </div>
                        <div className="brend">
                            <p>Brend:</p> <span>Birbalo.uz</span>
                        </div>
                        <div className="status">
                            <p>Holati:</p> <span>Sotuvda bor</span>
                        </div>
                        <div className="share">
                            <p>Ulashish:</p>
                            <span>
                                <BsFacebook />
                                <BsTelegram />
                                <BsTwitter />
                                <BsWhatsapp />
                            </span>
                        </div>
                        <div className="product__info__actions">
                            <button className="product__info__heart btn btn-warning">
                                <AiOutlineHeart />
                                Saralanganlarga qo'shish
                            </button>
                            <button className="btn btn-primary">
                                <AiOutlineShoppingCart />
                                Savatchaga qo'shish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Mahsulot haqida batafsil</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
                corporis cum porro recusandae incidunt accusamus fuga officia
                reprehenderit debitis, repudiandae optio deserunt provident vero nam
                explicabo eaque numquam in distinctio esse dignissimos! Facere harum
                blanditiis aliquam illo quod autem atque hic nam placeat molestias,
                delectus officiis et quis quibusdam odio, consectetur numquam ducimus.
            </p>
            <h3>Tavsiya qilaman</h3>
            <Card product={filteredData.length > 1 ? filteredData.slice(0, 4) : data.slice(0, 4)} />
        </div>
    );
}


export default ProductInfo;
