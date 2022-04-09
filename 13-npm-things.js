// npm -global commands, comes with node
// npm --version => gives us version info

// local dependency - use it only in this particular project 
// npm i <packagename> or npm install <packagename>

// global dependency -  use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac OS)

// package.json - manifest file (stores important info about project/package)
// mannual approach (create package.json in the root, create properties etc)
// npm init (step by step OR press Enter to skip)
// npm init -y (every thing default)

const _ =require('lodash');

const items =[1,[2,[3]]]

const newItems=_.flattenDeep(items)

console.log(items);
console.log(newItems);