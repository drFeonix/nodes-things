// GLOBALS  - NO WINDOW !!!!

// __dirname  - give path to current directory
// __filename - give file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)
setInterval(() => {
  console.log('hello world')
}, 1000) // here 1000 is in millisecond