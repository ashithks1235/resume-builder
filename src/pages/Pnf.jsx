import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center flex-column py-5'>
      <h4>404!</h4>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/008/255/803/small/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg' alt='404'></img>
      <h3>Page not found</h3>
      <p>sorry we couldn't find the page you're looking for.</p>
      <Link to={'/'}>Back to Home</Link>
    </div>
    </>
  )
}

export default Pnf