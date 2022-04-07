import {Box,FormControlLabel,Rating} from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState} from "react"
const MuiRating=()=>{
  const [myRating,setMyRating]=useState<number|null>(null)
  const handleMyRating=(e:React.ChangeEvent<{}>,newVal:number|null)=>{
    setMyRating(newVal)
  }
  console.log({myRating})
  return(
    <Box>
      <Rating value={myRating}
        onChange={handleMyRating}
        precision={0.5}

        icon={<FavoriteIcon color="error"/>}
        emptyIcon={<FavoriteBorderIcon color="error"/>}
      />
    </Box>
  )
}
export default MuiRating
