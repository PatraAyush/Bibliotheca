import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import AdminPanel from './components/AdminPanel';
import UpdateBooks from './components/UpdateBooks';
import IssuedBooks from './components/IssuedBooks';
import AllotRooms from './components/AllotRooms';
import StudentPanel from './components/StudentPanel';
import IssueBooks from './components/IssueBooks';
import CheckAvailability from './components/CheckAvailability';
import Notifications from './components/Notifications';
import Welcome from './components/Welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/AdminPanel" element={<AdminPanel />} />
      <Route path="/update_books" element={<UpdateBooks />} />
      <Route path="/issued_books" element={<IssuedBooks />} />
      <Route path="/allot_rooms" element={<AllotRooms />} />
      <Route path="/student_panel" element={<StudentPanel />} />
      <Route path="/issue_books" element={<IssueBooks />} />
      <Route path="/check_availability" element={<CheckAvailability />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
