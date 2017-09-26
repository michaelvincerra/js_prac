const fs = require('fs');

fs.writeFile('hello.txt', 'hello from Node', function(err){
    if(err) return console.log('Error writing to file.');
    });


// This will create a file in the directory you're in when you run: write.js
// Whenever you invoke a Node application, it inherits its current working directory from where you run it

// Revised version... to always create hello.txt in /home/<michaelevan>/fs

const fs = require('fs');

fs.writeFile(__dirname + '/hello.txt',
    'hello from Node', function(err){
    if(err) return console.log('Error writing to file.');
    });


// Revise  to be 'platform agnostic'...

const fs = require('fs');
const path = require('path');

// Add synchronous 'Sync'...

fs.writeFileSync(path.join(__dirname + '/hello.txt'),
    'hello from Node', function(err){
    if(err) return console.log('Error writing to file.');
    });


// Next see 'read.js' file in this directory




// Wrap statement in try/catch blocks,


try{
fs.writeFileSync(path.join(__dirname + 'hello.txt'), 'hello from Node');
} catch(err) {
console.log('Error writing to file.');
}

