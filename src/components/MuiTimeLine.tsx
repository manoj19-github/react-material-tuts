import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@mui/lab"

const MuiTimeLine = () => {
    return (
      <Timeline>
        <TimelineItem>
          <TimelineSeparator color="primary">
            <TimelineDot color="secondary" variant="outlined"/>
          </TimelineSeparator>
          <TimelineContent>
            City O
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator color="primary">
            <TimelineDot color="secondary" variant="outlined"/>
          </TimelineSeparator>
          <TimelineContent>
            City A
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator color="primary">
            <TimelineDot color="secondary" variant="outlined"/>
          </TimelineSeparator>
          <TimelineContent>
            City B
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator color="primary">
            <TimelineDot color="secondary" variant="outlined"/>
          </TimelineSeparator>
          <TimelineContent>
            City C
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    )
}

export default MuiTimeLine
