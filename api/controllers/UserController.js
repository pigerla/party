/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  hi: function (req, res) {
    return res.json(200, {
        code: 0,
        msg:"Hello World"
    });
  },

  index: function(req, res){
    res.send('Hello, world!');
  }
};

