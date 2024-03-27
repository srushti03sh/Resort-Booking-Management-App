import axios from 'axios';
import { useEffect, useState } from 'react'
import { Slide, toast } from 'react-toastify';
import moment from 'moment';

const AllRoomsLogic = () => {

  const [allRoomData, setAllRoomData] = useState([]);
  const [show, setShow] = useState(false);
  const [rType, setRtype] = useState('');
  const [rDes, setRdes] = useState('');
  const [rCap, setRcap] = useState('');
  const [rNo, setRno] = useState('');
  const [rPrice, setRprice] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [roomIdToDelete, setRoomIdToDelete] = useState(null);
  const [edate, setEdate] = useState('');
  const [filter, setFilter] = useState('All');
  const [roomId, setRoomId] = useState(null);

  const handleClose = () => {
    setShow(false)
    setRoomId(null)
  };

  const handleShow = () => setShow(true);

  const handleEdit = async (roomId) => {
    handleShow();
    setRoomId(roomId)
  };

  const handleEventCancel = async (roomId) => {
    setRoomIdToDelete(roomId);
    setModalShow(true);
  };

  const fetchData = async () => {
    const response = await axios.post("http://localhost/Resort-API/Admin/RoomPage/showRooms.php", {
    });

    const roomData = response.data.roomData;
    setAllRoomData(roomData)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addRooms = async () => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/RoomPage/addRoom.php", {
        rType: rType,
        rDes: rDes,
        rCap: rCap,
        tRoom: rNo,
        rPrice: rPrice
      });
      if (response.data.status === 'yes') {
        toast.success('Room Added Successfully!', {
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
        fetchData();
        handleClose();
        setRtype('');
        setRdes('');
        setRcap('');
        setRno('');
        setRprice('');
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

  const editRoom = async () => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/RoomPage/EditRoom.php", {
        rType: rType,
        rDes: rDes,
        rCap: rCap,
        tRoom: rNo,
        rPrice: rPrice,
        rid: roomId
      });
      if (response.data.status === 'yes') {
        toast.success('Room edited Successfully!', {
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
        handleClose();
        fetchData();
        setRtype('');
        setRdes('');
        setRcap('');
        setRno('');
        setRprice('');
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

  const handleCancelConfirmation = async (confirmed) => {
    if (confirmed) {
      try {
        const response = await axios.post("http://localhost/Resort-API/Admin/RoomPage/disableRoom.php", {
          room_id: roomIdToDelete
        });
        if (response.data.status === 'yes') {
          toast.success('Room disable Successfully!', {
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
          setEdate('');
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
        else if (response.data.status === 'equipped') {
          setModalShow(true);
          setEdate(moment(response.data.edate).format('DD-MM-YYYY'));
        }
        fetchData();
      } catch (error) {
        console.error("Error disabling room:", error);
      }
    } else {
      setModalShow(false);
      setEdate('');
    }

    setRoomIdToDelete(null);
  };

  const enableRoom = async (roomId) => {
    try {
      const response = await axios.post("http://localhost/Resort-API/Admin/RoomPage/enableRoom.php", {
        room_id: roomId
      });
      if (response.data.status === 'yes') {
        toast.success('Room enable Successfully!', {
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
      console.error("Error disabling room:", error);
    }
  };

  const filterRooms = allRoomData?.length > 0 ? (
    filter === 'All' ?
      allRoomData
      : allRoomData.filter(data => data.Status.toLowerCase() === filter.toLowerCase())
  ) : [];

  const handleSubmit = () => {
    if (roomId) {
      editRoom()
    } else {
      addRooms()
    }
  }

  useEffect(() => {
    const selectedRoomId = allRoomData.find((room) => room.room_id === roomId)
    if (selectedRoomId) {
      setRtype(selectedRoomId.roomType)
      setRdes(selectedRoomId.room_des)
      setRcap(selectedRoomId.room_capacity)
      setRno(selectedRoomId.total_room)
      setRprice(selectedRoomId.price)
    } else {
      console.log("error");
    }
  }, [roomId, allRoomData])

  return { setRno, rNo, setRcap, rCap, setRdes, rDes, setRtype, rType, roomId, show, edate, modalShow, handleCancelConfirmation, handleClose, setRprice, rPrice, handleSubmit, handleShow, filter, setFilter, filterRooms, handleEdit, handleEventCancel, enableRoom }
}

export default AllRoomsLogic
