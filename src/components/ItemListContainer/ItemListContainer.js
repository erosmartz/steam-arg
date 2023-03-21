import React from 'react'
import ProductCard from "../ProductCard/ProductCard"
import Container from '@mui/material/Container';
import "./ItemListContainer.css"

const ItemListContainer = () => {
  return (

    <Container>
        <div class="grid">
            
            
            
            <ProductCard 
                name="Doom Eternal" 
                desc="Un FPS lanzado en 2020" 
                img="https://thegatorseye.com/wp-content/uploads/2022/12/Doom-Eternal-900x900.png" />  

            <ProductCard 
                name="Project CARS 3" 
                desc="Un simulador de carreras lanzado en 2021" 
                img="https://www.operationsports.com/wp-content/uploads/2020/08/Project-CARS-3-Screenshot-2020.08.27-15.12.43.91.png?resize=1000%2C600" />  


        </div>
    </Container>
  )
}

export default ItemListContainer