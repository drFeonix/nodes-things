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