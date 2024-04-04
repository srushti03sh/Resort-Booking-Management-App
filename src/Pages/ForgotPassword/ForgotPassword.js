import React, { useState } from 'react'
import "./ForgotPassword.css"
import OtpInput from 'react-otp-input';
import { Slide, toast } from 'react-toastify';
import Toast from "../../Common/Toast/Toast"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {

  const [email, setEmail] = useState('');
  const [forp, setForp] = useState(true)
  const [otp, setOtp] = useState('')
  const [emaillError, setEmailError] = useState(false)
  const [rpasswordError, setRpasswordError] = useState(false)
  const [decryptOtp, setDecryptOtp] = useState('')
  const [chngpswd, setChngpswd] = useState(false)
  const [npswd, setNpswd] = useState('')
  const [cpswd, setCpswd] = useState('')
  const navigate = useNavigate();

  const sendOtp = async (e) => {
    e.preventDefault();
    if (email === '') {
      setEmailError(true)
      return
    } else {
      const response = await axios.post("http://localhost/Resort-API/Common/forgetOtp.php", {
        eid: email
      });

      if (response.data.status === "NotExist") {
        toast.error('Email Address Not Exists!', {
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
      } else if (response.data.status === "otp") {
        const encodedString = response.data.otp;
        const decodedString = atob(encodedString);
        const decryptedData = JSON.parse(decodedString);
        setDecryptOtp(decryptedData.otp);
        toast.success('OTP sent successfully on your Email', {
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
        setForp(false)
      } else if (response.data.status === "nomail") {
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
    }
  }
  const chkOtp = async (e) => {
    e.preventDefault();
    if (otp === '') {
      toast.error('Enter OTP Please !', {
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
    } else if (otp == decryptOtp) {
      setChngpswd(true)
    } else if (otp !== decryptOtp) {
      toast.error('OTP mismatch!', {
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
    } else {
      toast.error('Something went wrong', {
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
  }
  const updatePswd = async (e) => {
    e.preventDefault();
    if (chngpswd === true) {
      if (npswd !== cpswd) {
        setRpasswordError(true);
      } else if (npswd == cpswd) {
        const response = await axios.post("http://localhost/Resort-API/Common/updatePassword.php", {
          email: email,
          newPassword: npswd
        });
        if (response.data.status === "yes") {
          toast.success('Password Changed Successfully', {
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
          navigate("/Login")
        } else if (response.data.status === "no") {
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
          setForp(true)
        } else {
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
      }
    }
  }
  console.log(npswd);
  console.log(cpswd);
  return (
    <>
      <Toast />
      <div className='for-pswd'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='for-pswd-content'>
              <h2>
                Forgot Password
              </h2>
              <div>
                <form className='for-pswd-form'>
                  {/* {forp ? "email" : "change" ? "otp" : ""} */}
                  {forp ?
                    <>
                      <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                      {emaillError ? <span style={{ color: "red" }}>Please Enter Your Email</span> : ""}
                      <button onClick={sendOtp}>
                        Submit
                      </button>
                    </>
                    :
                    chngpswd ?
                      <>
                        <input type='password' placeholder='New Password' value={npswd} onChange={(e) => setNpswd(e.target.value)} className='pswdf' />
                        <input type='password' placeholder='Confirn Password' value={cpswd} onChange={(e) => setCpswd(e.target.value)} className='pswdf' />
                        {rpasswordError ? <span style={{ color: "red" }}>Password and Confirm Password Doesn't Match</span> : ""}
                        <button onClick={updatePswd}>
                          Update
                        </button>
                      </> :
                      <>
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={6}
                          inputType="number"
                          containerStyle="otp-container"
                          renderSeparator={<span>--</span>}
                          renderInput={(props) => <input {...props} />}
                        />
                        <button onClick={chkOtp}>
                          Submit
                        </button>
                      </>
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ForgotPassword
