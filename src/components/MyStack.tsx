import {Stack,Box} from "@mui/material"
const MyStack=()=>{
  return(
    <Stack m={"10px"} direction="row">
      <Box
        sx={{
          backgroundColor:"primary.main",
          color:"white",
          height:"200px",
          width:"200px",
          padding:"1rem",
          cursor:"pointer",
          "&:hover":{
            backgroundColor:"primary.light"
          }

        }}
      >
        my name is manoj santra
      </Box>
      <Box display="flex" bgcolor="success.light" height="200px" width="200px">
        my name is santramanoj@gmail.com
      </Box>
    </Stack>

  )
}

export default MyStack
