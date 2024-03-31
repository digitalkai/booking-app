import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../redux/housesSlicer";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const Houses = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.houses)

    useEffect(() => {
        dispatch(fetchHouses())
    }, [dispatch])

    console.log(data)

    return (
        <div>
            {data.isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <Wrapper>
                    <h3>Available Houses</h3>
                    <br></br>
                    <br></br>
                    <Splide options={{
                        perPage: 2,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",

                    }}>
                        {data.data.map((house) => (
                            <SplideSlide key={house.id}>
                                <Card>
                                    <img src={house.image} alt={house.name} />
                                    <p>{house.name}</p>
                                    <p>RM{house.price}</p>
                                    <p>{house.location}</p>
                                </Card>
                            </SplideSlide>
                        ))}
                    </Splide>
                </Wrapper>
            )}
        </div>
    );
};

const Wrapper = styled.div`
    margin: 4rem auto; 
    text-align: center; 
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center; 
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;

    img {
        border-radius: 2rem;
        width: 400px; 
        height: 400px; 
        object-fit: cover; 
    }

    p {
        margin: 0.5rem 0; 
    }
`;




export default Houses;
