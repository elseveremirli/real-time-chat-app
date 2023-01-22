import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Chat = ({socket,room,username}) => {
 
    const [message,setMessage] = useState('')

    const [messageList,setMessageList] = useState([])


    useEffect(()=>{
      socket.on('messageReturn',(data)=>{
        setMessageList(prev => [...prev,data])
      })



    },[socket])




    const sendMessage = async()=>{
      const messages = {
        username:username,
        message:message,
        room:room,
      }

      await socket.emit('message',messages)
      setMessageList(prev => [...prev,messages])
      setMessage('')
    }

    console.log(messageList)


  return (
    <div className=' flex items-center justify-center h-full '>
      <div className='w-1/3 h-[500px] bg-white relative'  >
      <div className='w-full h-16 bg-gray-700 flex items-center p-2  '>
        <div className='w-12 h-12 bg-white rounded-full' ></div>
      </div>


      <div className=' w-full h-[400px] overflow-y-auto  ' >
        {
          messageList ? messageList.map((msg,key) =>(
           
        <div key={key} className={`${username === msg.username ? 'flex justify-end': '' }  `} >

        <div className={`${username === msg.username ? 'w-2/3 h-12 bg-green-600 p-2 text-white text-sm m-2 rounded-xl rounded-br-none ': 'w-2/3 h-12 bg-blue-600 p-2 text-white text-sm m-2 rounded-xl rounded-bl-none '}`} >
            <div>{msg.message}</div>
            <div className=' w-full flex justify-end text-xs ' >{msg.username}</div>
        </div>

        </div>
          ))
          :null
        }
        


      </div>



        <div className=' absolute bottom-0 left-0 w-full ' >
          <input value={message} onChange={e=> setMessage(e.target.value)} className=' w-3/4 h-12 border p-3 outline-none ' type="text" placeholder='message send' />
          <button onClick={sendMessage} className='w-1/4 bg-indigo-600 text-white h-12 hover:opacity-70  ' >SEND</button>
        </div>
      </div>
    </div>
  )
}

export default Chat
