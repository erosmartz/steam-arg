/* REACT */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/* MUI */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'


/* COMPONENTS */
import Navbar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/footer"

/* PAGES */
import ItemListContainer from "./pages/Home/ItemListContainer"
import Category from "./pages/Category/category"
import Item from "./pages/Item/item"


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
          <Router>
            <Navbar />

            <Routes> 
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/item/:id" element={<Item />} />
            </Routes>

            <Footer />

          </Router>
        }

    </React.Fragment>
    </ThemeProvider>

    
    
  )
}

export default App
