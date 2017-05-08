	var express = require('express');
	var app = express();
	//var mongojs = require('mongojs');
	//var db = mongojs('contactlist',['contactlist,users']);
	var ObjectID = require('mongodb').ObjectID;
	var MongoClient = require('mongodb').MongoClient;
	var bodyParser = require('body-parser');
	app.use(express.static(__dirname + "/public"))
	app.use(bodyParser.json());
	app.use(function (req, res, next) {
		// Website you wish to allow to connect
		res.setHeader('Access-Control-Allow-Origin', '*');
		// Request methods you wish to allow
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		// Request headers you wish to allow
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		// Set to true if you need the website to include cookies in the requests sent
		// to the API (e.g. in case you use sessions)
		res.setHeader('Access-Control-Allow-Credentials', true);
		// Pass to next layer of middleware
		next();
	});

	//var url = 'mongodb://localhost:27017/headnode';
	//mongodb://raj9701:raj970123@ds155727.mlab.com:55727/contactlists
	var url='mongodb://headnode:hn1993@ds155130.mlab.com:55130/headnode'
	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	console.log("Connected to Database");
	
	//add the class details in db
	app.post('/stureg',function(req,res){
			console.log("i get GET add student request");
			console.log(req.body);
			db.collection('student').insertOne(req.body,function(err,docs){
				//console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	app.post('/comreg',function(req,res){
			console.log("i get GET add Company request");
			console.log(req.body);
			db.collection('company').insertOne(req.body,function(err,docs){
				//console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	app.post('/studentlogin',function(req,res){
		console.log("I get student login request");
		console.log(req.body);
		db.collection('student').find({username:req.body.username,password:req.body.password}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log('working');
			res.json(docs);
		});
	});
	
	app.post('/studentloginfb',function(req,res){
		console.log("I get student login request");
		console.log(req);
		db.collection('student').find({username:req.body.email}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log('working');
			res.json(docs);
		});
	});
	
	app.post('/companylogin',function(req,res){
		console.log("I get student login request");
		console.log(req.body);
		db.collection('company').find({cmpemail:req.body.cmpemail,cmppassword:req.body.cmppassword}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log('working');
			res.json(docs);
		});
	});
	
		app.post('/companyloginfb',function(req,res){
		console.log("I get student login request");
		console.log(req.body);
		db.collection('company').find({userid:req.body}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log('working');
			res.json(docs);
		});
	});
	
	app.post('/clgreg',function(req,res){
			console.log("i get GET add College request");
			console.log(req.body);
			db.collection('college').insertOne(req.body,function(err,docs){
				//console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	app.post('/clglogin',function(req,res){
		console.log("I get college login request");
		console.log(req.body);
		db.collection('college').find({clgemail:req.body.clgemail,clgpassword:req.body.clgpassword}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log('working');
			res.json(docs);
		});
	});
	
	//find all company data from student page
	app.post('/stucmp',function(req,res){
			console.log("i get student company request");
			//console.log(req.body);
			db.collection('company').find().toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	app.post('/stucmpdomain',function(req,res){
			console.log("i get student company request");
			console.log(req.body.value);
			db.collection('company').find({jobdomain:{$in:[req.body.value]}}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	app.post('/storecmp',function(req,res){
			console.log("i get store company request");
			console.log(req.body);
			db.collection('studentcompany').insertOne(req.body,function(err,docs){
				//console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	//find all student from company page.
	app.post('/cmpstu',function(req,res){
			console.log("i get company student request");
			console.log(req.body.username);
			db.collection('studentcompany').find({cmpemail:req.body.username}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/clgstu',function(req,res){
			console.log("i get clg student request");
			console.log(req.body.clgname);
			db.collection('student').find({$or: [{'education.mclg':req.body.clgname},{'education.gclg':req.body.clgname}]}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/clgname',function(req,res){
			console.log("i get clg name request");
			console.log(req.body.username);
			db.collection('college').find({clgemail:req.body.username}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/cmpstustream',function(req,res){
			console.log("i get company student request");
			console.log(req.body.value);
			db.collection('studentcompany').find({
				$and:[
						{cmpemail:req.body.username},
						{$or: [{'gdeg':req.body.value},{'mdeg':req.body.value}]}
					 ]
				}).toArray(function(err,docs){
			
						//	db.collection('student').find({$or:[{education:{gdeg:req.body.value}},{education:{mdeg:req.body.value}}]}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/clgstustream',function(req,res){
			console.log("i get college student request");
			console.log(req.body.value);
			console.log(req.body.clgname);
			//console.log(req.body);
			db.collection('student').find({
				$and:[
						{$or: [{'education.gclg':req.body.clgname},{'education.mclg':req.body.clgname}]},
						{$or: [{'education.mdeg':req.body.value},{'education.gdeg':req.body.value}]}
					 ]
			
			
				}).toArray(function(err,docs){
			
						//	db.collection('student').find({$or:[{education:{gdeg:req.body.value}},{education:{mdeg:req.body.value}}]}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/cmpstukeyskill',function(req,res){
			console.log("i get company student request");
			console.log(req.body.keyskill);
			db.collection('studentcompany').find({
				$and:[
					  {cmpemail:req.body.username},
					  {keyskill:{$in:[req.body.keyskill]}}
					 ]
				
			}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/clgstukeyskill',function(req,res){
			console.log("i get college student request");
			console.log(req.body.keyskill);
			db.collection('student').find({
				$and:[
					  {$or: [{'education.mclg':req.body.clgname},{'education.gclg':req.body.clgname}]},
					  {keyskill:{$in:[req.body.keyskill]}}
					 ]
				
			}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/cmpstuboth',function(req,res){
			console.log("i get company student request");
			console.log(req.body.value);
			console.log(req.body.keyskill);
			db.collection('studentcompany').find({
				$and:[
					  {cmpemail:req.body.username},
					  {keyskill:{$in:[req.body.keyskill]}},
					  {$or: [{'gdeg':req.body.value},{'mdeg':req.body.value}]}
					 ]
			}).toArray(function(err,docs){
					console.log(docs);
					res.json(docs);
			});
	});
	
	app.post('/clgwise',function(req,res){
			db.collection('studentcompany').find({
				$and:[
					  {cmpemail:req.body.username},
					  {$or: [{'mclg':req.body.clgname},{'gclg':req.body.clgname}]}
					 ]
			}).toArray(function(err,docs){
					console.log(docs);
					res.json(docs);
			});
	});
	
	app.post('/clgstuboth',function(req,res){
			console.log("i get company student request");
			console.log(req.body.value);
			console.log(req.body.keyskill);
			db.collection('student').find({
				$and:[
					  {$or: [{'education.mclg':req.body.clgname},{'education.gclg':req.body.clgname}]},
					  {keyskill:{$in:[req.body.keyskill]}},
					  {$or: [{'education.mdeg':req.body.value},{'education.gdeg':req.body.value}]}
					 ]
			}).toArray(function(err,docs){
					console.log(docs);
					res.json(docs);
			});
	});
	
	app.post('/clgname',function(req,res){
			console.log("i get college name request");
			console.log(req.body.clgemail);
			db.collection('college').find({clgemail:req.body.clgemail}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/studata',function(req,res){
			console.log("i get find student request");
			console.log(req.body.username);
			db.collection('student').find({email:req.body.username}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/careg',function(req,res){
			console.log("i get GET add student ambassador request");
			console.log(req.body);
			db.collection('ambassador').insertOne(req.body,function(err,docs){
				//console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	app.post('/stupass',function(req,res){
			console.log("i get student password request");
			console.log(req.body.email);
			db.collection('student').find({email:req.body.email}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/stuevent',function(req,res){
			console.log("i get event request");
			db.collection('event').find({}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/cmpevent',function(req,res){
			console.log("i get event request");
			console.log(req.body.username);
			db.collection('event').find({cmpemail:req.body.username}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/appcmp',function(req,res){
		console.log("I get apply request");
		console.log(req.body.email);
		console.log(req.body.cmpemail);
		db.collection('studentcompany').find({email:req.body.email,cmpemail:req.body.cmpemail}).toArray(function(err,docs){
			console.log(docs);
			console.log('working');
			res.json(docs);
		});
	});
	
		app.post('/searchstudent',function(req,res){
		console.log("I get search request");
		console.log(req.body.email);
		db.collection('student').find({$or: [{email:req.body.email},{phone:req.body.phone}]}).toArray(function(err,docs){
			console.log(docs);
			console.log('working');
			res.json(docs);
		});
	});
	

});
var port = 8000 ;
app.listen(port);
console.log("applistining on port",+port);