import {Box,Tab} from "@mui/material"
import {
  TabContext,
  TabList,
  TabPanel
} from "@mui/lab"
import {useState} from "react"
export const MuiTabs=()=>{
  const [value,setValue]=useState('1');
  const handleChange=(event:React.SyntheticEvent,newValue:string)=>{
    setValue(newValue)
  }
  return(
    <Box sx={{borderBottom:1,borderColor:"divider"}}>
        <TabContext value={value}>
          <Box sx={{borderBottom:1,borderColor:'divider'}}>
              <TabList
                aria-label="Table example"
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Tab One" value="1"/>
                <Tab label="Tab two" value="2"/>
                <Tab label="Tab Three" value="3"/>
                <Tab label="Tab Fourth" value="4"/>
                <Tab label="Tab Fifth" value="5"/>
              </TabList>
          </Box>
          <TabPanel value="1">Panel One</TabPanel>
          <TabPanel value="2">Panel Two</TabPanel>
          <TabPanel value="3">Panel Three</TabPanel>
          <TabPanel value="4">Panel Fourth</TabPanel>
          <TabPanel value="5">Panel Fifth</TabPanel>
      </TabContext>
    </Box>
  )
}
export default MuiTabs
