import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adminlogin from './components/Adminlogin';
import Adminhome from './components/Adminhome';
import Addhr from './components/Addhr';
import Reqdetails from './components/Reqdetails';
import HRlogin from './components/HRlogin';
import Hrhome from './components/Hrhome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/adminlogin' element={<Adminlogin/>} />
            <Route path='/adminhome' element={<Adminhome/>} />
            <Route path='/addhr' element={<Addhr/>} />
            <Route path='/reqdetails' element={<Reqdetails/>} />
            <Route path='/hrlogin' element={<HRlogin/>} />
            <Route path='/hrhome' element={<Hrhome/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
