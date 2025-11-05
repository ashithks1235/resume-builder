import { Box, Button, Divider, Stack } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';

function Preview({resumeDetails}) {
  return (
    <>
    <Box component="section" >
        <Paper elevation={3} className='m-5 text-center p-5'>
            <h2>{resumeDetails?.fullName}</h2>
            <h5>{resumeDetails?.jobTitle}</h5>
            <p><span>{resumeDetails?.location}</span> | <span>{resumeDetails?.email}</span> | <span>{resumeDetails?.phone}</span></p>
            <p>
                <a href={resumeDetails?.github} target='_blank' className='mx-1'>r{resumeDetails?.github}</a> |
                <a href={resumeDetails?.linkedin} target='_blank' className='mx-1'>{resumeDetails?.linkedin}</a> |
                <a href={resumeDetails?.portfolio} target='_blank' className='mx-1'>{resumeDetails?.portfolio}</a>
            </p>
            <Divider sx={{fontSize:'25px'}}>Summary</Divider>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus incidunt sunt explicabo ipsam dolor magni maxime molestiae odio id? Totam porro sequi aliquam saepe nesciunt voluptas eaque, quis doloremque?
            Iste illo aliquam, tenetur enim at nemo perspiciatis corporis nisi maiores modi molestias quia velit facilis sapiente sunt ea doloribus reiciendis nihil asperiores voluptas beatae adipisci voluptatem temporibus possimus. Omnis.
            Iure quibusdam quisquam minima! Explicabo fugiat magnam esse possimus cumque velit, placeat sunt eveniet facere iusto cupiditate, hic repellat cum suscipit. Est a totam similique deleniti earum, iste officiis facere?</p>
            <Divider sx={{fontSize:'25px'}}>Education</Divider>
            <h5>{resumeDetails?.course}</h5>
            <p><span>{resumeDetails?.college}</span> | <span>{resumeDetails?.university}</span> | <span>{resumeDetails?.passoutYear}</span></p>
            <Divider sx={{fontSize:'25px'}}>Work Experience</Divider>
            <h5>{resumeDetails?.jobType}</h5>
            <p><span>{resumeDetails?.company}</span> | <span>{resumeDetails?.cLocation}</span> | <span>{resumeDetails?.duration}</span></p>
            <Divider sx={{fontSize:'25px'}}>Skills</Divider>
            <Stack direction={'row'} justifyContent={'space-evenly'} sx={{flexWrap:'wrap',gap:'10px',my:2}}>
                {resumeDetails.skill?.map(item=>(
                  <Button key={item} variant='contained'>{item}</Button> 
                ))}
            </Stack>
        </Paper>
    </Box>
    </>
  )
}

export default Preview