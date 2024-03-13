import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container/Container";
import useAxios from "../../../hooks/useAxios";


const Details = () => {
    const axios = useAxios()
    const {data} = useQuery({
        queryKey:['details'],
        queryFn: async() => {
          return await axios.get('/shoes')
        }
    })

    console.log(data);
    return (
        <Container>
            <h1>Details coming soon...</h1>
        </Container>
    );
};

export default Details;