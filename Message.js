const generateMessage = (text) =>{
  return{
  text,
    createdAt: new Date().getTime()
     }
}
const generateLocationMessage=(url)=>{
return{
  url,
  createdAt:new Date().getTime()
  }
}
module.exports={
generateMessage,
generateLocationMessage
}
}
const generateMessage=(username,text)=>{
  return{
    username,
    text,
    createadAt:new Date().getTime()
  }
}
