import React from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'


/* COMPONENTS */
import Navbar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"



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
          <div>

            <div>
              <Navbar />
            </div>
            
            
            <div>
              <ItemListContainer/>
            </div>
            
          
          
          
          </div>
        }

    </React.Fragment>
    </ThemeProvider>

    
    
  )
}

export default App
