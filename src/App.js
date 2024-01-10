//import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ReactSignup from './pages/ReactSignup';
import Home2 from './pages/Home2';
import UTable from './pages/UTable';
import ATable from './pages/ATable';
import ECRUD from './components/ECRUD';




const App = () => {
  return (
    <Router>
      <div className='Content'>
        <Routes>
        <Route path="/home" element={<Home2 />} />
        <Route path="/" element={<Login />} />
        <Route path="/tracker" element={<UTable />} />
        <Route path="/requests" element={<ATable />} />
        <Route path="/signup" element={<ReactSignup />} />
        </Routes>
      </div>

      
    
      
    </Router>
  );
}

export default App;
