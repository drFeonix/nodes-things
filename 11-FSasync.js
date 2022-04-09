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
