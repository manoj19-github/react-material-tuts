import React from 'react'
import {Stack,Badge} from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"

const MuiBadge = () => {
    return (
        <Stack direction="row" sx={{padding:4}}>
          <Badge badgeContent="40" color="primary">
            <MailIcon/>
          </Badge>
          <Badge badgeContent="40" color="primary" variant="dot">
            <MailIcon/>
          </Badge>
        </Stack>
    )
}

export default MuiBadge
