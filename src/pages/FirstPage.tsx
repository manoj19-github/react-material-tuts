import MuiTable from "../components/MuiTable.tsx"
import {useState} from "react"
import MuiAlert from "../components/MuiAlert.tsx"
import MuiAlert2 from "../components/MuiAlert2.tsx"
import MuiSnackbar from "../components/MuiSnackbar.tsx"
import MuiDialog from "../components/MuiDialog.tsx"
import MuiProgress from "../components/MuiProgress.tsx"
import MuiSkeleton from "../components/MuiSkeleton.tsx"
import MuiLoading from "../components/MuiLoadingBtn.tsx"
import MuiDatePicker from "../components/MuiDatePicker.tsx"
import MuiTabs from "../components/MuiTabs.tsx"
import MuiTimeLine from "../components/MuiTimeLine.tsx"
const FirstPage = () => {
  const [isOpen,setIsOpen]=useState<Boolean>(false)
    return (
      <>

      {/*<MuiTable/>*/}
      {/*}<MuiAlert/>*/}
      <MuiAlert2/>
      <MuiSnackbar/>
      <MuiDialog/>
      <MuiProgress/>
      <MuiSkeleton/>
      <MuiLoading/>
      <MuiDatePicker/>
      <MuiTabs/>
      <MuiTimeLine/>
    {/*  <IconButton size="large" edge="start" color="primary" aria-label="logo" onClick={()=>setIsOpen(true)}>
        <MenuIcon/>
      </IconButton>
      <MuiAvatar/>
      <MuiBadge/>
      <MuiList/>
      <MuiChip/>
      <MuiTable/>
      <Drawer anchor="left" onClick={()=>setIsOpen(false)} open={isOpen} >
        <Typography sx={{px:2,border:1}}>Manoj Santra</Typography>
      </Drawer>
        <BottomNavigation
          sx={{position:"absolute",bottom:0,width:"100%"}}
        >
          <BottomNavigationAction  label="Home" icon={<HomeIcon/>}/>
          <BottomNavigationAction  label="Favorite" icon={<FavoriteIcon/>}/>
          <BottomNavigationAction  label="Person" icon={<PersonIcon/>}/>
        </BottomNavigation>*/}
      </>
    )
}

export default FirstPage
