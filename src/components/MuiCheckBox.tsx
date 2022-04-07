
import {
  FormControlLabel,Box,Checkbox,
  FormControl,FormGroup,Switch
} from "@mui/material"

import {useState} from "react"
const MuiCheckBox=()=>{
  const [acceptTnc,setAcceptTnc]=useState<Boolean>(false)
  const [isDark,setIsDark]=useState<Boolean>(false)
  const [skills,setSkills]=useState<string[]>([]);
  console.log({acceptTnc})
  const handleChange=()=>{
    setAcceptTnc(prevState=>!prevState)
  }
  const handleSkillsChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const isValExists=skills.indexOf(e.target.value)
    if(isValExists===-1){
      const newArray=[...skills,e.target.value]
      setSkills(newArray)
    }else{
      const newArray=skills.filter(skill=>skill!==e.target.value)
      setSkills(newArray)

    }
  }
  console.log({skills})
  console.log({isDark})
  const handleDark=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setIsDark(e.target.checked)
  }
  return(
    <Box>
      <Box>
      <FormGroup>
        <FormControlLabel
          label="HTML"
          control={<Checkbox value="html" checked={skills.includes("html")} onChange={handleSkillsChange}/>}
        />
        <FormControlLabel
          label="CSS"
          control={<Checkbox value="css" checked={skills.includes("css")} onChange={handleSkillsChange}/>}
        />
        <FormControlLabel
          label="JAVASCRIPT"
          control={<Checkbox value="javascript" checked={skills.includes("javascript")} onChange={handleSkillsChange}/>}
        />
      </FormGroup>
      <FormControlLabel
        label="I accept terms & conditions"
        control={<Checkbox checked={acceptTnc} onChange={handleChange}/>}
      />
      <FormControlLabel label="Dark Mode" control={<Switch checked={isDark} onChange={handleDark}/>}/>
      </Box>
      <Box spacing={4}>

      </Box>
    </Box>
  )
}
export default MuiCheckBox
