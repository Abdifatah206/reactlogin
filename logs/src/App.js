import React, { Component } from 'react';
import './App.css';
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const db = require('/db');
const bodyParser = require("body-parser");

const urlEncodedParser = bodyParser.urlencoded({extended: false});
const express = require('express');
const reactViews = require('express-react-views');

const app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'jsx');

app.engine('jsx', reactViews.createEngine());
app.post("index", urlEncodedParser, function(request, response) {

	if(request.url != "/favicon.ico") {

		if (request.body.regOrLogin=="Login") {

			var  body = request.body;

			connection.query("SELECT * FROM logs WHERE username='"+body.username+"'", function(err, res, fields){

				if(err) {

					response.send('Username and Password is not correct');

				} else {

					if(res.length) {

						bcrypt.compare(body.password, res[0].password, function(err, res) {

							if(res) {

								response.render( "Welcome.js", {name: body.username});

							} else {

								response.send('Password is not correct');

							}

						});

					} else {

						response.send('Username is not correct');

					}

				}

			});

		}

	}

})



app.get('/', function(req, res) {

    // render the page and pass in any flash data if it exists

    res.render('Login.jsx');

});



app.get('/register', function(req, res) {

	res.render('Register.jsx');

});



app.listen(3000);

export default App;
