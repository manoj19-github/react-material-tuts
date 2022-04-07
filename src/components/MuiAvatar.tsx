import React from 'react'
import {Avatar,Box,Stack,AvatarGroup} from "@mui/material"


const MuiAvatar = () => {
    return (
      <Box>
        <Stack sx={{spacing:4}} sx={{padding:4}} direction="row">
          <Avatar sx={{bgcolor:"primary.light"}}>MS</Avatar>
          <Avatar sx={{bgcolor:"success.light"}}>PA</Avatar>
          <Avatar src="https://picsum.photos/200/300" alt="myphoto" sx={{width:48,height:48 }}/>
        </Stack>
        <Stack direction="row">
          <AvatarGroup>
              <Avatar sx={{bgcolor:"primary.light"}}>MS</Avatar>
              <Avatar sx={{bgcolor:"success.light"}}>PA</Avatar>
              <Avatar src="https://picsum.photos/200/300" alt="myphoto" sx={{width:48,height:48 }}/>
          </AvatarGroup>
        </Stack>
      </Box>
    )
}

export default MuiAvatar
