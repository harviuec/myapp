var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/users', function(req, res) {
	console.log('have come in /users ')
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
		console.log('fetched results')
        if (e) {
            return res.render('error comes!!!');
        }
		
		console.log(docs);
        return res.send(200, docs);
        // res.render('userlist', {
        //     "userlist" : docs
        // });
    });
});

/*
 * POST to adduser.
 */
router.post('/adduser', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
