import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, {
  timelineOppositeContentClasses
} from '@mui/lab/TimelineOppositeContent'

export default function OppositeContentTimeline() {
  return (
    <Timeline
      sx={{
        mt: '20px',
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.7
        }
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="gray">
        Since Jan 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 💡 Software developer at Solvd inc.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="gray">
        Jun 2022 - Dec 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> 💡 React Javascript Intern at Solvd inc.</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="gray">
        Aug 2021 - Jan 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent> 💡 Accountant at Centro de Estudios Filosoficos y Teologicos</TimelineContent>
      </TimelineItem>

    </Timeline>
  )
}
