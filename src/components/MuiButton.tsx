import {ButtonGroup,Button,Stack,IconButton,Box} from "@mui/material"
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import {styled} from "@mui/material"
const StyledBox=styled(Box)(({theme})=>({
  height:"250px",
  width:"250px",
  backgroundColor:theme.status.danger
}))
const MuiButton=()=>{
  return(
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <StyledBox>manoj</StyledBox>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" color="primary">primary</Button>
      <Button variant="contained" color="secondary">secondary</Button>
      <Button variant="contained" color="error" disableRipple>error</Button>
      <Button variant="contained" color="warning">warning</Button>
      <Button variant="contained" color="info">info</Button>
      {/*  <Stack spacing={2} direction="row">
          <Button variant="contained" endIcon={<AutoDeleteIcon/>}>
            Send
          </Button>
          <IconButton aria-label="send" color="success" size="small">
            <AutoDeleteIcon />
          </IconButton>
        </Stack>
        <Stack display="block" direction="row">
          <ButtonGroup variant="contained">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>*/}
    </Stack>


  )
}

export default MuiButton
