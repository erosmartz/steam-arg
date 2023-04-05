import * as React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

const Details =  () => {

  

  const [game, setGame] = React.useState([]);

  let { id } = useParams();

  React.useEffect(() => {

    fetch('https://raw.githubusercontent.com/erosmartz/steam-arg/master/public/api/juegos.json')
      .then((response) => response.json())
      .then((data) => setGame(data))

  }, [id])

  

  


  console.log(game)

  

 

  return (
    <Card sx={{ display: 'flex', justifyContent:'space-between', flexDirection:'row' }}>
      <CardMedia
        component="img"
        sx={{ width: 250, height:350 }}
        image={game[id].imagen}
        alt="avatar"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
          {game[id].nombre}
          </Typography>
          <Typography variant="h5" color="text.secondary" component="div">
          {`Genero: ${game[id].genero}`}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
          {`Rating: ⭐${game[id].rating}`}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button 
          variant='outlined' 
          size="large"
          color='success'>
            {`Precio: $${game[id].precio}`}
          </Button>
        </Box>
      </Box>
      
    </Card>
  );
}

export default Details;