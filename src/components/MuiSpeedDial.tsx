import {
  SpeedDial,SpeedDialAction,
  SpeedDialIcon
} from "@mui/material"
import CopyIcon from "@mui/icons-material/FileCopyOutlined"
import PrintIcon from "@mui/icons-material/Print"
import SharedIcon from "@mui/icons-material/Share"

const MuiSpeedDial=()=>{
  return(
    <SpeedDial ariaLabel="Navigation speed dial"
      sx={{position:"absolute",bottom:12,right:12}}
      icon={<SpeedDialIcon/>}
    >
      <SpeedDialAction icon={<CopyIcon/>} tooltipTitle="Copy"/>
      <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="print"/>
      <SpeedDialAction icon={<SharedIcon/>} tooltipTitle="share"/>
    </SpeedDial>
  )
}
export default MuiSpeedDial
