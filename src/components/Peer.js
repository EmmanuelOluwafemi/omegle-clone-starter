import React from 'react'

import { RiShieldUserLine } from 'react-icons/ri';

const Peer = ({peer}) => {
   
 return (
   <div className='w-full h-full bg-gray-900 rounded-2xl'>
        <div className='w-full h-full flex items-center justify-center'>
            <RiShieldUserLine size="3rem" className='text-white' />
        </div>
   </div>
 )
}

export default Peer
