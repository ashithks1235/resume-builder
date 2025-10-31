import { Box, Button, Divider, Stack } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';

function Preview() {
  return (
    <>
    <Box component="section" >
        <Paper elevation={3} className='m-5 text-center p-5'>
            <h2>Name</h2>
            <h5>Job Title</h5>
            <p><span>location</span> | <span>email</span> | <span>phone</span></p>
            <p>
                <a href='' target='_blank' className='mx-1'>GITHUB</a> |
                <a href='' target='_blank' className='mx-1'>LINKEDIN</a> |
                <a href='' target='_blank' className='mx-1'>PORTFOLIO</a>
            </p>
            <Divider sx={{fontSize:'25px'}}>Summary</Divider>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus incidunt sunt explicabo ipsam dolor magni maxime molestiae odio id? Totam porro sequi aliquam saepe nesciunt voluptas eaque, quis doloremque?
            Iste illo aliquam, tenetur enim at nemo perspiciatis corporis nisi maiores modi molestias quia velit facilis sapiente sunt ea doloribus reiciendis nihil asperiores voluptas beatae adipisci voluptatem temporibus possimus. Omnis.
            Iure quibusdam quisquam minima! Explicabo fugiat magnam esse possimus cumque velit, placeat sunt eveniet facere iusto cupiditate, hic repellat cum suscipit. Est a totam similique deleniti earum, iste officiis facere?</p>
            <Divider sx={{fontSize:'25px'}}>Education</Divider>
            <h5>Course</h5>
            <p><span>college</span> | <span>university</span> | <span>year</span></p>
            <Divider sx={{fontSize:'25px'}}>Work Experience</Divider>
            <h5>job type</h5>
            <p><span>company</span> | <span>location</span> | <span>duration</span></p>
            <Divider sx={{fontSize:'25px'}}>Skills</Divider>
            <Stack direction={'row'} justifyContent={'space-evenly'} sx={{flexWrap:'wrap',gap:'10px',my:2}}>
                <Button variant='contained'>NODE</Button>
            </Stack>
        </Paper>
    </Box>
    </>
  )
}

export default Preview