import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { Table, Pagination, Modal } from 'react-bootstrap';
import { FaStar, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import "./Testimonial.css"
import CnfModal from '../../Common/Modal/Modal';
import Toast from '../../Common/Toast/Toast';
import { Slide, toast } from 'react-toastify';

function Testimonial({ isChecked }) {
  const [allTestimonials, setAllTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [testimonialsPerPage] = useState(10);
  const [modalShow, setModalShow] = useState(false);
  const [filter, setFilter] = useState('All');
  const [feedbackId, setFeedbackId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/TestimonialsPage/TestimonialsPage.php", {});
    const Testimonials = response.data.allTestimonials;
    setAllTestimonials(Testimonials);
  };

  // Logic for pagination
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i}><FaStar /></i>);
    }
    return stars;
  };

  const handleEventCancel = async (feedback_id) => {
    setFeedbackId(feedback_id);
    setModalShow(true);
  };

  const handleCancelConfirmation = async (confirmed) => {
    if (confirmed) {
      try {
        const response = await axios.post("http://localhost/Resort-API/Admin/TestimonialsPage/disableTestimonial.php", {
          tid: feedbackId
        });
        if (response.data.status === 'yes') {
          toast.success('Feedback disable Successfully!', {
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
        console.error("Error disabling feedback:", error);
      }
    } else {
      setModalShow(false);
    }
    setFeedbackId(null);
  };

  const enableFeedback = async (feedback_id) => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/TestimonialsPage/enableTestimonial.php", {
        tid: feedback_id
      });
      if (response.data.status === 'yes') {
        toast.success('Feedback enable Successfully!', {
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
      console.error("Error disabling feedback:", error);
    }
  };

  // Filter feedback based on selected filter
  const filterFeedback = allTestimonials.filter(data => {
    if (filter === 'All') return true;
    return data.Status.toLowerCase() === filter.toLowerCase();
  });

  // Slice the filtered feedback based on pagination
  const currentTestimonials = filterFeedback.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

  // Calculate total pages based on filtered feedback
  const totalPages = Math.ceil(filterFeedback.length / testimonialsPerPage);

  // Calculate page numbers to display in pagination
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(startPage + 2, totalPages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <>
      <Toast />
      <Header isChecked={isChecked} header="Testimonial" />
      <CnfModal
        onShow={modalShow}
        onConfirmation={handleCancelConfirmation}
        title={"Are you sure you want to disable this feedback message?"}
      />
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Full Feedback Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedMsg}</Modal.Body>
        <Modal.Footer>
          <button className='add-form-btn' onClick={() => setShowModal(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <div className='Current-booking-body'>
        <div className='booking-table'>
          <div className='selection'>
            <div> Filter : </div>
            <div>
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="enable">Enable</option>
                <option value="disable">Disable</option>
              </select>
            </div>
          </div>
          {currentTestimonials?.length > 0 ? (
            <>
              <Table striped bordered variant="dark" responsive>
                <thead>
                  <tr>
                    <th>Feedback ID</th>
                    <th>Email ID</th>
                    <th>Feedback Message</th>
                    <th>Rating</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTestimonials.map((data, index) => (
                    <tr key={index} className={data.Status === 'disable' ? "ebg" : ""}>
                      <td>{data.feedback_id}</td>
                      <td>{data.email_id}</td>
                      <td
                        className="room-description"
                        onDoubleClick={() => {
                          setSelectedMsg(data.msg);
                          setShowModal(true);
                        }}
                      >
                        {data.msg}
                      </td>
                      <td className="rating">{renderRatingStars(data.rating)}</td>
                      <td style={{ textAlign: "center" }}>
                        {(data.Status === 'enable') ?
                          <i className='cancel-bk' onClick={() => handleEventCancel(data.feedback_id)}>
                            <FaRegEye />
                          </i> :
                          <i className='cancel-bk' >
                            <FaRegEyeSlash onClick={() => enableFeedback(data.feedback_id)} />
                          </i>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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
            </>
          ) : (
            <div className='no-data'>There's no such data to display!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
