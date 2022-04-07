import React from 'react'
import {
  Snackbar,Button,
  Alert,AlertProps,

} from "@mui/material"
import {useState,forwardRef} from "react"

const MySnackBar=forwardRef<HTMLDivElement,AlertProps>((props,ref)=>{

  return <Alert elevation={6} ref={ref} {...props} sx={{background:"#d1411e",color:"#fff"}}/>
})
const MuiSnackbar  = () => {

      const [open,setOpen]=useState(false)
      const handleClose=(
        event?:React.SyntheticEvent|Event,
        reason?:string

      )=>{
        if(reason ==="clickaway") return
        setOpen(false)
      }
    return (
      <>
        <Button variant="outlined" onClick={()=>setOpen(true)}>Click</Button>
        {/*<Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          message="hello manoj how are you"
          onClose={handleClose}
          />*/}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <MySnackBar onClose={handleClose} autoHideDuration={5000}>
            hello this is manoj santra
          </MySnackBar>
        </Snackbar>


      </>
    )
}

export default MuiSnackbar
