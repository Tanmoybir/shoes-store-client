import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShoesCard = ({ shoe }) => {
    const {_id ,img, title, category, newPrice } = shoe;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="">
            <div className="border border-brown-300" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="h-80 flex justify-center items-center">
                    <img className="w-60 h-60" src={img} alt="" />
                </div>
                <div className={`border flex justify-center items-center ${isHovered ? 'visible' : 'invisible'}`}>
                    <Link to={`/shoeDetails/:${_id}`}><FaRegEye className={`my-3 text-2xl`} /></Link>
                </div>
                <div className="text-center border border-green-600">
                    <h1 className="text-2xl font-semibold hover:text-red-300">{title}</h1>
                    <p className="text-red-300 text-xl font-medium mt-2">Price: ${newPrice}</p>
                    <p className="text-xl font-medium">Category: {category}</p>
                </div>
            </div>
        </div>
    );
};

export default ShoesCard;
