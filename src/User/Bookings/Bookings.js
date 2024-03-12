import React from 'react'
import Header from '../Header/Header'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import "./Bookings.css"

function Bookings() {
    return (
        <>
            <Header
                header="Bookings"
            />
            <div className='booking-table'>
                <Table striped bordered variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='cnt-book'>
                <Link to="/BookingPage">
                    <button className='cnt-booking'>
                        Want to do another booking?
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Bookings
