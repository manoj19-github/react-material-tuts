import {ButtonGroup,Button,Stack,IconButton,
  ToggleButtonGroup,ToggleButton
} from "@mui/material"
import {useState} from "react"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiToggleButton=()=>{
  const [formats,setFormats]=useState<string[]>([])
  console.log(formats)
  const handleFormatChange=(event:React.MouseEvent,updatedFormat:string[])=>{
    setFormats(updatedFormat)


  }
  return(
    <div>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats} onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon/>
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon/>
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlinedIcon/>
          </ToggleButton>

        </ToggleButtonGroup>
      </Stack>
    </div>
  )
}
export default MuiToggleButton
