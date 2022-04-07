import {Stack,TextField,InputAdornment}from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from "react"

const MuiTextField=()=>{
  const [showPassword,setShowPassword]=useState<Boolean>(false)
  const [username,setUsername]=useState<string>("")
  const handleShow=()=>setShowPassword(prevState=>!prevState)
  const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(e.target.value)
  }
  return(
    <Stack spacing={4}>
      <Stack
       direction="row"
       spacing={2}
       >
       <TextField label="skill"
          size="small"
          variant="outlined"
        />
        <TextField label="Name"
           size="small"
           variant="filled"
           value={username}
           onChange={handleNameChange}
         />
         
       </Stack>
       <Stack direction="row" spacing={2}>
          <TextField label="Small secondary" size="small" color="secondary" />
          <TextField label="Small primary" size="small" color="primary" />
       </Stack>
       <Stack direction="row" spacing={2}>
          <TextField label="Price" size="small" color="secondary"
            InputProps={{
              startAdornment:<InputAdornment
                                  position="start">
                                    $
                                  </InputAdornment>
            }}
          />
          <TextField
            label="Small primary"
            size="small"
            type={`${showPassword ?"text":"password"}`}
            color="primary"
            InputProps={{
              endAdornment:<InputAdornment position="end">
                  {showPassword ?<VisibilityOffIcon style={{cursor:"pointer"}} onClick={handleShow}/>:<VisibilityIcon onClick={handleShow} style={{cursor:"pointer"}}/>}
                  </InputAdornment>


            }}
         />
       </Stack>
    </Stack>
  )
}
export default MuiTextField
