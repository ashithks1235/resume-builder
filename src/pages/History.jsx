import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <>
      <h1 className='text-center my-5'>Downloaded resume history</h1>
      <Link to={'/resume'} className='float-end' style={{marginTop:'-80px'}}>Back</Link>
      <Stack direction={'row'} justifyContent={'space-evenly'} sx={{flexWrap:'wrap',gap:'10px',my:2}}>
        <div className='shadow p-5 text-center rounded'>
          <div className='d-flex mb-2 align-items-center'>
            <h5>Review At : date & time</h5>
            <button className='btn text-danger fs-4'><MdDelete /></button>
          </div>
        <img width={'250px'} height={'250px'} className='border' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQN2Ygs8sQ4uxL9yqZvjShWkj_tJOxFWhq5g&s' alt='resume'></img>
        </div>
      </Stack>
    </>
  )
}

export default History