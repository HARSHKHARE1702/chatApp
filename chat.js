const socket = io()
socket.on('message',(message)=>{
console.log(message)
})

document.querySelector('#message-form').addEventListener('submit',(e)=>{
  e.preventDefault()
  const message = document.querySelector('input').value
  socket.email('sendMessage',message)
  socket.on('sendMessage',(message)=>{
    io.emit('message',message)
    const message = e.target.elements.message.value
    socket.email('sendMessage',message)
})

socket.on('countUpdated',(count)=>{
  console.log('The count has been updated!',count)
})
document.queryselector('#increment').addEventListner('click',()=>{
console.log('Clicked')
  socket.emit('increment')
})
  document.querySelector('#send-location').addEventListner('click',()=>{
if(!navigator.geolocation){
return alert('Geolocation is not supported by your browser.')
}
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
      socket.emit('sendLocation',{
        latitude:position.cords.latitude,
        longitude:position.coords.longitude,
      }
  })
  })
