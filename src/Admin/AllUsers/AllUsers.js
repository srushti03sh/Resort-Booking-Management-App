import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import { Table } from 'react-bootstrap';

function AllUsers({ isChecked }) {

    const [allUsers, setAllUsers] = useState([]);

    const fetchData = async () => {
        const response = await axios.post("http://localhost/Resort-API/Admin/AdminUsers.php", {
        });
        const result = response.data.allUsers
        // console.log(response);
        setAllUsers(result)
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header
                isChecked={isChecked}
                header="Users"
            />
            <div className='Current-booking-body'>
                <div className='booking-table'>
                    {allUsers?.length > 0 ?
                        (<Table striped bordered variant="dark" responsive>
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>Email ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Mobile No.</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUsers?.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.user_id}</td>
                                            <td>{data.email_id}</td>
                                            <td>{data.fname}</td>
                                            <td>{data.lname}</td>
                                            <td>{data.city}</td>
                                            <td>{data.state}</td>
                                            <td>{data.mno}</td>
                                            <td>{data.gender}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>) :
                        <div className='no-data'>There's no such data to display!</div>
                    }
                </div>
            </div>
        </>
    )
}

export default AllUsers
