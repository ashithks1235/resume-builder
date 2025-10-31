import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* landing page*/}
      <div style={{height:'100vh', backgroundImage:'url("https://gogather.com/hubfs/corporate-meeting-benefits.png")', backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'}} className='d-flex justify-content-center align-items-center'>
      <div className='row container-fluid'>
        <div className='col-md-4'></div>
        <div className='col-md-4 rounded shadow p-s text-center' style={{backgroundColor:'light'}}>
          <h3>Desinged to get hired. yur skills, your stroy, your next job - all in one.</h3>
          <Link to={'/resume'} className='btn text-light' style={{backgroundColor:'purple'}}>Make Your Resume</Link>
        </div>
        <div className='col-md-4'></div>
      </div>
      </div>
      {/* Tools*/}
      <div className='container'>
        <h1 className='text-center my-5'>Tools</h1>
        <div className='row align-items-center'>
          <div className='col-md-5 m-5'>
            <h5>Resume</h5>
            <p>Create unlimited new resumes and easily edith them afetrwards</p>
            <h5>Cover Letter</h5>
            <p>Easily write proffessional cover letters.</p>
            <h5>Jobs</h5>
            <p>Automatically recives new and relevent job postings</p>
            <h5>Applications</h5>
            <p>Effortlessely manage and track your job applications in an organized manner</p>
          </div>
          <div className='col-md-6'>
            <img className='w-75' src="https://website.cdn.novoresume.com/static/resume-templates/creative-resume-template.png?auto=format&fit=max&w=1920&q=80" alt="resume"></img>
          </div>
        </div>
      </div>
      {/* pics*/}
      <div style={{height:'100vh', backgroundImage:'url("https://gogather.com/hubfs/corporate-meeting-benefits.png")', backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed'}}>
      </div>
      {/* testimonials*/}
      <div className='container'>
        <h1 className='text-center my-5'>Testimony</h1>
        <div className='row align-items-center'>
          <div className='col-md-5 m-5'>
            <h5 className='mb-5'>Trusted By Proffessionals worldwide</h5>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
              <div className='col-md-3'>
              <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s" alt="resume"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home