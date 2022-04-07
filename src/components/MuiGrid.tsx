import {Grid} from "@mui/material"
const MuiGrid=()=>{
  return(
      <Grid container my={4}>
        <Grid item lg={3} sm={6} md={4} xs={12} bgcolor="primary.main">
          <h1>manoj</h1>
        </Grid>
        <Grid item lg={3} sm={6} md={4} xs={12} bgcolor="primary.light">
          <h1>manoj</h1>
        </Grid>
        <Grid item lg={3} sm={6} md={4} xs={12} bgcolor="primary.main">
          <h1>manoj</h1>
        </Grid>
        <Grid item lg={3} sm={6} md={4} xs={12} bgcolor="primary.light">
          <h1>manoj</h1>
        </Grid>

      </Grid>
  )
}
export default MuiGrid
