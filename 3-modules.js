// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-func')
const p1= require('./6-alternative-flavour')
require('./7-mid-granade')

// console.log(p1)


 sayHi('Rahul')
 sayHi('john')
 sayHi(names.john)
 sayHi(names.sujan)