import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import { viewResumeAPI,addHistoryAPI } from '../services/allAPI';
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function ViewResume() {
const {id} = useParams()
const [resumeDetails,setResumeDetails] = useState({})
console.log(resumeDetails);

useEffect(()=>{
  getResumeDetails()
},[])

const handleDownlaodResume = async ()=>{
  const doc = new jsPDF();
  const input = document.getElementById("preview")
  const canvas = await html2canvas(input,{scale:2})
  const imgURL = canvas.toDataURL('image/png')
  const imgWidth = doc.internal.pageSize.getWidth()
  const imgHeight = doc.internal.pageSize.getHeight()
  doc.addImage(imgURL,'PNG',0,0,imgWidth,imgHeight)
  doc.save(`${resumeDetails?.fullName}.pdf`)

  const localDateTime = new Date()
  const timeStamp = `${localDateTime.toLocaleDateString()},${localDateTime.toLocaleTimeString()}`
  try{
    await addHistoryAPI({timeStamp,imgURL})
  }catch(err){
    console.log(err);
  }
}

const getResumeDetails = async ()=>{
  const result = await viewResumeAPI(id)
  if(result.status==200){
    setResumeDetails(result.data)
  }
}
  return (
    <div className='container'>
        <div className="row my-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={handleDownlaodResume} className='btn text-danger fs-2 me-2'><FaCloudDownloadAlt /></button>
                    <Edit resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
                    <Link to={'/history'} className='btn text-sucess fs-2 me-2'><TbReload /></Link>
                    <Link to={'/resume'} className="btn text-primary fs-2 me-2"><IoMdArrowRoundBack /></Link>
                </div>
                <div id="preview">
                <Preview resumeDetails={resumeDetails}/>
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
  )
}

export default ViewResume