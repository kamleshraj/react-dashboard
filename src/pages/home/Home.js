import React from 'react'
import '../home/home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import TableList from '../../components/table/TableList'

const Home = () => {
  return (
   <>
    <div className='home-wrapper'>
        <Sidebar/>
        <div className='home-container'>
            <Navbar/>
            <div className='home-innerWrapper'>
              <div className='widgets'>
                <Widget type='Users'/>
                <Widget type='Orders'/>
                <Widget type='Earnings'/>
                <Widget type='Balance'/>
              </div>
              <div className='charts'>
                <Featured/>
                <Chart/>
              </div>
              <div className='list-container'>
                <TableList/>
              </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Home