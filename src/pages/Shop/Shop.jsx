import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container/Container";
import useAxios from "../../hooks/useAxios";
import { ProfileCard } from "./ShoeCard";
import Category from "./SideVar/Category";
import { useState } from "react";
import Color from "./SideVar/Color";

const Shop = () => {
    const [category, setCategory] = useState('');
    const [color, setColor] = useState('');
    const axios = useAxios();
    const { data: shoes } = useQuery({
        queryKey: ['shoes', category, color],
        queryFn: async () => axios.get(`/shoes?category=${category}&color=${color}`)
    })

    console.log(color);

    const handleChange = (e) => {
        setCategory(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-8">
                <div className="border">
                    <Category handleChange={handleChange} />
                    <Color handleColorChange={handleColorChange} />
                </div>
                {/* Cards */}
                <div className="col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            shoes?.data?.map(shoe => <ProfileCard
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