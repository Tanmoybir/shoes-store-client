import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container/Container";
import useAxios from "../../hooks/useAxios";
import { ProfileCard } from "./ShoeCard";
import Category from "./SideVar/Category";
import { useState } from "react";

const Shop = () => {
    const [category,setCategory] = useState('')
    const axios = useAxios();
    const { data: shoes } = useQuery({
        queryKey: ['shoes',category],
        queryFn: async () => axios.get(`/shoes?category=${category}`)
    })

    console.log(category);

    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-8">
                <div className="border">
                    {/* category */}
                    <div className="">
                        <Category handleChange={handleChange} />

                    </div>
                    {/* Price */}
                    <div className=""></div>
                    {/* Colors */}
                    <div className=""></div>
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