import './Navbar.css';
import logo from '../../assets/image/logo.png'
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
function Navbar() {
    return (
        <div className="Navbar">
            <img src={logo} alt="" />
            <button className='btn'> <CiMenuBurger /> Katalog</button>
            <div className='input'> <input type="text" placeholder="Katalog bo'yicha izlash" /> <button className='catalog-btn'><CiSearch /></button> </div>
            <div className='mobile'>

                <a href="#taqqoslash" id="search">
                    <TbBrandGoogleAnalytics /><br />
                    Taqqoslash</a>
                <a href="#love">
                    <FaRegHeart /><br />
                    Sevimlilar</a>
                <a href="#cash">
                    <SlBasket /> <br />
                    Savatcha
                </a>
                <a href="#login">
                    <BsPerson /><br />
                    Kirish</a>
            </div>
        </div>
    );
}

export default Navbar;
