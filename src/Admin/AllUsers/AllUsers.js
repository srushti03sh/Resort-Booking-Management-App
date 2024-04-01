import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Table, Pagination } from 'react-bootstrap';
import { FaUserAltSlash } from 'react-icons/fa';
import { FaUserLock } from 'react-icons/fa';
import Toast from '../../Common/Toast/Toast';
import CnfModal from '../../Common/Modal/Modal';
import { Slide, toast } from 'react-toastify';

function AllUsers({ isChecked }) {
  const [allUsers, setAllUsers] = useState([]);
  const [userId, setUserID] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('uid');
  const [usersPerPage] = useState(10);
  const [searchData, setSearchData] = useState('');
  const [filter, setFilter] = useState('All');

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/UserPage/AdminUsers.php", {});
    const allUsers = response.data.allUsers;
    setAllUsers(allUsers);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEventCancel = async (userId) => {
    setUserID(userId);
    setModalShow(true);
  };

  const blockUser = async (confirmed) => {
    if (confirmed) {
      try {
        const response = await axios.post("http://localhost/Resort-API/Admin/UserPage/blockUser.php", {
          uid: userId
        });
        if (response.data.status === 'yes') {
          toast.success('Blocked User Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
          setModalShow(false);
        } else if (response.data.status === 'no') {
          toast.error('Something Went Wrong!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
        }
        fetchData();
      } catch (error) {
        console.error("Error blocking user:", error);
      }
    } else {
      setModalShow(false);
    }
    setUserID(null);
  };

  const unblockUser = async (userId) => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/UserPage/unblockUser.php", {
        uid: userId
      });
      if (response.data.status === 'yes') {
        toast.success('User unblocked Successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      } else if (response.data.status === 'no') {
        toast.error('Something Went Wrong!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      }
      fetchData();
    } catch (error) {
      console.error("Error unblocking user:", error);
    }
  };

  // Filter users based on status and search data
  const filteredUsers = allUsers.filter(user => {
    // Filter based on status
    if (filter !== 'All' && user.Status !== filter) return false;

    // Filter based on search data
    const searchDataLower = searchData.toLowerCase();
    switch (search) {
      case 'uid':
        return user.user_id.toString().includes(searchDataLower);
      case 'email':
        return user.email_id.toLowerCase().includes(searchDataLower);
      case 'fname':
        return user.fname.toLowerCase().includes(searchDataLower);
      case 'lname':
        return user.lname.toLowerCase().includes(searchDataLower);
      case 'city':
        return user.city.toLowerCase().includes(searchDataLower);
      case 'state':
        return user.state.toLowerCase().includes(searchDataLower);
      case 'mno':
        return user.mno.toString().includes(searchDataLower);
      default:
        return false;
    }
  });

  // Logic for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Slice the users based on pagination
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate total pages based on filtered users
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Calculate page numbers to display in pagination
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(startPage + 2, totalPages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  // Clear search data input when search criteria changes
  useEffect(() => {
    setSearchData('');
  }, [search]);

  return (
    <>
      <Toast />
      <CnfModal
        onShow={modalShow}
        onConfirmation={blockUser}
        title={"Are you sure you want to block this user?"}
      />
      <Header
        isChecked={isChecked}
        header="Users"
      />
      <div className='Current-booking-body'>
        <div className='booking-table'>
          <div className='Current-booking-top'>
            <div className='search-group'>
              <div>Search:</div>
              <div className='d-flex'>
                <div className='search'>
                  <select onChange={e => setSearch(e.target.value)} value={search} >
                    <option value="uid">User ID</option>
                    <option value="email">Email ID</option>
                    <option value="fname">First Name</option>
                    <option value="lname">Last Name</option>
                    <option value="city">City</option>
                    <option value="state">State</option>
                    <option value="mno">Mobile Number</option>
                  </select>
                </div>
                <div className='select-input-search'>
                  {(search === 'uid') ? <input type="number" placeholder='Enter User ID' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                    (search === 'email') ? <input type="email" placeholder='Enter Email' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                      (search === 'fname') ? <input type="text" placeholder='Enter First Name' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                        (search === 'lname') ? <input type="text" placeholder='Enter Last Name' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                          (search === 'city') ? <input type="text" placeholder='Enter City' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                            (search === 'state') ? <input type="text" placeholder='Enter State' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                              (search === 'mno') ? <input type="text" placeholder='Enter Mobile Number' value={searchData} onChange={(e) => setSearchData(e.target.value)} /> :
                                ''}
                </div>
              </div>
            </div>
            <div className='selection'>
              <div>Filter : </div>
              <select onChange={e => setFilter(e.target.value)} defaultValue={filter}>
                <option value="All">All</option>
                <option value="blocked">Blocked</option>
                <option value="unblocked">Unblocked</option>
              </select>
            </div>
          </div>
          {currentUsers?.length > 0 ?
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentUsers?.map((data, index) => (
                    <tr key={index} className={data.Status === 'blocked' ? "ebg" : ""}>
                      <td>{data.user_id}</td>
                      <td>{data.email_id}</td>
                      <td>{data.fname}</td>
                      <td>{data.lname}</td>
                      <td>{data.city}</td>
                      <td>{data.state}</td>
                      <td>{data.mno}</td>
                      <td>{data.gender}</td>
                      <td style={{ textAlign: "center" }}>
                        {(data.Status === 'unblocked') ?
                          <i className='cancel-bk' onClick={() => handleEventCancel(data.user_id)}>
                            <FaUserLock />
                          </i> :
                          <i className='cancel-bk' onClick={() => unblockUser(data.user_id)}>
                            <FaUserAltSlash />
                          </i>
                        }
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>) :
            <div className='no-data'>There's no such data to display!</div>
          }
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

export default AllUsers;
