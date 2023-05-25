import React from 'react'
import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataGridList from '../../components/dataGrid/DataGrid'

const List = () => {
  return (
    <div className='list-wrapper'>
        <Sidebar/>
        <div className='listContainer'>
            <Navbar/>
            <div className='dataGridContainer'>
               <DataGridList/> 
            </div>
        </div>
    </div>
  )
}

export default List