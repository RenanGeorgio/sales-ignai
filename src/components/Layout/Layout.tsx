import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Chat from '../../pages/Chat'
import { Treatment } from '../Chat/Treatment'
import { LeftMenu } from '../Chat/LeftMenu'
import './layout.css'
import AddTicket from '../Chat/AddTicket/AddTicket'

export default function Layout({props}) {
  const [showAddTicket, setShowAddTicket] = useState(false);
  const toggleAddTicket = () => {
    setShowAddTicket(!showAddTicket);
  };
  return (
    <div className='wrapp' >
        <div  className='side'>
        <LeftMenu onAddTicketClick={toggleAddTicket} />
        </div>
        <div  className='content'>        
        <Treatment toggleAddTicket={showAddTicket}/>
            </div>
    </div>
  )
}
