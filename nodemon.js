const http = require('node:http');
const { Z_ERRNO } = require('node:zlib');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let name = "Achiraya Kansathon"
  let phone = "09363862706"
  let text = "";
  
  for (let i = 1; i < 9; i++){
    text +="<h2>"+i+"Name: "+ name +"</h2><br>"+"<h6>"+i+"Name: "+ name +"</h6><br>"
  }

  
  res.write(text);
  res.write("<h1>Phone number is " + phone + "or" + readphonenumber(phone) + "</h1>")
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function readphonenumber(inputNum){
    var num = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    txt = "";
    for (i = 0; i < inputNum.length; i++) {
        txt = txt+ " " + num[parseInt(inputNum[i])]; 
    };
    return txt;

}
