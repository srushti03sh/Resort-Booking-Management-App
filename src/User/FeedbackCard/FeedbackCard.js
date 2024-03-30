import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import "./FeedbackCard.css"
import { Slide, toast } from 'react-toastify'
import axios from 'axios'
import Toast from '../../Common/Toast/Toast'
import { useNavigate } from 'react-router-dom'

function FeedbackCard({ modalShow }) {

  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const [rating, setRating] = useState(0)
  const [msg, setMsg] = useState('')
  const navigate = useNavigate();

  const handleRating = (rating) => {
    setRating(rating)
  }

  const addFeedback = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost/Resort-API/User/AddFeedback.php", {
        rating: rating,
        msg: msg,
        id: loginData.id
      });
      if (response.data.status === 'yes') {
        if (modalShow === true) {
          toast.success('Thank you for your feedback!', {
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
          // localStorage.removeItem('loginData');
          // navigate("/");
        } else {
          toast.success('Feedback Added Successfully!', {
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
        setRating(0)
        setMsg('')
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
    } catch {
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
      console.log("error");
    }
  };

  return (
    <>
      <Toast />
      <div className='feed-card'>
        <div className='fTitle'>
          Rate Your Experience
        </div>
        <Rating
          initialValue={rating}
          onClick={handleRating}
          allowFraction={false}
          transition={true}
          showTooltip={true}
          fillColor="#aa8453"
          emptyColor="rgba(170, 132, 83, 0.4)"
        />
        <div className='fTitle'>
          give us your detailed review...
        </div>
        <form className='feed-form'>
          <textarea rows={5} placeholder='Message...' cols={40} value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button onClick={addFeedback}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default FeedbackCard
