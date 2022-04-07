import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material"
import {useState} from "react"
const MuiRadioButton=()=>{
  const [experience,setExperince]=useState<string>("")
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setExperince(e.target.value as string)
  }
  console.log({experience})
  return(
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={experience}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size="small" color="secondary"/>} label="0-2" value="0-2"/>
          <FormControlLabel control={<Radio size="small" color="secondary"/>} label="3-5" value="3-5"/>
          <FormControlLabel control={<Radio size="small" color="secondary"/>} label="4-10" value="4-10"/>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
export default MuiRadioButton
