/**
 * Created by spy on 15-1-13.
 */

var request = require('superagent')

describe('api', function(){
    it('GET /user/hi', function(){
        request.get('/user/hi', function(res){
            console.log(JSON.stringify(res))
        })
    })
});
