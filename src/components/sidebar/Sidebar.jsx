import React, { useContext } from 'react'
import './sidebar.scss';

import { FaArrowsAlt, FaBuffer, FaFlickr, FaSketch, FaSnapchatGhost, FaAdjust, FaCertificate, FaClone, FaSignInAlt, FaUserAlt, FaTools, FaStop} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/darkModeContext';

const Sidebar = () => {
  const{dispatch} =useContext(DarkModeContext)
  return (
    <div className='sidebar-wrapper'>
        <div className='top'>
            <h3>LamaAdmin</h3>
        </div>
        <hr/>
        <div className='list'>
            <ul>
                <p className='sidebar-title'>Main</p>
                <li><FaArrowsAlt/> <Link to='/'>Dashboard</Link></li>
                <p className='sidebar-title'>LISTS</p>
                <li><FaBuffer/><Link to='/users'>Users</Link></li>
                <li><FaFlickr/>Products</li>
                <li><FaSketch/>Orders</li>
                <li><FaSnapchatGhost/>Delivery</li>
                <p className='sidebar-title'>Useful</p>
                <li><FaAdjust/>Status</li>
                <li><FaCertificate/>Notifications</li>
                <p className='sidebar-title'>Service</p>
                <li><FaClone/>System Health</li>
                <li><FaStop/>Logs</li>
                <li><FaTools/>Settings</li>
                <p className='sidebar-title'>User</p>
                <li><FaUserAlt/>Profile</li>
                <li><FaSignInAlt/>Logout</li>
                <p className='sidebar-title'>Theme</p>
                <li>
                  <div className='white' onClick={()=>dispatch({type:'LIGHT'})}></div>
                  <div className='dark' onClick={()=>dispatch({type:'DARK'})}></div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar