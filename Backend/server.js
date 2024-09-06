import express from "express";


const app = express()

app.use(express.json());


app.get("/apii", (req, res)=>{
    res.json([{message:"Hello from asgard" ,starlight: "this is thor"},{message1:"Hello from earth" ,starlight: "this is ironman"}])
    
    })

app.post("/post/:reg",(req,res)=>{
    const param = req.params.reg
    const query = req.query.name
    const body = req.body.gender
    const data = `request from front end  ,param :${param},query :${query} ,gender ${gender}`

    res.status(200).json ({message: "successfull",data : data})



})
    
app.listen(8000, ()=>{
    console.log("Server is Running")
})

