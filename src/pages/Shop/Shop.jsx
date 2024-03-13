import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container/Container";
import useAxios from "../../hooks/useAxios";
import Category from "./SideVar/Category";
import { useState } from "react";
import Color from "./SideVar/Color";
import Price from "./SideVar/Price";
import Sort from "./Sort";
import ShoesCard from "./ShoesCard";

const Shop = () => {
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');
    const [sortOrder, setSortOrder] = useState('')
    const [price, setPrice] = useState('')
    const axios = useAxios();
    const { data: shoes } = useQuery({
        queryKey: ['shoes', category, color,sortOrder,price],
        queryFn: async () => axios.get(`/shoes?category=${category}&color=${color}&sortField=newPrice&sortOrder=${sortOrder}&price=${price}`)
    })

console.log(price);
    const handleChange = (e) => {
        setCategory(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-8">
                <div className="border">
                    <Category handleChange={handleChange} />
                    <Price handlePriceChange={handlePriceChange}/>
                    <Color handleColorChange={handleColorChange} />
                </div>
                {/* Cards */}
                <div className="col-span-3">
                    <Sort
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            shoes?.data?.map(shoe => <ShoesCard
                                key={shoe._id}
                                shoe={shoe}
                            />)
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Shop;