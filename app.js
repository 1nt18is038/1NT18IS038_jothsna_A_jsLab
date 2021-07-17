const express= require('express');
const app=express();
const PORT = 3500;


app.listen(PORT,()=>{
    console.log(`server is up at http://localhost:${PORT}`)
})

let student=[
    {
        id:1,
        name:"Josh",
       usn:"1NT18IS038"
    },
    {
        id:2,
        name:"DEEPTI",
       usn:"1NT18IS051"
    },
    {
        id:3,
        name:"AISH",
       usn:"1NT18IS017"
    },
    {
        id:4,
        name:"monika",
       usn:"1NT18IS094"
    }
]
//GET method
app.get('/',(req,res)=>{
  //2 imp things to do
  //we have to check for the status
  //i have to send the response based on status
  res.status(200).send(
      `<h2>APIs class</h2>`
  )   
})

app.get('/api/ise/student',(req,res)=>{
  res.status(200).send(student)
})
//POST method
//app.port()
//PUT method
////app.put()
//DELETE method
//app.delete()

//fetch("http://localhost:3500/api/ise/student").then()