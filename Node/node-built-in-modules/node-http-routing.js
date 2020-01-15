const http = require('http');



http.createServer( (request, response) => {

    const { url, headers, method } = request;
    console.log(url, headers, method);

    const body = {};
    request.on('data', (data) => {
        data.toString().split('&').map( item => {

            let temp = item.split('=');
            let key = temp[0];
            let value = temp[1];
            body[key] = value;

        });

    }).on('end', () => {

        console.log(body);

        if(method === 'POST') {

            response.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});

            switch(url){
                case '/':
                    response.write('index');
                break;

                case '/test':
                    response.write('POST');
                break;

                default :
                    response.writeHead(404, {'Content-Type': 'text/plain; charset=UTF-8'});
                    response.write('Page Not Found');
            }

        }

    }).on('error', (e) => {
        console.log(e);
    });


    if(method === 'GET') {

        response.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});

        switch(url){
            case '/':
                response.write('index');
            break;

            case '/test':
                response.write('GET!');
            break;

            default :
                response.writeHead(404, {'Content-Type': 'text/plain; charset=UTF-8'});
                response.write('Page Not Found');
        }

    }

    response.end();

}).listen(8888, () => {
    console.log('Server running at http://localhost:8888/');
});
