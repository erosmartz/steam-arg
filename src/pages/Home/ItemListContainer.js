import React from 'react'
import ProductCard from "../../components/ProductCard/ProductCard"
import Container from '@mui/material/Container';
import "./styles.css"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'null' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));


const ItemListContainer = () => {

  const [games, setGames] = React.useState([])

  React.useEffect(() => {

    fetch('https://raw.githubusercontent.com/erosmartz/steam-arg/master/public/api/juegos.json')
      .then((response) => response.json())
      .then((data) => setGames(data))

  }, [])


  return (
    <Container>
      <Grid container spacing={2}> 
        {games.map( (game, i) => {
          return (

            <Grid xs={3}>
                <Link to={`/item/${i}`}
                  state={{data: game}}
                  style={{textDecoration: "none"}}
                   >
                  <Item key={i}> 
                    <ProductCard game={game} /> 
                  </Item>
                </Link> 
            </Grid>
          )

        } )}
      </Grid>
    </Container>

  )
}

export default ItemListContainer