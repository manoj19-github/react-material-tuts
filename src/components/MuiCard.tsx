import {
  Box,Card,
  CardContent,
  Typography,
  CardActions,Button,CardMedia
} from "@mui/material"

const MuiCard=()=>{
  return(
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="150"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            React
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            this is react material ui a awesome framework for describing the react ui

          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
    </Box>

  )

}
export default MuiCard
