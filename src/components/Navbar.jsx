import logo from "../image/logo.png";
import {FaRegHeart} from "react-icons/fa";

const Navbar = ({characterCount , favorite , openHandler , searchHandler}) => {
    return ( 
        <nav id="nav" className="mx-3 flex justify-between items-center bg-gray-700 rounded-xl px-7 py-2">
            <div className="w-16 hidden md:block">
                <img src={logo} alt="logo" className="w-full"/>
            </div>
            <input onChange={searchHandler} type="text" placeholder="search..." className="rounded-md outline-none border-none bg-gray-600 p-2 text-white"/>
            <p className="text-gray-300 hidden md:block">found {characterCount} result</p>
            <button className="w-6 h-10 relative flex justify-center items-center" onClick={openHandler}>
                <FaRegHeart color="#b91c1c" size="23"/>
                <span className="absolute -top-1 -right-3 text-white flex justify-center items-center rounded-full text-xs p-1 bg-red-700 w-5 h-5">{favorite > 9 ? "+9" : favorite}</span>
            </button>
        </nav>
    );
}
 
export default Navbar;