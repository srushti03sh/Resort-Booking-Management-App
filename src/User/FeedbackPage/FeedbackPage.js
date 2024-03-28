import React from 'react'
import Header from '../../Admin/Header/Header'
import "./FeedbackPage.css"
import FeedbackCard from '../FeedbackCard/FeedbackCard'

function FeedbackPage({ isChecked }) {

  return (
    <>
      <Header
        isChecked={isChecked}
        header="Feedback"
      />
      <div className='feedback-body'>
        <FeedbackCard />
      </div>
    </>
  )
}

export default FeedbackPage
