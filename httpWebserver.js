import {createServer} from 'http'; 

const port = 8080; 

const app = createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Welcome to http web server</h1>"); 
    res.write("<p>Web dev is fun</p>");
    res.end("bye from the web server");
}); 

app.listen(port,(err)=>{
    if(err) console.log(err); 
    console.log("Web server is connected with port: "+port);
})

