const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){

        res.end("Hello this is our home page kaise ho app log");
    }
   else if(req.url === '/about'){
        res.end("Here is our short history");
    }else{

        res.end(`
        <h1>Opps</h1>
        <p>We cannot seem to find the page you are looking for</p>
        <a href="/">back Home</a>
        `)
    }

})

server.listen(5000)
