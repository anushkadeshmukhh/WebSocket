import express from "express";
import {WebSocketServer} from "ws";

const app=express();
const port=8080;

const server= app.listen(port,()=>{
    console.log("sever is listening...");
});

const wss=new WebSocketServer({server}); 
//if we want other port we write it as, port:3000

wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        console.log("data from client : %s ",data);
        ws.send("thankss");
    });
});