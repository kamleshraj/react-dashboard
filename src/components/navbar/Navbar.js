import React, { useContext } from 'react'
import './navbar.scss'
import { FaSearch,FaGlobe,FaRegMoon,FaRegBell,FaRegCommentAlt ,FaUserAlt, FaListUl, FaCog} from 'react-icons/fa'
import { DarkModeContext } from '../context/darkModeContext'
const Navbar = () => {
    const{dispatch} =useContext(DarkModeContext)
  return (
   <div className='navbar'>
    <div className='nav-wrapper'>
        <div className='search'>
            <input type='text' placeholder='search...'/>
            <FaSearch/>
        </div>
        <div  className='nav-items'>
            <div className='item'>
                <FaGlobe className='icon'/>
                English
            </div>
            <div className='item'>
                <FaRegMoon className='icon' onClick={()=>dispatch({type:'TOGGLE'})}/>
            </div>
            <div className='item'>
                <FaRegBell className='icon'/>
                <div className='counter'>1</div>
            </div>
            <div className='item'>
                <FaRegCommentAlt className='icon'/>
                <div className='counter'>2</div>
            </div>
            <div className='item'>
                <FaListUl className='icon'/>
            </div>
            <div className='item'>
                <FaUserAlt className='icon'/>
            </div>
            <div className='item'>
                <FaCog className='icon'/>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Navbar