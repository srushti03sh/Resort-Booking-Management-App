import Index from './Components/Home/Index';
import PButton from './Components/Home/Progress Button/PButton';
import RootLayout from './Components/Home/RootLayout';
import Contact from './Pages/Contact/Contact'
import { Navigate, Route, Routes } from 'react-router-dom';
import JuniorSuite from './Pages/RoomDetails/JuniorSuite/JuniorSuite';
import DeluxeRoom from './Pages/RoomDetails/DeluxeRoom/DeluxeRoom';
import DoubleRoom from './Pages/RoomDetails/DoubleRoom/DoubleRoom';
import FamilyRoom from './Pages/RoomDetails/FamilyRoom/FamilyRoom';
import SuperiorRoom from './Pages/RoomDetails/SuperiorRoom/SuperiorRoom';
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
import UserPanel from './User/UserPanel/UserPanel';
import EventBookingPage from './Pages/EventBookingPage/EventBookingPage';
import AdminPanel from './Admin/AdminPanel/AdminPanel';
import InputImage from './Admin/InputImage';

function App() {

  const loginData = JSON.parse(localStorage.getItem("loginData"));

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
        <Route path="/Spa" element={<Spa />} />
        <Route path="/FitnessCenter" element={<FitnessCenter />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/HealthClub" element={<HealthClub />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/Birthday" element={<Birthday />} />
        <Route path="/CorporateMeetings" element={<CorporateMeetings />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/EventBookingPage" element={<EventBookingPage />} />
        <Route path="/UserPanel/*" element={loginData ? <UserPanel /> : <Navigate to="/Login" />} />
        <Route path="/AdminPanel/*" element={loginData ? <AdminPanel /> : <Navigate to="/Login" />} />

        <Route path='/Admin' element={<InputImage />} />
      </Routes>

    </div>
  );
}

export default App;
