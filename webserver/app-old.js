const http = require('http');

http.createServer( (request, response) => {

    response.write('asdasd');
    response.end();

})
.listen(8080);

console.log("8080");