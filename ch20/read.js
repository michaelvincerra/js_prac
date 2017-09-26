
const fs = require('fs');
const path = require('path');


fs.readFile(path.join(__dirname + 'hello.txt'), function(err, data){
}
    'hello from Node', function(err){
    if(err) return console.log('Error reading file.');
    console.log('Read file contents:');
    console.log(data);
    });


// Revised with UTF-8 encoding


const fs = require('fs');
const path = require('path');

// Adds synchronous 'Sync'

fs.readFileSync(path.join(__dirname + 'hello.txt'),
    {encoding: 'utf8'}, function(err,data) {
    if(err) return console.log('Error reading file.');
    console.log('Read file contents:');
    console.log(data);
    });


