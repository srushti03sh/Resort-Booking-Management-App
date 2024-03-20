import React from 'react'
import "./Dashboard.css"
import Card from 'react-bootstrap/Card';
import Header from '../Header/Header'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

function Dashboard() {
  return (
    <>
      <Header
        header="Dashboard"
      />
      <div className='dashboard-event-body'>
        <h4>Upcoming Events : </h4>
        <Link to="/UserPanel/CurrentBookings">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Event Name</Card.Title>
              <Card.Text>
                Status : <Badge bg="success">Pending</Badge>
                <Link className='dashboard-event-btn' to="#">Details <FaArrowRight /></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
      <div className='dashboard-booking-body'>
        <h4>Upcoming Resort Bookings : </h4>
        <Link to="/UserPanel/CurrentBookings">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Event Name</Card.Title>
              <Card.Text>
                Status : <Badge bg="success">Pending</Badge>
                <Link className='dashboard-event-btn' to="#">Details <FaArrowRight /></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  )
}

export default Dashboard
