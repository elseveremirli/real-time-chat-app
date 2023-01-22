import Home from './components/Home'
import Chat from './components/Chat';
import { useState } from 'react';
import io from 'socket.io-client'

const socket = io.connect(`http://localhost:3001`)



function App() {

  const [username,setUsername] = useState('')
  const [room,setRoom] = useState('')
  const [chatScreen,setChatScreen] = useState(false)

  return (
    <div className="App"> 
    {
      chatScreen ?
      <Chat socket={socket} room={room} username={username}  />
      :
      <Home socket={socket} setChatScreen={setChatScreen} username={username} room={room} setUsername={setUsername} setRoom={setRoom} />

    }
    </div>
  );
}

export default App;
