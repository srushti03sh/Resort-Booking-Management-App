import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import Header from '../Header/Header';

function SusUsers({ isChecked }) {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [filter, setFilter] = useState('All');

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/SusUsers/SusUsers.php", {});
    const allUsers = response.data.susUsers || []; // Ensure allUsers is an array
    setUsers(allUsers);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Logic for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filtered users based on selected filter option
  const filteredUsers = users.filter(user => {
    if (filter === 'All') {
      return true;
    } else {
      return user.Status === filter.toLowerCase();
    }
  });

  // Slice the users based on pagination
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate total pages based on filtered users
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Calculate page numbers to display in pagination
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(startPage + 2, totalPages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <>
      <Header
        isChecked={isChecked}
        header="Suspicious Users"
      />
      <div className='Current-booking-body'>
        <div className='selection'>
          <div>Filter : </div>
          <select onChange={e => setFilter(e.target.value)} value={filter}>
            <option value="All">All</option>
            <option value="blocked">Blocked</option>
            <option value="unblocked">Unblocked</option>
          </select>
        </div>
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
                  <th>Booking Source</th>
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
                    <td>{data.source_table}</td>
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
