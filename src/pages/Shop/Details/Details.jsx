import { useMutation, useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container/Container";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Details = () => {

    const axios = useAxios()
    const { id } = useParams()
    const { data: details } = useQuery({
        queryKey: ['shoes'],
        queryFn: async () => {
            const res = await axios.get(`/shoes/${id}`)
            return res
        }
    })

    const {mutate} = useMutation({
        mutationKey:['shoes'],
        mutationFn:async (myCart) => {
            const res = await axios.post('/user/myCart',myCart)
            return res
        }
    })

    console.log(details?.data);
    return (
        <Container>
            <div className="max-w-screen-lg mx-auto shadow-lg mt-5">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    {/* image */}
                    <div className="flex justify-center items-center py-10 flex-1">
                        <img className="w-80" src={details?.data?.img} alt="" />
                    </div>
                    {/* details */}
                    <div className="flex-1 my-4 px-5">
                        <h1 className="text-4xl font-bold">{details?.data?.title}</h1>
                        <p className="text-xl font-medium my-4">Category: {details?.data?.category}</p>
                        <p className="text-xl font-medium my-4">Company: {details?.data?.company}</p>
                        <p className="text-2xl font-medium my-4">Price: ${details?.data?.newPrice}</p>
                        <p className="text-xl font-medium my-4">Rating: {details?.data?.star_rating}</p>
                        <div onClick={() => mutate({title:details?.data?.title,
                            category:details?.data?.category,
                            company:details?.data?.company,
                            price:details?.data?.newPrice
                        })} 
                            className="bg-blue-400 px-2 py-3 w-40 border border-red-300 rounded-md flex justify-center items-center gap-2">
                            <BsCart4 className="text-2xl"/>
                            <button className="" >Add MyCart</button>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Details;