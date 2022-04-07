import React,{useState} from 'react'
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from "@mui/material"
const MuiDialog = () => {
  const [open,setOpen]=useState(false)
    return (
        <>
          <Button onClick={()=>setOpen(true)}>Click</Button>
          <Dialog
            open={open}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
          >
            <DialogTitle id="dialog-title">Submit the test</DialogTitle>
            <DialogContent>
              <DialogContentText id="dialog-description">
                  are you sure you want to submit the test ? you will not be able to edit after submitting
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=>setOpen(false)}>Cancel</Button>
              <Button onClick={()=>setOpen(false)}>Submit</Button>
            </DialogActions>
          </Dialog>
        </>
    )
}

export default MuiDialog
