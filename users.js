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
