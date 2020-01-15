const http = require('http');



http.createServer( (request, response) => {

    const { url, headers, method } = request;
    const body = {};

    console.log(url, headers, method);

    request.on('data', (data) => {
        data.toString().split('&').map( item => {

            let temp = item.split('=');
            let key = temp[0];
            let value = temp[1];
            body[key] = value;

        });

    }).on('end', () => {
        console.log(body);

    }).on('error', (e) => {
        console.log(e);
    });

    response.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});

    response.write(`
        <html><h1>test</h1></html>
    `);

    response.end();

}).listen(8888, () => {
    console.log('Server running at http://localhost:8888/');
});
