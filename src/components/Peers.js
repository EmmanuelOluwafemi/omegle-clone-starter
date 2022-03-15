import React from 'react'
import Footer from './Footer';
import Peer from './Peer'

const Peers = () => {

    const peers = [];
  return (
      <>
          {
              peers.length === 1 ?
              <div className='bg-black w-full h-full flex items-center justify-center'>
                <p className='text-3xl text-white text-center'>Looking for peer...</p>
              </div>:
              <div className='w-full h-full relative flex flex-col'>
                  {/* tiles */}
                  <div className='w-full h-[90%] flex flex-1 flex-col md:flex-row px-9 md:px-24 py-12 gap-4'>
                      {
                          peers
                          .map((peer) => (
                              <Peer peer={peer} key={peer.id} />
                          ))
                      }
                  </div>
      
                  {/* footer */}
                  <Footer />
              </div>
          }
        </>
    )
}

export default Peers