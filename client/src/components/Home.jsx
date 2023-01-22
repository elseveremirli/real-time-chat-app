import React from 'react'

const Home = ({ room,username,setRoom,setUsername,socket,setChatScreen }) => {

    const sendRoom = ()=>{
      socket.emit('room',room)
      setChatScreen(true)
    }

  return (
    <div className='flex  items-center justify-center h-full '>
      <div className='w-1/3 h-[300px] bg-indigo-600  flex  rounded-xl flex-col space-y-4 p-3 '>
        <h1 className='font-bold text-2xl text-center my-4  '>WELCOME TO CHAT</h1>
        <input onChange={e=>setUsername(e.target.value) } value={username} type="text" placeholder='User Name' className=' h-12 rounded-xl p-3 outline-none    ' />
        <input onChange={e=>setRoom(e.target.value) } value={room} type="text" placeholder='Room' className=' h-12 rounded-xl p-3 outline-none    ' />
        <div onClick={sendRoom} className='bg-indigo-900 tracking-wider  text-white cursor-pointer hover:opacity-70 h-12 pt-2 text-xl text-center rounded-xl ' >CHAT!!!</div>
      </div>
    </div>
  )
}

export default Home
