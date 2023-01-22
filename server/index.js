import  express  from "express";
import cors from "cors";
import http from "http"
import { Server } from 'socket.io'

const app = express();

app.use(cors());
const server = http.createServer(app);

const io = new Server(server,
    {
        cors:{
            origin: 'http://localhost:3000',
            methods:['GET', 'POST']
        }
    }    
);

io.on('connection',(socket)=>{
    console.log(socket.id)
    socket.on('room',(room)=>{
        socket.join(room)
    })


    socket.on('message',(message)=>{
        socket.to(message.room).emit("messageReturn",message)
    })
})


const PORT = 3001;

server.listen(PORT,()=>{
    console.log(`Runung Server https://localhost:${PORT}`);
});


