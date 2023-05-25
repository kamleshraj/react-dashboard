import React from 'react'
import './widget.scss'
import { FaAngleUp,FaCarAlt,FaDollarSign,FaUserAlt, FaWallet } from 'react-icons/fa'

const Widget = ({type}) => {
    let data;
    let amount=65366;
    switch(type){
        case 'Users':
            data={
                title:'Users',
                isMoney:false,
                link:'See all users',
                icon:<FaUserAlt/>
            };
            break;
            case 'Orders':
            data={
                title:'Orders',
                isMoney:false,
                link:'View all orders',
                icon:<FaCarAlt/>
            };
            break;
            case 'Earnings':
                data={
                    title:'Earnings',
                    isMoney:true,
                    link:'View net earnings',
                    icon:<FaDollarSign/>
                };
                break;
                case 'Balance':
                    data={
                        title:'Balance',
                        isMoney:true,
                        link:'See details',
                        icon:<FaWallet className="icon"
                        style={{
                          backgroundColor: '#e9e9e9',
                          color: "purple",
                        }}/>
                    };
                    break;
            default:
    }
  return (
        <div className={`item ${data.title}`}>
            <div className='left'>
                <span className='title'>{data.type}</span>
                <span className='counter'>{data.isMoney && '$'} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <FaAngleUp/>
                    20%
                </div>
                <div className='user-icon'>
                    {data.icon}
                </div>
            </div>
        </div>
  )
}

export default Widget