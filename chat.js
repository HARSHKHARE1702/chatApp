const socket = io()
socket.on('countUpdated',(count)=>{
  console.log('The count has been updated!',count)
})
document.queryselector('#increment').addEventListner('click',()=>{
console.log('Clicked')
  socket.emit('increment')
})
