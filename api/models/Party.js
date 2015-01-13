/**
* Party.js
*
* @description :: A model of party
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    title: {
      type: 'string',
      required: true,
      defaultsTo: ''
    },

    describe: {
      type: 'string',
      defaultsTo: ''
    },

    pTime: {
      type: 'string',
      required: true
    },

    location: {
      type: 'string',
      required: true
    },

    creator: {
      uid: {
        type: 'string'
      },
      username: {
        type: 'string'
      }
    },

    partner: {
      type: 'array'
    },

    createdAt: {
      type: "datetime"
    },

    updatedAt: {
      type: "datetime"
    }

  }
};

