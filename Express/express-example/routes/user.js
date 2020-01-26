const express = require('express');
const router = express.Router();



router.get('/:id', (req, res, next) => {
    res.send('get');
});

router.post('/:id', (req, res, next) => {
    res.send('post');
});

router.put('/:id', (req, res, next) => {
    res.send('put');
});

router.delete('/:id', (req, res, next) => {
    res.send('delete');
});



module.exports = router;
