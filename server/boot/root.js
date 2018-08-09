'use strict';
const express =require('express');
const app=express();
var path = require('path')

module.exports = function (server) {
  server.set('view engine', 'ejs');
  // server.use(express.static(__dirname + '/public'));
  server.use(express.static('public'))
  var router = server.loopback.Router();
  router.get('/', function(req,res,next){
    res.render("pages/index");
  });

   server.use(router);
  module.exports = function(server) {
   var loopback = require('loopback');

}
};
