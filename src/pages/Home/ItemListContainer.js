import React from 'react'
import ProductCard from "../../components/ProductCard/ProductCard"
import Container from '@mui/material/Container';
import "./styles.css"
import Box from '@mui/material/Box';

const ItemListContainer = () => {

  const [games, setGames] = React.useState([])

  React.useEffect(() => {

    fetch('juegos.json')
      .then((response) => response.json())
      .then((data) => setGames(data))

  }, [])

  return (
    <Container> 
      {games.map( (game) => {
        return (
          <Box> <ProductCard game={game} /> </Box>
        )

      } )}
    </Container>

  )
}

export default ItemListContainer