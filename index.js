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
            "headers" : {}
        }
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
        },
        fail : function() {

        }
   };

