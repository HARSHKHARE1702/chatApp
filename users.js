const users = []
// addUser, removeUser, getUser, getUserinRoom

const addUser = ({id,username,room }) =>{
// Clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()
// Validate the data
  if (!username || !room){
    return{
    error: 'Username and room are required'
    }
  }
// Check for existing User
  const existingUser = users.find((user)=>{
  return user.room === room && user.username === username
  })
// Validate Username
  if(existingUser) {
  return{
  error:'Username is in Use'
  }
  }
//store User
  const user = {id, username, room}
  users.push(user)
  return { user}
}
const removeUser = (id)=>{
const index = users.findIndex((user))=> user.id===id){
if(index !== -1) {
 return  users.splice(index,1)[0]
}
}
const getUser = (id) =>{
  return users.find((user)=> user.id === id)
}
const getUserInRoom =(room) =>{
  return users.filter((user) =>user.room===room{
    
}  
addUser({
  id:22
  username:'Andrew',
  room:'South Philly'
})
console.log(users)
addUser({
  id:42
  username:'Mike',
  room:'South Philly'
})

const res = addUser({
  id:33,
  username:''
  room: ''
})
console.log(res)
const reomovedUser = removedUser(22)
console.log(removedUser)
console.log(user)

const user = getUser(421)
console.log(user)


