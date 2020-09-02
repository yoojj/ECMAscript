# Node File Upload Module

- busboy (https://github.com/mscdex/busboy)
    - express-fileupload
    - [multer](#multer)
- multiparty
- formidable



## multer
: multipart/form-data 처리

```bash
$ npm install multer
```

```js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');

const app = express();
const upload = multer({ dest: './upload/' });

app.use(cors());

app.post('./single-file-upload', upload.single('input-name-value'), async (req, res) => {

    try {

        const file = req.file;

        if( !file ) {
            res.status(400).end();
        } else {
            res.status(204).end()
        }

    } catch(err) {
        res.status(500).send(err);
    }

});


app.post('./multiple-file-upload', upload.array('input-name-value'), async (req, res) => {

    try {

        const files = req.files;

        if( !files ) {
            res.status(400).end();
        } else {
            res.status(204).end()
        }

    } catch(err) {
        res.status(500).send(err);
    }

});


app.post('./multiple-file-upload', upload.array('input-name-value', 5), async (req, res) => {});


const option = upload.fields([
    { name : '' },
    { name : '' },
]);

app.post('./multiple-file-upload', option, async (req, res) => {});
```


속성 | 설명
---|---
dest    | 파일이 저장될 경로
storage | 파일이 저장될 경로, 업로드 제어시 사용  


```js
const upload = multer({
    storage : multer.diskStorage({
        // 파일이 저장될 경로
        destination: (req, file, cb) => {
            cb(null, '/경로');
        },

        // 저장될 파일 명
        filename : (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now());
        }
    }),

    // 메모리에 임시 저장
    storage : multer.memoryStorage()
});
```



[top](#)
