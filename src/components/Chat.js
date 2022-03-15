import React, { useState } from 'react'

import { AiOutlineSend } from 'react-icons/ai';

const Chat = () => {
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage('');
    }

  return (
    <div className='absolute bottom-full right-7 w-72 h-96 bg-gray-900 rounded shadow-xl p-6 pb-0'>
        
        <div className='w-full h-5/6 flex flex-col justify-center items-center'>
            <p className='text-gray-300 text-sm'>There are no messages here.</p>
        </div>

        <form onSubmit={handleSubmit} className='w-full border-t-2 border-gray-700 h-1/6 flex items-center gap-4'>
            <input value={message} onChange={(e) => setMessage(e.target.value)} className='w-full h-full border-none outline-none bg-transparent text-white' placeholder='Write something here' />
            <AiOutlineSend size="1.5rem" className='text-white cursor-pointer' />
        </form>
    </div>
  )
}

export default Chat