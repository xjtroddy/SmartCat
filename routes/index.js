var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Main' });
});

router.get('/reg', function(req, res) {
    res.render('reg', { title: 'Register' });
});

router.post('/reg', function(req, res) {
	console.log("reg");
});

router.get('/login', function(req, res) {
    res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res) {

});

router.get('/post', function(req, res) {
    res.render('post', { title: 'Publish' });
})

router.post('/post', function(req, res) {

});

router.get('/logout', function(req, res) {

});
module.exports = router;
