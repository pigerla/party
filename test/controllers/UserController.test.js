/**
 * Created by spy on 15-1-13.
 */

//var request = require('superagent');
//var should = require('should');
//
//describe('api', function(){
//    it('GET /user/hi', function(done){
//        request.get('http://localhost:1337/user/hi', function(err, res){
//            console.log(res.text);
//            var message = JSON.parse(res.text);
//            message.should.have.property('msg','Hello World');
//            done()
//        })
//    })
//});

var FooController = require('../../api/controllers/UserController');
var sinon = require('sinon');
var assert = require('assert');
describe('The FooController', function() {
  describe('when we invoke the index action', function() {
    it('should return hello world message', function() {
      var send = sinon.spy();
      FooController.index(null,{
        'send': send
      });
      assert(send.called);
      assert(send.calledWith('Hello, world!'));
    });
  });
});
