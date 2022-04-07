import {Typography } from "@mui/material"
import MuiButton from "./components/MuiButton.tsx"
import MuiToggleButton from "./components/MuiToggleButton.tsx"
import MuiTextField from "./components/MuiTextField.tsx"
import MuiSelect from "./components/MuiSelect.tsx"
import MuiRadioLabel from "./components/MuiRadioLabel.tsx"
import MuiCheckBox from "./components/MuiCheckBox.tsx"
import MuiRating from "./components/MuiRating.tsx"
import MuiAutoComplete from "./components/MuiAutoComplete.tsx"
import MyStack from "./components/MyStack.tsx"
import MuiGrid from "./components/MuiGrid.tsx"
import MuiCard from "./components/MuiCard.tsx"
import MuiAccordian from "./components/MuiAccordian.tsx"
import MuiNavbar from "./components/MuiNavbar.tsx"
import MuiBreadCrumb from "./components/MuiBreadcumb.tsx"
import MuiDrawer from "./components/MuiDrawer.tsx"
import MuiSpeedDial from "./components/MuiSpeedDial.tsx"
function Main() {
  return (
    <div style={{"marginBottom":"5rem"}}>
      <MuiNavbar/>
      <MuiBreadCrumb/>
      <MuiDrawer/>
      <Typography variant="h1">manoj santra</Typography>
      <Typography variant="h2">manoj santra</Typography>
      <Typography variant="h3">manoj santra</Typography>
      <Typography variant="h4">manoj santra</Typography>
      <Typography variant="h5">manoj santra</Typography>
      <Typography variant="h6">manoj santra</Typography>
      <Typography variant="subtitle1">manoj santra</Typography>
      <Typography variant="subtitle2">manoj santra</Typography>
      <MuiButton/>
      <MuiToggleButton/>
      <MuiTextField/>
      <MuiSelect/>
      <MuiRadioLabel/>
      <MuiRating/>
      <MuiCheckBox/>
      <MuiAutoComplete/>
      <MyStack/>
      <MuiGrid/>
      <MuiCard/>
      <MuiAccordian/>
      <MuiSpeedDial/>

    </div>
  )
}

export default Main;
