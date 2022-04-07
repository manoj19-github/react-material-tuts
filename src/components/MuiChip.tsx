import {useState} from 'react'
import {Stack,Chip,Avatar} from "@mui/material"
import FaceIcon from "@mui/icons-material/Face"
const MuiChip = () => {
  const [chips,setChips]=useState(['chip 1','chip 2','chip 3','chip 4'])
  const handleDelete=(c:string)=>{
    let newChips=chips.filter(chip=>chip!==c)
    setChips(newChips)
  }
    return (
      <>
        <Stack direction="row" spacing={1}>
          <Chip label="Chip" color="primary" size="small" icon={<FaceIcon/>}/>
          <Chip label="Chip outlined"
            color="secondary"
            size="small" variant="outlined"
            avatar={<Avatar>V</Avatar>}
            />
            <Chip
              label="Delete"
              color="error"
              onClick={()=>alert("this is clicked")}
            />
            <Chip
              label="Delete"
              color="error"
              onClick={()=>alert("this is clicked")}
              onDelete={()=>alert("this is delete")}
            />
            {
              chips.map((chip,index)=>(
                <Chip label={`${chip}`} color="secondary" onDelete={()=>handleDelete(chip)} />
              ))
            }

        </Stack>

      </>
    )
}

export default MuiChip
