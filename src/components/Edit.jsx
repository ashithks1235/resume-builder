import React, { useRef, useState } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { editResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeDetails,setResumeDetails}) {
    const skillRef = useRef()
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = (skills)=>{
    if(resumeDetails.skill?.map(data=>data.toLowerCase())?.includes(skills.toLowerCase)){
      alert("given skill already available. please add another")
    }else{
      setResumeDetails({...resumeDetails,skill:[...resumeDetails.skill,skills]})
    }
    skillRef.current.value = ""
  }

  const removeSkill = (skills)=>{
    setResumeDetails({...resumeDetails,skill:resumeDetails.skill?.filter(item=>item!=skills)})
  }

  const handleResumeUpdate = async ()=>{
    const {id,fullName,jobTitle,location} = resumeDetails
    if(!fullName || !jobTitle || !location){
      alert("please fill the form")
    }else{
      console.log("api call");
      const result = await editResumeAPI(id,resumeDetails)
      console.log(result);
      if(result.status==200){
        alert("resume updation successfull")
        handleClose()
      }
    }
  }

  return (
    <div>
        <button onClick={handleOpen} className='btn text-warning fs-2 me-2'><MdEditDocument /></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
                            <h3>Personal Details</h3>
                            <div className='p-3 row'>
                            <TextField value={resumeDetails.fullName} onChange={e=>setResumeDetails({...resumeDetails,fullName:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                            <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                            </div>
            </div>
            <div>
                            <h3>Contact Details</h3>
                            <div className='p-3 row'>
                                <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
                                <TextField value={resumeDetails.phone} onChange={e=>setResumeDetails({...resumeDetails,phone:e.target.value})} id="standard-basic-phone" label="Phone Number" variant="standard" />
                                <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-git" label="Github Profile Link" variant="standard" />
                                <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                                <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                            </div>
            </div>
            <div>
                            <h3>Educational Details</h3>
                            <div className='p-3 row'>
                                <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                                <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                                <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                                <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                            </div>
            </div>
            <div>
                            <h3>Professional Details</h3>
                            <div className='p-3 row'>
                                <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-intership" label="Job or Internship" variant="standard" />
                                <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
                                <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})} id="standard-basic-companylocation" label="Company Location" variant="standard" />
                                <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                            </div>
            </div>
            <div>
                <h3>Skills</h3>
                <div className="d-flex justify-content-between align-items-center p-3">
                    <input ref={skillRef} type="text" placeholder='Add Skills' className='form-control' />
                    <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                </div>
                <h5>Added Skills : </h5>
                <div className='d-flex flex-wrap justify-content-between p-3'>
                    {
                      resumeDetails.skill?.map(item=>(
                        <Button key={item} onClick={()=>removeSkill(item)} variant="contained" className='my-1'>{item}<MdDeleteForever className='ms-2'/></Button>
                      ))
                    }
                </div>
            </div>
            <div>
                            <h3>Summary</h3>
                            <div className='p-3 row'>
                            <TextField value={resumeDetails?.summary} onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Write a short of yourself" multiline rows={5} variant="standard"/>
                            </div>
            </div>
            <button onClick={handleResumeUpdate} className='btn btn-primary'>UPDATE</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit