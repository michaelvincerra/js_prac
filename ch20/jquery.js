"use strict";


// Write JS on the server
// Run the same code on the server and client

// Modules are a way to package and namespace code.
// Namespacing is a way to prevent collisions.

// p. 284
// Customizing Modules with Function Modules.

const debug = require('debug')('main');  // Note that we immediately call the function that the module returns.

debug("starting");  // will log "main string + 0ms" if debugging is enabled.


let lastMessage;

module.exports = function(prefix){
    return function(message){
    const now = Date.now();
    const sinceLastMessage = now - )lastMessage || now);
    console.log('${prefix} ${message} +${sinceLastMessage}ms');
    lastMessage = now;
    }
  }




// PROCESS, p. 289
// The process object gives us access to an array containing the command-line arguments passed to the program
const fs = require('fs');
fs.readdir('data', function(err, files) { if(err) {
    console.error("Fatal error: couldn't read data directory.");
    process.exit(1);
    }


const txtFiles = files.filter(f => /\.txt$/i.test(f));
    if(txtFiles.length === 0) {
    console.log("No .txt files to process.");
    process.exit(0);
    }
        // process .txt files...
});



// OPERATING SYSTEM, p. 291

const os = require('os');

    console.log("Hostname: " + os.hostname());
    console.log("OS type: " + os.type());
    console.log("OS platform: " + os.platform());
    console.log("OS release: " + os.release());
    console.log("OS uptime: " +
(os.uptime()/60/60/24).toFixed(1) + " days"); console.log("CPU architecture: " + os.arch()); console.log("Number of CPUs: " + os.cpus().length); // 1 console.log("Total memory: " +
(os.totalmem()/1e6).toFixed(1) + " MB"); // 1042.3 MB console.log("Free memory: " +
(os.freemem()/1e6).toFixed(1) + " MB"); //


// CHILD PROCESSES

// Child process exposes 3 primary functions: exec, execFile, fork

const exec = require('child_process').exec;

exec('dir', function(err, stdout, stderr){
    if(err) return console.error('Error executing "dir"');
    stdout = stdout.toString();
    console.log(stdout);
    stderr =stderr.toString();
    if(stderr !== ''){
    console.error('error:');
    console.error(stderr);
    }
    });


// STREAMS
// A stream is an object that deals with data in a stream
//  NOTE: Both of the below functions can exist in the same file.

// create a WRITE stream

const ws = fs.createWriteStream('stream.txt', {encoding: 'utf8'});
ws.write('line 1\n');
ws.write('line 2\n');
ws.end();


// create a READ stream

const rs = fs.createReadStream('stream.txt', {encoding: 'utf8'});
rs.on('data', function(data){
console.log('>> data: ' + data.replace('\n', '\\n'));
});
rs.on('end', function(data){
console.log('>> end');
});

.write('line 1\n');
ws.write('line 2\n');
ws.end();


// PIPING a read stream to a write stream

const rs. = fs.createReadStream('stream.txt');
const ws = fs.createWriteStream('stream_copy.txt');
rs.pipe(ws);


// Web Servers
// callback function you must provide
// Incoming message object = req
// and a Server request object = res

const http = require('http');
const server = http.createServer(function(req, res)
{ console.log(`${req.method} ${req.url}`); res.end('Hello world!');
});

const port = 8080; server.listen(port, function() {
// you can pass a callback to listen that lets you know
// the server has started
console.log(`server startd on port ${port}`);
});


const server = http.createServer(function(req, res) { if(req.method === 'GET' && req.url === '/favicon.ico') {
const fs = require('fs'); fs.createReadStream('favicon.ico');
fs.pipe(res); // this replaces the call to 'end'
}else{
console.log(`${req.method} ${req.url}`); res.end('Hello world!');
} });



