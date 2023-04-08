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

  /* ESTADO JUEGO */
  const [games, setGames] = React.useState([]);

  /* ESTADO CATEGORIAS */
  const [categories, setCategories] = React.useState([]);

  /* ESTADO SORT */
  const [sortingMethod, setSortingMethod] = React.useState('');

  /* ESTADO JUEGO ORDENADO */
  const [sortedGames, setSortedGames] = React.useState([]);

  const handleSortingMethodChange = (event, newSortingMethod) => {
    setSortingMethod(newSortingMethod);
    
  };

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

  /* SORTING */
  React.useEffect(() => {
 
    let sorted = [...games];
    if (sortingMethod === 'alphabetical') {
      sorted = games.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (sortingMethod === 'price') {
      sorted = games.sort((a, b) => a.precio - b.precio);
    } else if (sortingMethod === 'rating') {
      sorted = games.sort((a, b) => b.rating - a.rating);
    }
    setSortedGames(sorted);
  }, [games, sortingMethod]);

  return (
    <Container>
      <AppBar position="static" sx={{mb:3}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
          <CategoryMenu categories={categories}/>
          <FilterMenu onFilterChange={handleSortingMethodChange} />
        </Toolbar>
      </AppBar>

      <Container>
        <Grid container spacing={2}> 
          {sortedGames.map((game, i) => (
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
          ))}
        </Grid>
      </Container>
    </Container>
  )
}

export default ItemListContainer
