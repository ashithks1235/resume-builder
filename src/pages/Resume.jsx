import React from 'react'
import { FaFile } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Resume() {
  return (
    <div className='my-5 text-center'>
      <h1>Create a job winning resume in minutes</h1>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-4 rounded p-5 shadow text-center'>
            <FaFile className='fs-1 text-primary mb-3'/>
            <h4>Add Your Information</h4>
            <p>Add pre-written examples to each section</p>
            <p>Step 1</p>
          </div>
          <div className='col-md-2'></div>
          <div className='col-md-4 rounded p-5 shadow text-center'>
            <FaDownload className='fs-1 text-dark mb-3'/>
            <h4>Download Your Resume</h4>
            <p>Download and start applying</p>
            <p>Step 2</p>
          </div>
        </div>
      </div>
      <div>
        <Link to='/form' className='btn text-light' style={{backgroundColor:'purple'}}>LET'S  START</Link>
      </div>
    </div>
  )
}

export default Resume