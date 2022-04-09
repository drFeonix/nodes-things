// first app
par=22
if (22<=10)
    {
        console.log('Par is big number')
    }
else
    {
        console.log('Par is small number')
    }

console.log(`I am in Node App development`)

//------------------------------------------------------------------//

//second
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-func')
const p1= require('./6-alternative-flavour')
require('./7-mid-granade')

// console.log(p1)


// sayHi('Rahul')
// sayHi('john')
// sayHi(names.john)
// sayHi(names.sujan)

//4-names
//local
const secret='Top Secret'
//globals
const john= 'john and peter'
const sam= 'sam'
const sujan= 'sujanr'

module.exports={john,sam,sujan}

// 5-func
const sayHi = (name)=>{  // the cosnt with function,impt '=>'
    console.log(`hello there ${name}`)
}

module.exports= sayHi

// Some very good module built in are these
// OS-https://nodejs.org/dist/latest-v17.x/docs/api/os.html
// PATH-https://nodejs.org/dist/latest-v17.x/docs/api/path.html
// FS(file system)-https://nodejs.org/dist/latest-v17.x/docs/api/fs.html
// HTTP-https://nodejs.org/dist/latest-v17.x/docs/api/http.html

//-------------------------------------------------
// Altenate-flavour
// diffrent methods to use module

module.exports=['items1', 'items2']

const person={
    name:'bob'
}

module.exports.singlePerson=person

//7-mind granade
// mudules are executed in main file
const num1=10
const num2=15

function addvalues() {
    console.log(`the sum 2 number is ${num1+num2}`)
}

addvalues()

//-------------------------------------------------------------------
// OS Module
// OS is a node module used to provide information about the computer
// operating system. Advantages: It provides functions to interact
// with the operating system. It provides the hostname of the operating
// system and returns the amount of free system memory in bytes.

const os=require('os')// Way to export builtin module

// Info about user

const user = os.userInfo()
console.log(user);

// System Uptime in seconds

console.log(`Tehe system uptime is ${os.uptime()} seconds`);

const currentOS={
    name: os.type(),
    release: os.release(),
    totMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);

//-----------------------------------------------------------------------
// Path module
//PATH Module
// Node. js path module is used for handling and transforming 
// file paths
// The Path module provides a way of working with directories and file paths.

const path=require('path')

console.log(path.sep)

// there are many methods which are useful in the path module
// File System (FS) module
// Syncronous method
const {readFileSync,writeFileSync}= require('fs')

const first = readFileSync('./content/subfolder/first.txt','utf-8')
const second = readFileSync('./content/subfolder/second.txt', 'utf-8')

console.log(first,second);

writeFileSync(
    './content/subfolder/reulst.text',// this will create the resulst.txt file
    `Here is the result : ${first}, ${second}`,
)

// Asynchronous method
// File System (FS) module non Asynchronous

const {readFile,writeFile}= require('fs')

readFile(
    './content/subfolder/first.txt',
    'utf-8',
    (err,result) =>{
        if (err){
            console.log(err)
            return
        }
       
        const first = result
        readFile(
            './content/subfolder/second.txt',
            'utf-8',
            (err,result) =>{
                if (err){
                    console.log(err)
                    return
                }
                
                const second=result
            })
    }
    )
//=--------------------------------------------------------------------
//HTTP Module
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
