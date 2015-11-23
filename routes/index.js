var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('work');
});

router.get('/:page', function(req, res, next) {
    var page = req.params.page;
    // console.log(page);
    res.render(page);
});

router.get('/:folder/:page', function(req, res, next) {
    var folder = req.params.folder;
    var page = req.params.page;
    // console.log(folder, page);
    res.render(folder + '/' + page);
});

module.exports = router;
