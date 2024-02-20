
import './css/App.css';
import './css/Style.css';
import './css/article.css';
import './css/labtest.css';
import './css/user.css';
import './css/Patient.css';
import { Routes, Route } from 'react-router-dom';
import { Lobby } from './screens/Lobby';
import {Room} from './screens/Room';
import { HomePage } from './components/HomePage';
import { Education } from './components/Education';
import { LabTest } from './components/LabTest';
import { Video } from './components/Video';
import { Doctor } from './components/Doctor';
import { Shorts } from './components/Shorts';
import { Articles } from './components/Articles';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Patient } from './components/Patient';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/education' element={<Education/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/labtest' element={<LabTest/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
        <Route path='/register' element={<Register/>}/> 
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/lobby' element={<Lobby/>}></Route>
        <Route path='/room/:roomId' element={<Room/>}></Route>
        <Route path='/shorts' element={<Shorts/>}/>
        <Route path='/article' element={<Articles/>}/>
        <Route path='/patient' element={<Patient/>}/>
      </Routes>
      
      <ToastContainer position="bottom-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Zoom} />
      </>
    
  );
}

export default App;
