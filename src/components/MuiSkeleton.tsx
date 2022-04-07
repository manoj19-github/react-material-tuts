import {
  Skeleton,
  Stack
} from "@mui/material"

const MuiSkeleton=()=>{
  return(
    <Stack spacing={2}>
      <Skeleton variant="text" width="100%" animation="wave" />
      <Skeleton variant="circular" width={50} height={50} animation="wave" />
    </Stack>
  )

}
export default MuiSkeleton
