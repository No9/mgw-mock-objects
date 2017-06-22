// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: mgw-mock-objects
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var assert = require('assert');

module.exports.props = {};

var valueholder = {};
module.exports.context = { 
        "get" : function(name) {
            return valueholder[name]
        },
        "set" : function(name, value) {
            valueholder[name] = value;
        },
        "message" : {
            "headers" : {},
            "body" : {}
        },
};

module.exports.flow = {
        "logger": { 
            "debug" : function() {},
            "info" : function(info, args) {
              var statement = "INFO: " + info;
              console.log(statement, args);
            },
            "error" : function(err, args) {
               var statement = "ERROR: " + err;
               console.log(statement, args);
            },
            "warn" : function(warn, args) {
               var statement = "WARN: " + warn;
               console.log(statement, args);
            }
        },
        proceed : function() {
            assert.fail('proceed needs to be overridden');
        },
        fail : function() {
            assert.fail('fail needs to be overridden');
        }
   };

