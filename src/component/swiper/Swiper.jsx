import './Swiper.css';
import swiper1 from '../../assets/image/slider1.jpg'
import swiper2 from '../../assets/image/slider2.jpg'
import swiper3 from '../../assets/image/slider3.jpg'
import swiper4 from '../../assets/image/slider4.jpg'
import swiper5 from '../../assets/image/slider5.jpg'

function Swiper() {
    return (
        <div className="Swiper">
            <swiper-container className="mySwiper" navigation="true" pagination="true" keyboard="true" mousewheel="true"     css-mode="true">
                <swiper-slide><img src={swiper1} alt="" /></swiper-slide>
                <swiper-slide><img src={swiper2} alt="" /></swiper-slide>
                <swiper-slide><img src={swiper3} alt="" /></swiper-slide>
                <swiper-slide><img src={swiper4} alt="" /></swiper-slide>
                <swiper-slide><img src={swiper5} alt="" /></swiper-slide>

            </swiper-container>

        </div>
    );
}

export default Swiper;
