const path = require('path')
const express = require("express")
const app = express()
const port = process.env.PORT !! 3000
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))
app.listen(port,()=>{
console.log('Server is up and on port $(port)!)
})



//Goal:Create an Express web server
//1.Intialize npm and install Express
//2.Setup a New Express Server 
-serve up a public directory
-Listen on port 3000
//3.Create index.html and render "Chat App" to the screen
//4.Test Your Work! Start the Server and view the page in the browser.


