import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMiniMapPin } from "react-icons/hi2";
import OtpInput from 'react-otp-input';
import { states } from "../../Data/StateCity/StateCity";
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(true);
  const [show, setShow] = useState(true);
  const [otp, setOtp] = useState('');
  const [decryptOtp, setDecryptOtp] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(true);
  const [remail, setRemail] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [firstn, setFirstn] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [lastn, setLastn] = useState("");
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [mobilen, setMobilen] = useState("");
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  // Handle state change
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(''); // Clear selected city when state changes
  };

  // Handle city change
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Login api
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost/php/Login.php", {
        eid: email,
        pwd: password
      });


      const genderLogin = response.data.gender;
      const fnameLogin = response.data.fname;
      const lnameLogin = response.data.lname;
      const role = response.data.role;

      if (response.data.status === "no") {
        navigate("/Login");
        toast.error('Invalid Credentials!', {
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
      } else if (response.data.status === "yes") {
        localStorage.setItem('loginData', JSON.stringify({ email, genderLogin, fnameLogin, lnameLogin, role }));
        navigate("/");
      }
    }
    catch {
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
  // console.log(lgender);
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      if (signup) {
        const response = await axios.post("http://localhost/php/otp.php", {
          eid: remail
        });

        if (response.data.status === "exist") {
          toast.error('Email Address Already Exists!', {
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
          setSignup(false); // Change signup mode to false to indicate OTP is generated
          setShow(false);
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
      } else {
        // Signup
        if (!signup) {
          if (otp == decryptOtp) {
            const response = await axios.post("http://localhost/php/Registration.php", {
              eid: remail,
              pwd: rpassword,
              fname: firstn,
              lname: lastn,
              city: selectedState,
              state: selectedCity,
              mno: mobilen,
              gender: gender
            });

            console.log("response", response);
            navigate("/")
          } else {
            toast.error('Sorry! OTP Mismatched', {
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
          }
        } else {
          console.log("Error: Cannot perform signup in OTP generation mode");
        }
      }
    } catch {
      toast.error('Error Occured during signup', {
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
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={`lslider col-lg-12 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i><FaUser /></i>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-field">
                <i><FaLock /></i>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <input type="submit" value="Login" className="btn solid" onClick={handleLogin} />
            </form>
            <form action="" className="sign-up-form" onSubmit={handleSignup}>
              <h2 className="title">Sign up</h2>
              {show
                ?
                <div className='botp'>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="input-field">
                          <i><FaUser /></i>
                          <input type="text" placeholder="First Name" value={firstn} onChange={(e) => setFirstn(e.target.value)} />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="input-field">
                          <i><FaUser /></i>
                          <input type="text" placeholder="Last Name" value={lastn} onChange={(e) => setLastn(e.target.value)} />
                        </div>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className="input-field">
                            <i><MdMail /></i>
                            <input type="email" placeholder="Email" value={remail} onChange={(e) => setRemail(e.target.value)} />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className="input-field">
                            <i><BiSolidPhoneCall /></i>
                            <input type="text" placeholder="Mobile Number" value={mobilen} onChange={(e) => setMobilen(e.target.value)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="input-select">
                          <i><HiMiniMapPin /></i>
                          <select value={selectedState} onChange={handleStateChange}>
                            <option value="" disabled>Select State</option>
                            {states.map((state, index) => (
                              <option key={index} value={state.name}>{state.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="input-select">
                          <i><HiMiniMapPin /></i>
                          <select value={selectedCity} onChange={handleCityChange}>
                            <option value="" disabled>Select a state first</option>
                            {selectedState &&
                              states.find(state => state.name === selectedState).cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="input-field">
                          <i><FaLock /></i>
                          <input type="password" placeholder="Password" value={rpassword} onChange={(e) => setRpassword(e.target.value)} />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="input-field">
                          <i><FaLock /></i>
                          <input type="text" placeholder="Confirm Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 gender'>
                    <div className='row'>
                      <div className='col-md-3'>
                        Gender :
                      </div>
                      <div className='col-md-3'>
                        <input type="radio" id="male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                        <label for="male">Male</label>
                      </div>
                      <div className='col-md-3'>
                        <input type="radio" id="female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                        <label for="female">Female</label>
                      </div>
                      <div className='col-md-3'>
                        <input type="radio" id="other" name="gender" value="Other" onChange={(e) => setGender(e.target.value)} />
                        <label for="other">Other</label>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputType="number"
                  containerStyle="otp-container"
                  renderSeparator={<span>--</span>}
                  renderInput={(props) => <input {...props} />}
                />
              }
              <button className="btn">
                {show ? "Generate OTP" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
