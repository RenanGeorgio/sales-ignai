import React, { useState } from 'react'
import { Treatment } from '../../Chat/Treatment'
import { LeftMenu } from '../../Chat/LeftMenu'
import './layout.css'

export default function LayoutChat({props}) {
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
