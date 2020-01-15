const http = require('http');
const fs = require('fs');



http.createServer( (request, response) => {

    fs.readFile('./resource/test.html', (error, fileData) => {

        if(!error){

            response.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
            response.write(fileData);
            response.end();

        }

        console.log(error);

        response.writeHead(500, {'Content-Type': 'text/plain; charset=UTF-8'});
        response.write('error');
        response.end();

    });

}).listen(8888, () => {
    console.log('Server running at http://localhost:8888/');
});
