import {FunctionComponent,useState} from "react"

import {Box,TextField,MenuItem} from "@mui/material"
type Tcountry="India"|"Australiya"|"USA"|"France" | "Japan";
const MuiSelect:FunctionComponent=()=>{
  const [country,setCountry]=useState<string[]>(["India"])
  const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    const value=event.target.value
    setCountry(typeof value==="string"?value.split(","):value)

  }
  return(
    <Box width="250px">
      
      <TextField
        label="Select country" select
        value={country}  onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple:true
        }}
       >
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="Australiya">Australiya</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="France">France</MenuItem>
        <MenuItem value="Japan">Japan</MenuItem>
      </TextField>
    </Box>

  )
}
export default MuiSelect
