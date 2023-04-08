import React from 'react'
import ProductCard from "../../components/ProductCard/ProductCard"
import Container from '@mui/material/Container';
import { Toolbar, AppBar } from '@mui/material';
import "./styles.css"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import CategoryMenu from "../../components/MenuButton/MenuButton";
import FilterMenu from "../../components/FilterMenu/FilterMenu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'null' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));


const ItemListContainer = () => {

  /* VARIABLES */

  /* ESTADO JUEGO */
  const [games, setGames] = React.useState([]);

  /* ESTADO CATEGORIAS */
  const [categories, setCategories] = React.useState([]);


  

  /* CONSUMIENDO API */
  React.useEffect(() => {
    fetch("https://raw.githubusercontent.com/erosmartz/steam-arg/master/public/api/juegos.json")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        const uniqueCategories = data.reduce((acc, game) => {
          if (!acc.includes(game.genero)) {
            acc.push(game.genero);
          }
          return acc;
        }, []);
        setCategories(uniqueCategories);
      });
  }, []);





  
  


  

  return (
  
  <Container>
    <AppBar position="static" sx={{mb:3}}>
    <Toolbar sx={{justifyContent:'space-between'}}>
        <CategoryMenu categories={categories}/>
        <FilterMenu        
/>
    </Toolbar>
    </AppBar>

    <Container>
      <Grid container spacing={2}> 
        {games.map( (game, i) => {
          return (

            <Grid key={i} xs={3}>
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
  </Container>
  )
}

export default ItemListContainer