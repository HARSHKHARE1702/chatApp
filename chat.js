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
