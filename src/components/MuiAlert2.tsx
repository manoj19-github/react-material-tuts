import React from 'react'
import {
  Alert,
  AlertTitle,
  Stack,
} from "@mui/material"

const MuiAlert2 = () => {
    return (
        <Stack direction="row" sx={{width:"100%"}}>
          <Alert variant="filled" severity="success" sx={{width:"60%"}} onClose={()=>alert("hi alert close")}>
            <AlertTitle>Success</AlertTitle>
            this is manoj Santra
          </Alert>
        </Stack>
    )
}

export default MuiAlert2
