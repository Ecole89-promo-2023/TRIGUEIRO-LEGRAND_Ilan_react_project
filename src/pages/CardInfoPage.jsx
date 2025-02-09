import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Endpoints } from "../_services/endpoints.services";
import { Spinner } from 'react-bootstrap';
import CardInfo from "../components/CardInfo";

const CardInfoPage = () => {
    const { id } = useParams();
    const [card, setCard] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [langue, setLangue] = useState(localStorage.getItem('langue') || 'fr');

    useEffect(() => {
        Endpoints.getCard(langue, id)
        .then((response) => {
            console.log(response.data);
            setCard(response.data);
            setLoaded(true);
        })
        .catch((error) => {
            console.error(error);
            setError(error);
        });
    }, [id, langue]);

    if (!loaded) {
        return (
            <Spinner className="text-center" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    } else if (error) {
        return <div>Error: {error.message}</div>
    } else {
        return (
            <>
            <CardInfo pokemon={card}/>
            </>
        )
    }
}

export default CardInfoPage;