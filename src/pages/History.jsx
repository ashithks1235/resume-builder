import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { removeHistoryAPI, viewHistoryAPI } from '../services/allAPI';

function History() {

const [allHistory,setAllHistory] = useState([])

useEffect(()=>{
  getAllHistory()
},[])

const getAllHistory = async ()=>{
  try{
    const result = await viewHistoryAPI()
    if(result.status==200){
      setAllHistory(result.data)
    }
  }catch(err){
    console.log(err);
  }
}

const handleDeleteHistory = async (id)=>{
  try{
    await removeHistoryAPI(id)
    getAllHistory()
  }catch(err){
    console.log(err);
  }
}

  return (
    <>
      <h1 className='text-center my-5'>Downloaded resume history</h1>
      <Link to={'/resume'} className='float-end' style={{marginTop:'-80px'}}>Back</Link>
      <Stack direction={'row'} justifyContent={'space-evenly'} sx={{flexWrap:'wrap',gap:'10px',my:2}}>
        {
          allHistory?.length > 0 ? (
            allHistory.map((item,id) => (
              <div key={id} className='shadow p-5 text-center rounded'>
              <div className='d-flex mb-2 align-items-center'>
                <h5>Review At : {item.timeStamp}</h5>
                <button onClick={()=>handleDeleteHistory(item?.id)} className='btn text-danger fs-4'><MdDelete /></button>
              </div>
        <img width={'250px'} height={'250px'} className='border' src={item.imgURL} alt='resume'></img>
        </div>
            ))
          ) : (
            <h5 className='text-center text-secondary mt-5'>No history found</h5>
          )
        }
      </Stack>
    </>
  )
}

export default History