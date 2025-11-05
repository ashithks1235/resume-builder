import React from 'react'
import Preview from '../components/Preview'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function ViewResume() {
  return (
    <div className='container'>
        <div className="row my-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="d-flex justify-content-center align-items-center">
                    <button className='btn text-danger fs-2 me-2'><FaCloudDownloadAlt /></button>
                    <button className='btn text-warning fs-2 me-2'><MdEditDocument /></button>
                    <button className='btn text-sucess fs-2 me-2'><TbReload /></button>
                    <Link to={'/resume'} className="btn text-primary fs-2 me-2"><IoMdArrowRoundBack /></Link>
                </div>
                <Preview/>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
  )
}

export default ViewResume