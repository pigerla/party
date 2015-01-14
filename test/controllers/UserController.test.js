/**
 * Created by spy on 15-1-13.
 */

var request = require('superagent');
var should = require('should');

describe('api', function(){
    it('GET /user/hi', function(done){
        request.get('http://localhost:1337/user/hi', function(err, res){
            console.log(res.text);
            var message = JSON.parse(res.text);
            message.should.have.property('msg','Hello World');
            done()
        })
    })
});
