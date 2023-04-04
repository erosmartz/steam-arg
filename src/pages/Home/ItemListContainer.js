import React from 'react'
import ProductCard from "../../components/ProductCard/ProductCard"
import Container from '@mui/material/Container';
import "./styles.css"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const ItemListContainer = () => {

  const [games, setGames] = React.useState([])

  React.useEffect(() => {

    fetch('api/juegos.json')
      .then((response) => response.json())
      .then((data) => setGames(data))

  }, [])

  return (
    <Container>
      <Grid container spacing={2}> 
        {games.map( (game) => {
          return (
            <Grid xs={4}> 
                <Item> 
                  <ProductCard game={game} /> 
                </Item>
            </Grid>
          )

        } )}
      </Grid>
    </Container>

  )
}

export default ItemListContainer