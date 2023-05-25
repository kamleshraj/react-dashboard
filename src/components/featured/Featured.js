import React from 'react'
import './featured.scss';
import { FaEllipsisV } from 'react-icons/fa';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  const percentage = 70;
  return (
    <div className='featured'>
      <div className='top'>
        <h2 className='title'>Total Revenue</h2>
        <FaEllipsisV/>
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5}/>
        </div>
        <h3 className='sub-title'>Total sales made today</h3>
        <h4 className='salesCount'>$ 452</h4>
        <p>some content will come here</p>
        <p>Lingvanex free service instantly translates words, documents</p>
        <p>Just paste your English text into the text field and translate it into Hindi</p>
      </div>
    </div>
  )
}

export default Featured