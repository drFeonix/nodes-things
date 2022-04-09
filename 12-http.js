const http=require('http')

const server=http.createServer((req,res)=>{
    
    if(req.url=='/'){
        res.end('Welcome here')
    }
    else if(req.url=='/about'){
        res.end('Welcome to our About page')
    }
    else {res.end(`<h1>Oops!</h1>
    <p>We are working on it</p>
    <a href="/">Back to Home</a>
    `)
    }
})

server.listen(5000)