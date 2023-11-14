import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WebIcon from '@mui/icons-material/Web';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: ['"Roboto Mono"', 'monospace'].join(','),
      h6 : {
        fontWeight: "bold",
      }
    }
});

export default function CustomizedTimeline() {
  return (
    <ThemeProvider theme={theme}>
    <Timeline position="alternate">
      <TimelineItem className='timelineitem'>
        <TimelineOppositeContent
          className='timelinefont'
          sx={{ m: 'auto 0' }}
          variant="body2"
        >
          2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{color: "#9c27b0", margin: 0, backgroundColor: "transparent", borderColor: "#9c27b0"}}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelinecontentbox' sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Udemy / Full Stack Development
          </Typography>
          <Typography>ReactJs, Node.JS, Express.JS, MongoDB, EJS, OAuth</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='timelineitem'>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
          AUG'2023 - OCT'2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{color: "#9c27b0", margin: 0, backgroundColor: "transparent", borderColor: "#9c27b0"}}>
            <WebIcon />
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent className='timelinecontentbox' sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Excellence Technologies / Frontend Training
          </Typography>
          <Typography>HTML, CSS, JavaScript, Bootstrap</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='timelineitem'>
        <TimelineOppositeContent
          className='timelinefont'
          sx={{ m: 'auto 0' }}
          variant="body2"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{color: "#9c27b0", margin: 0, backgroundColor: "transparent", borderColor: "#9c27b0"}}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelinecontentbox' sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Internshala / Programming with C and C++
          </Typography>
          <Typography>C++, Object Oriented Programming</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='timelineitem'>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
          AUG'2020 - PRESENT
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot sx={{color: "#9c27b0", margin: 0, backgroundColor: "transparent", borderColor: "#9c27b0"}}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelinecontentbox' sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Ch. Devi Lal University / B.tech
          </Typography>
          <Typography>NAAC accredited Government University</Typography>
          <Typography>Computer Science Engineering, CGPA: 8.56</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </ThemeProvider>
  );
}

