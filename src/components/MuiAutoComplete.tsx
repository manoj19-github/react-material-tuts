import {useState} from "react"
import {Stack,Autocomplete,TextField} from "@mui/material"

const MuiAutoComplete=()=>{
  const [skills,setSkills]=useState<string|null>("HTML")
  const suggestion=["HTML","CSS","JAVASCRIPT","TYPESCRIPT","REACT","NODEJS","MONGOOSE","NEXTJS"]
  console.log({skills})
  return(
    <Stack width="250px" spacing={2}>
      <Autocomplete
        options={suggestion}
        renderInput={(params)=><TextField {...params} label="skills"/>}
        value={skills}
        onChange={(event:any,newValue:string|null)=>setSkills(newValue)}
      />

    </Stack>
  )
}
export default MuiAutoComplete
