import {useState} from 'react'
import {Stack,TextField} from "@mui/material"
import {
  DatePicker,
  TimePicker
} from "@mui/lab"

const MuiDatePicker = () => {
  const [selectedDate,setSelectedDate]=useState<Date|null>(null)
  const [selectedTime,setSelectedTime]=useState<Date|null>(null)
  console.log("mydate",selectedDate)
    return (
        <Stack spacing={4} sx={{width:"250px",marginTop:"10rem"}}>
          <DatePicker
            label="Date Picker"
            renderInput={(params)=><TextField {...params}/>}
            value={selectedDate}
            onChange={(newValue)=>setSelectedDate(newValue)}
          />
          <TimePicker
            label="Date Picker"
            renderInput={(params)=><TextField {...params} />} 
            value={selectedTime}
            onChange={(newValue)=>setSelectedTime(newValue)}
          />

        </Stack>
    )
}

export default MuiDatePicker
