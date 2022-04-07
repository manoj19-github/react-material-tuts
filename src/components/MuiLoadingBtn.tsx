import {Stack} from "@mui/material"
import {LoadingButton} from "@mui/lab"
import {
  SaveIcon
} from "@mui/icons-material"
import {useState} from "react"

const MuiLoadingBtn=()=>{
  const [isLoading,setIsLoading]=useState<Boolean>(false)
  return(
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loading loadingIndicator="Loading ......">
        Fetch Data
      </LoadingButton>
    </Stack>

  )

}
export default MuiLoadingBtn
