import express from 'express'; 
import _ from 'underscore';
import morgan from 'morgan';

const app = express(); 

const port = 8080; 

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
res.send("<h1>Welcome to express!!</h1>");
}); 

app.get("/num",(req,res)=>{
    res.send("A random number generated from this route is: "+_.random(1,100));
});

app.get("/student",(req,res)=>{
    res.send("Hello, "+req.query.name+" welcome to web dev");
});

app.post("/student",(req,res)=>{
    res.send("Hello, "+req.body.name+" welcome to web dev");
});

app.get("/student/:name",(req,res)=>{
    res.send("Hello, "+req.params.name+" welcome to web dev");
});

app.listen(port,()=>{
    console.log("server is listening at port: "+port);
})