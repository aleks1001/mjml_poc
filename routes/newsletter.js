const express = require('express');
const router = express.Router();
const mjml2html = require('mjml');
const Handlebars = require('handlebars');

const template = Handlebars.compile(`<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-image width="100px" src="/assets/img/logo-small.png"></mj-image>
        <mj-divider border-color="#F45E43"></mj-divider>
        <mj-text font-size="20px" color="#F45E43" font-family="helvetica">{{name}}</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`);
    
/* GET users listing. */
router.get('/:name', function (req, res, next) {
    const p = req.params['name'];
    const result = template({ name: p})
    res.send(mjml2html(result).html);
});

module.exports = router;
