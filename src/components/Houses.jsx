import { useEffect, useState } from "react";

function Houses() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        getHouses();
    }, []);

    const getHouses = async () => {
        try {
            const api = await fetch(`https://4bb4d2ad-5531-49d5-a6be-ff7b18372377-00-3d45m9j3jca4p.picard.replit.dev/listing`);
            const data = await api.json();
            const houseData = data.houses || []; // Ensure data.houses is set, otherwise set houses as an empty array
            setHouses(houseData);
            console.log(data);
        } catch (error) {
            console.error("Error fetching houses:", error);
        }
    };

    return (
        <div>
            {houses.map((house) => (
                <div key={house.id}>
                    <p>{house.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Houses;
