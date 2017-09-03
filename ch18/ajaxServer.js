const http = require('http');
const server = http.createServer(function(req, res) { res.setHeader('Content-Type', 'application/json'); res.setHeader('Access-Control-Allow-Origin', '*'); res.end(JSON.stringify({
            platform: process.platform,
            nodeVersion: process.version,
            uptime: Math.round(process.uptime()),
})); });
const port = 7070; server.listen(port, function() {
console.log(`Ajax server started on port ${port}`); });

req.addEventListener('load', function() {
// this.responseText is a string containing JSON; we use // JSON.parse to convert it to an object
const data = JSON.parse(this.responseText);
// In this example, we only want to replace text within the <div> // that has class "serverInfo"
const serverInfo = document.querySelector('.serverInfo');
// Iterate over the keys in the object returned from the server // ("platform", "nodeVersion", and "uptime"): Object.keys(data).forEach(p => {
            // Find elements to replace for this property (if any)
const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"]`);
            // replace all elements with the value returned from the server
for(let r of replacements) { r.textContent = data[p];

} });
});


setInterval(refreshServerInfo, 200);