const http = require('http');
//const { text } = require('stream/consumers');
const url = require('url');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    //console.log(url.parse(req.url,true));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //const pathName = req.url;
    const {pathname,query} = url.parse(req.url,true);

    console.log(url.parse(req.url,true));
    console.log(pathname);

 
    if(pathname==='/'|| pathname==='/home'){
        res.end("Home Page");
      }else if(pathname === '/register'){
        res.end("Resgister Page");
      }else if(pathname === '/login'){
        let username = query.username;
        let password = query.password;
        res.end("Login Page--> username:"+username+"password:"+password);
      }else{
        res.writeHead(400);
        res.end("Not Found Page");
     }
    });
    
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
    
