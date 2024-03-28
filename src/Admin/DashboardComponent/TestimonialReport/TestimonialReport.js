import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import "./TestimonialReport.css"

function TestimonialReport() {
  return (
    <>
      <div className='tReport col-md-6'>
        <div className='tReport-card'>
          <ProgressBar now={20} />
        </div>
      </div>
    </>
  )
}

export default TestimonialReport
