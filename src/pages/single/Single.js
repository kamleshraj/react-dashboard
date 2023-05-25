import React from 'react'
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Single = () => {
  return (
    <div className='list-wrapper'>
        <Sidebar/>
    <div className='listContainer'>
        <Navbar/>
    <div>single user info</div>
    </div>
</div>
  )
}

export default Single