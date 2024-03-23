import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import Header from '../Header/Header'
import 'react-calendar/dist/Calendar.css'
import UpComingCards from '../DashboardComponent/UpcomingCards/UpComingCards';
import Testimonial from '../DashboardComponent/Testimonial/Testimonial';
import CalendarEvents from '../DashboardComponent/CalendarEvents/CalendarEvents';
import Report from '../DashboardComponent/Report/Report';

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
        <Testimonial />
      </div>
    </>
  )
}

export default Dashboard
