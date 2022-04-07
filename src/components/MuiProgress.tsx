import React,{useState} from 'react'
import {
  Stack,
  CircularProgress
} from "@mui/material"

const MuiProgress = () => {
    return (
        <Stack spacing={2}>
          <CircularProgress color="info"/>
        </Stack>
    )
}

export default MuiProgress
