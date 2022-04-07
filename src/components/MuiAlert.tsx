import React from 'react'
import {Alert,AlertTitle} from "@mui/material"

const MuiAlert = () => {
    return (
        <div>
          <Alert severity="warning">
            This is an warning alert
          </Alert>
          <Alert variant="filled" severity="error" onClose={()=>alert("this is close")}>
            <AlertTitle>Manoj Santra</AlertTitle>
            This is an warning alert
          </Alert>
        </div>
    )
}

export default MuiAlert
