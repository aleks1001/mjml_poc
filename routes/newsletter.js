const express = require('express');
const router = express.Router();
const mjml2html = require('mjml');

/* GET users listing. */
router.get('/:name', function (req, res, next) {
    const pName = req.params['name'];
    res.render('newsletter', {title: pName}, (err, html) => {
        if (err) {
            return next(err)
        }
        res.send(mjml2html(html).html);
    })
});

module.exports = router;
