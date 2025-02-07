import { Card, CardBody, Container, Image, Button } from "react-bootstrap";

const HomePage = () => {
    return (
    <>
    <Container>
    <Card Fluid className="m-auto position-absolute top-50 start-50 translate-middle">
    <Image className="mx-auto d-block w-25" src="https://tcgpocket.pokemon.com/_images/announcement/logos/tcgpocketlogo_fr-2x.webp "></Image>
        <CardBody className="text-center">
            Bienvenue sur PokéCard Explorer ! Ce site vous permet de découvrir, rechercher et consulter des cartes Pokémon grâce à une API dédiée. Que vous soyez un collectionneur passionné ou un joueur stratégique, explorez les détails des cartes, leurs attaques, faiblesses et raretés en toute simplicité.
        </CardBody>
        <Button href="/cards">Voir la collection</Button>
    </Card>
    </Container>
    </>
    )
}

export default HomePage