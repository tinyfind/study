const net = require("net")

const client = new net.Socket()

client.connect(5000, "localhost", ()=>{
    client.write("Hi好")
})

client.on("data",(data)=>{
    console.log(data.toString())
})