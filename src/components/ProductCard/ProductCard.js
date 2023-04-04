import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({game}) => {
  return (
    <Card sx={{ maxWidth: 375}}>
      <CardMedia
        component="img"
        alt="https://www.iforium.com/wp-content/uploads/Placeholder-Image-400.png"
        /* sx={{ height: 400 }} */
        height="350"
        image={game.imagen}
        title={game.nombre}
      />
      <CardContent sx={{ pb: 0}}>
        <Typography noWrap variant="h5" component="div">
          {game.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {game.genero}
        </Typography>
        
      </CardContent>
      <CardActions sx={{ justifyContent:'space-between', pt: 0}}>
      <Button 
        size="large"
        color='primary' 
        onClick={() => {window.open(game.review)}}>
          ⭐{game.rating}
      </Button>  
      <Button 
        variant='outlined' 
        size="large"
        color='success'>
          ${game.precio}
      </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;