import {Box,Typography,Breadcrumbs,Link} from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const MuiBreadCrumb=()=>{
  return(
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon/>}>
        <Link underline="hover" href="#">Home</Link>
        <Link underline="hover" href="#">news</Link>
        <Link underline="hover" href="#">Blog</Link>
      </Breadcrumbs>
    </Box>
  )

}
export default MuiBreadCrumb
