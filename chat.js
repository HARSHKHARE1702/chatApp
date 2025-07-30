const socket = io()
//element
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages-template').innerHTML


//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

socket.on('locationMessage',(url)=>{
  



socket.on('message',(message)=>{
console.log(message)
  const html = Mustache.render(MessageTemplate,{
    message:message.text,
    createdAt:moment(message.createdAt).format('h:mn a')
  })
  $messages.insertAdjacentHTML('beforend',html)
  })

document.querySelector('#message-form').addEventListener('submit',(e)=>{
  e.preventDefault()
  const message = document.querySelector('input').value
  socket.email('sendMessage',message)
  socket.on('sendMessage',(message,callback)=>{
    io.emit('message',message)
    const message = e.target.elements.message.value
    socket.email('sendMessage',message)
})
$messageForm.addEventListner('submit',(e)=>{
e.preventDefault()
  $messageFormButton.setAttribute('disabled','disabled')
  const message=e.target.elements.message.value
  socket.emit('sendMessage',message,(error)=>{
    $messageFormButton.removeAttribute('disabled')
    $messageFormInput.value=''
    $messageFormInput.focus()
if(error){
  return console.log(error)
  }
    console.log('Message Delivered')
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
      },()=>{
        sendLocationButton.removeAttribute()
        console.log('Location shared!')
      })
  })
  })
