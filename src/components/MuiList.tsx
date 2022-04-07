import React from 'react'
import {List,ListItem,Box,ListItemText,ListItemIcon,ListItemAvatar,Avatar} from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"
const MuiList = () => {
    return (
      <Box>
        <List>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon/>
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="this is manoj santra"/>
          </ListItem>
        </List>
      </Box>
    )
}

export default MuiList
