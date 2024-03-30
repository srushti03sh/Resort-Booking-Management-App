import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import { Table } from 'react-bootstrap';
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import Toast from '../../Common/Toast/Toast';
import CnfModal from '../../Common/Modal/Modal';
import { Slide, toast } from 'react-toastify';

function AllUsers({ isChecked }) {

  const [allUsers, setAllUsers] = useState([]);
  const [userId, setUserID] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/UserPage/AdminUsers.php", {
    });
    const allUsers = response.data.allUsers
    setAllUsers(allUsers)
  }
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  allUsers?.map((data, index) => (
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
        </div>
      </div>
    </>
  )
}

export default AllUsers
