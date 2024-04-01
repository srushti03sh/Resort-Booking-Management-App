import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import Header from '../Header/Header';

function SusUsers({ isChecked }) {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/SusUsers/SusUsers.php", {});
    const allUsers = response.data.susUsers || []; // Ensure allUsers is an array
    setUsers(allUsers);
    // console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Logic for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Slice the users based on pagination if users is an array and has length
  const currentUsers = Array.isArray(users) && users.length > 0
    ? users.slice(indexOfFirstUser, indexOfLastUser)
    : [];

  // Calculate total pages based on filtered users
  const totalPages = Math.ceil(Array.isArray(users) ? users.length / usersPerPage : 0);

  // Calculate page numbers to display in pagination
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(startPage + 2, totalPages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  // console.log(users);
  return (
    <>
      <Header
        isChecked={isChecked}
        header="Suspicious Users"
      />
      <div className='Current-booking-body'>
        <div className='booking-table'>
          {currentUsers.length > 0 ? (
            <Table striped bordered variant="dark" responsive>
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
                {currentUsers.map((data, index) => (
                  <tr key={index} className={data.Status === 'blocked' ? "ebg" : ""}>
                    <td>{data.user_id}</td>
                    <td>{data.email_id}</td>
                    <td>{data.fname}</td>
                    <td>{data.lname}</td>
                    <td>{data.city}</td>
                    <td>{data.state}</td>
                    <td>{data.mno}</td>
                    <td>{data.gender}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className='no-data'>There's no such data to display!</div>
          )}
          {totalPages > 1 && (
            <Pagination>
              {currentPage !== 1 && (
                <Pagination.Prev onClick={() => paginate(Math.max(1, currentPage - 1))} />
              )}
              {pageNumbers.map(number => (
                <Pagination.Item key={number} onClick={() => paginate(number)} active={number === currentPage}>
                  {number}
                </Pagination.Item>
              ))}
              {currentPage !== totalPages && (
                <Pagination.Next onClick={() => paginate(Math.min(currentPage + 1, totalPages))} />
              )}
            </Pagination>
          )}
        </div>
      </div>
    </>
  );
}

export default SusUsers;
