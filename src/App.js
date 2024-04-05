import Index from './Components/Home/Index';
import PButton from './Components/Home/Progress Button/PButton';
import RootLayout from './Components/Home/RootLayout';
import Contact from './Pages/Contact/Contact'
import { Navigate, Route, Routes } from 'react-router-dom';
import Gallery from './Pages/Gallery/Gallery';
import Login from './Components/Login/Login';
import FAQ from './Pages/FAQ/FAQ';
import Spa from './Pages/Spa/Spa'
import Wedding from './Pages/Events/Wedding/Wedding';
import Birthday from './Pages/Events/Birthday/Birthday';
import CorporateMeetings from './Pages/Events/CorporateMeetings/CorporateMeetings';
import Restaurant from './Pages/Restaurant/Restaurant';
import BookingPage from './Pages/BookingPage/BookingPage';
import UserPanel from './User/UserPanel/UserPanel';
import EventBookingPage from './Pages/EventBookingPage/EventBookingPage';
import AdminPanel from './Admin/AdminPanel/AdminPanel';
import Facilities from './Pages/Facilities/Facilities';
import CommonRoomDetails from './Common/CommonRoomDetails/CommonRoomDetails';
import AllRooms from './Pages/AllRooms/AllRooms';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import BillComponent from './BillComponent/BillComponent';

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
        <Route path="/CommonRoomDetails/:id" element={<CommonRoomDetails />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Spa" element={<Spa />} />
        <Route path="/Wedding" element={<Wedding />} />
        <Route path="/Birthday" element={<Birthday />} />
        <Route path="/CorporateMeetings" element={<CorporateMeetings />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/EventBookingPage" element={<EventBookingPage />} />
        <Route path="/AllRooms" element={<AllRooms />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/BillComponent" element={<BillComponent />} />
        <Route path="/UserPanel/*" element={loginData ? <UserPanel /> : <Navigate to="/Login" />} />
        <Route path="/AdminPanel/*" element={loginData ? <AdminPanel /> : <Navigate to="/Login" />} />
      </Routes>

    </div>
  );
}

export default App;
