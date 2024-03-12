import Index from './Components/Home/Index';
import PButton from './Components/Home/Progress Button/PButton';
import RootLayout from './Components/Home/RootLayout';
import Contact from './Pages/Contact/Contact'
import { Route, Routes } from 'react-router-dom';
import JuniorSuite from './Pages/RoomDetails/JuniorSuite/JuniorSuite';
import DeluxeRoom from './Pages/RoomDetails/DeluxeRoom/DeluxeRoom';
import DoubleRoom from './Pages/RoomDetails/DoubleRoom/DoubleRoom';
import FamilyRoom from './Pages/RoomDetails/FamilyRoom/FamilyRoom';
import SuperiorRoom from './Pages/RoomDetails/SuperiorRoom/SuperiorRoom';
import WellnessRoom from './Pages/RoomDetails/WellnessRoom/WellnessRoom';
import Gallery from './Pages/Gallery/Gallery';
import Login from './Components/Login/Login';
import FAQ from './Pages/FAQ/FAQ';
import Spa from './Pages/Spa/Spa'
import FitnessCenter from './Pages/Amenities/FitnessCenter/FitnessCenter';
import Games from './Pages/Amenities/Games/Games';
import HealthClub from './Pages/Amenities/HealthClub/HealthClub';
import Wedding from './Pages/Events/Wedding/Wedding';
import Birthday from './Pages/Events/Birthday/Birthday';
import CorporateMeetings from './Pages/Events/CorporateMeetings/CorporateMeetings';
import Restaurant from './Pages/Restaurant/Restaurant';
import BookingPage from './Pages/BookingPage/BookingPage';
import Dashboard from './User/Dashboard/Dashboard';
import Settings from './User/Settings/Settings';
import Bookings from './User/Bookings/Bookings';
import React, { useState } from 'react'
import Sidebar1 from './User/Sidebar/Sidebar';

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(true)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  };

  return (
    <div>
      <PButton />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Index />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/JuniorSuite" element={<JuniorSuite />} />
        <Route path="/DeluxeRoom" element={<DeluxeRoom />} />
        <Route path="/DoubleRoom" element={<DoubleRoom />} />
        <Route path="/FamilyRoom" element={<FamilyRoom />} />
        <Route path="/SuperiorRoom" element={<SuperiorRoom />} />
        <Route path="/WellnessRoom" element={<WellnessRoom />} />
        <Route path="/Spa" element={<Spa />} />
        <Route path="/FitnessCenter" element={<FitnessCenter />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/HealthClub" element={<HealthClub />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/Birthday" element={<Birthday />} />
        <Route path="/CorporateMeetings" element={<CorporateMeetings />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        {/* <Route path="/UserPanel" element={<UserPanel />} /> */}
      </Routes>

      <div className='d-flex'>
        <div>
          <Sidebar1 />
        </div>
        <div className='d-flex main'>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Bookings" element={<Bookings />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
