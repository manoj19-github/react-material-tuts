import React from 'react'
import {Routes,Route} from "react-router-dom"
import FirstPage from "./pages/FirstPage.tsx"
import Main from "./Main.tsx"
import {
  LocalizationProvider
} from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import {createTheme,colors,ThemeProvider} from "@mui/material"


const theme=createTheme({
  status:{
    danger:"#e53e3e",
  },
  palette:{
    secondary:{
      main:colors.orange[500]
    }
  }
})
const App = () => {
    return (
      <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Routes>
          <Route exact path="/" element={<Main/>}></Route>
          <Route exact path="/first" element={<FirstPage/>}></Route>
        </Routes>
      </LocalizationProvider>
      </ThemeProvider>
    )
}

export default App
