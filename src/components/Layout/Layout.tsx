import React from 'react'
import Sidebar from '../Sidebar'
import Chat from '../../pages/Chat'
import { Treatment } from '../Chat/Treatment'
import { LeftMenu } from '../Chat/LeftMenu'
import './layout.css'

export default function Layout() {
  return (
    <div 
    // style={{display:'flex', justifyContent:'space-around'}}
    className='wrapp'
    >
        <div  className='side'
        // style={{width:'30%'}}
        >
        <LeftMenu/>
        </div>
        <div 
        // style={{width:'70%'}}
        className='content'
        >        
        <Treatment/>
            </div>
        {/* <Sidebar />
        <Chat/> */}
    </div>
  )
}
