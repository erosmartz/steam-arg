import React from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'


/* COMPONENTS */
import Navbar from "./components/NavBar/NavBar"



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    
    <ThemeProvider theme={darkTheme}>
    <React.Fragment>
      
      <CssBaseline />
      
      {
        
          <Navbar /> 
          <ItemListContainer name="Doom Eternal" desc="Un FPS lanzado en 2020" img="https://thegatorseye.com/wp-content/uploads/2022/12/Doom-Eternal-900x900.png" /> 
          
        
      }
    </React.Fragment>
    </ThemeProvider>

    
    
  )
}

export default App
