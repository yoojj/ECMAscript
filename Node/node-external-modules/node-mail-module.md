# node mail module

- nodemailer



## nodemailer

```bash
$ npm install nodemailer
```

```js
const mail = require('nodemailer');


let transport = nodemailer.createTransport(
    service : 'Gmail',
    auth : {
        user : '',
        pass : '',
    },
    host : 'smtp.gmail.com',
    port : 465
);


const message = {
    from : '',
    to : '',
    cc : '',
    bcc : '',
    subject : '',
    text : '',
    html : '<html></html>',
    attachments : [{
        filename : '',
        path : '',
    }],
};


transport.sendMail(message, (err, info) => {

    transport.close();

    if (err) {
        console.log(err);
    }

    console.log(info);
});
```
