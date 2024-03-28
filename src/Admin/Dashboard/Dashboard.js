import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import Header from '../Header/Header'
import 'react-calendar/dist/Calendar.css'
import UpComingCards from '../DashboardComponent/UpcomingCards/UpComingCards';
import Testimonial from '../DashboardComponent/Testimonial/Testimonial';
import CalendarEvents from '../DashboardComponent/CalendarEvents/CalendarEvents';
import Report from '../DashboardComponent/Report/Report';
import TestimonialReport from '../DashboardComponent/TestimonialReport/TestimonialReport';

function Dashboard({ isChecked }) {

  return (
    <>
      <Header
        isChecked={isChecked}
        header="Dashboard"
      />
      <div className='admin-dashboard'>
        <UpComingCards />
        <CalendarEvents />
        <Report />
        <div className='col-md-12'>
          <div className='row'>
            <Testimonial />
            <TestimonialReport />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
