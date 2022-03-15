import React, { useState } from 'react'

import Chat from './Chat';

import { BiMessage } from 'react-icons/bi';
import { BsCameraVideoOff } from 'react-icons/bs';
import { FiMicOff } from 'react-icons/fi';
import { MdOutlineCallEnd } from 'react-icons/md';

const Footer = () => {
    const [showChat,] = useState(false)

    return (
        <div className='w-full h-[10%] px-4 md:px-12 flex align-center justify-between relative'>
            <div></div>
            <div>
                <button className='bg-white px-4 py-4 rounded ml-4 text-black'><FiMicOff /></button>
                <button className='bg-white px-4 py-4 rounded ml-4 text-black'><BsCameraVideoOff /></button>
                <button className='bg-red-600 px-4 py-4 rounded ml-4'><MdOutlineCallEnd className='text-white w-6' /></button>
            </div>
            <div>
                <button className='px-4 py-4 rounded ml-4 text-white'><BiMessage /></button>
            </div>

            {
                showChat &&
                <Chat />
            }
        </div>
    )
}

export default Footer