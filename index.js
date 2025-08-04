const path = require('path')
const http = require('http')
const express = require("express")
const app = express()
const server = http.createServer(app)
const port = process.env.PORT !! 3000
const publicDirectoryPath = path.join(__dirname,'../public')
const socketio = require('Socket.io')
const io = socketio(server)
const Filter = require('bad-words')
const { addUser,getUser,removeUser,getUsersInRooms} = require('./utils/')
require('')
const {generateMessage,generateLocationMessage} = require('./utils/messages')

app.use(express.static(publicDirectoryPath))
let count = 0
io.on('connection',(socket)=>{
console.log('New websocket connection')
  socket.emit('countUpdated',count)
  socket.broadcast.emit('message','A new user has Joined!')
  socket.on('Increment',()=>{
    count++
    socket.emit('countUpdated',count)
    socket.on('Increment',()=>{
      count++
      io.emit('countUpdated',count)
})
    socket.on('SendLocation',(coords)=>{
      io.emit('message','https://google.com/maps?q=$(coords.latitude),(coords.longitude)')
    })
    
    socket.on('disconnect',()=>{
    const user = removeUser(socket.id)
      if(user){
      io.to(user.room).emit('message',generateMessage('$(User.username) has left!')
      }
    })
    })
    }
server.listen(port,()=>{
console.log('Server is up and on port $(port)!)
})

socket.emit('message',{
  text:'Welcome!'
  createdAt:new Date().getTime()
})
  socket.emit('message',generateMessage('welcome'))
    socket.broadcast.emit('message','A new user has Joined')
socket.on('join',({username,room},callback)=>{
  const {error,user}=addUser({id:socket.id,username,room})
  if(error){
  return callback(error)
  }
socket.join(user.room)
  socket.emit('message',generateMessage('Welcome!'))
  socket.broadcast.to(user.room).emit('message',generateMessage('${user.username} has joined!')}
          callback()
})
      socket.on('message',(message)=>{
        console.log(message)
          const html = mustache.render(messageTemplate,{
            message: message.text,
            CreatedAt: moment(message.createdAt).format()
          })
        //Goal:Send Messages to correct room
        //1.Use getUser Inside "SendMessage" event Handler to get User Data
        //2.Emit the Message to their current room
        //3.Test Your Work
        //4.Repeat for "SendLocation"

  socket.on("SendMessage",(message,callback)=>{
    const filter = new Filter()
    if(filter.toProfane(message)){
      return callback("Profanity is not allowed")
    }
    io.to(user.room).emit('message',generateMessage(message))
      callback()
  })
    socket.on('sendLocation',(coords,callback)=>{
      const user = getUser(socket.id)
      io.to(user.room).emit('locationMessage',generateLocationMessage("")
      callback()
    })
  socket.on('message',(message)=>{
    console.log(message)
  const html=Mustache.render(locationMessageTemplate,{
    username:message.username,
socket.on('disconnect',()=>{
  const user = removeUser(socket.id)
    if(User){
      io.to(user.room).emit('message',generateMessage('admin','$(user.username) has left!')
                            }
})
  if(error){
    return callback(error)
  }
    socket.join(user.room)
      socket.emit('message',generateMessage('Admin','Welcome!')
      socket.broadcast.to(user.name).emit('message',generateMessage('Admin',$(user.username) has Joined')
      io.to(user.room).emit('roomData',{
        room:user.room,
        users:getUsersInRoom(user.room)
        })
        if(user){
          io.to(user.room).emit('message',generateMessage('Admin','$(user.username) has left')
          io.to(user.room).emit('roomData',{
            room:user.room,
            users:getUsersInRoom(user.room)
          })
        }
  })
      })
              

//Goal:Create an Express web server
//1.Intialize npm and install Express
//2.Setup a New Express Server 
-serve up a public directory
-Listen on port 3000
//3.Create index.html and render "Chat App" to the screen
//4.Test Your Work! Start the Server and view the page in the browser.
//to install socket.io we need to run command Npm i socket.io
//above express server supports websockets
//to start your chatapp you need to run Npm run dev
