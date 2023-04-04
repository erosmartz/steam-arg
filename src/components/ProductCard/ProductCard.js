import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({game}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={game.imagen}
        title="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {game.genero}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{game.rating}</Button>
        <Button size="small">{game.precio}</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;