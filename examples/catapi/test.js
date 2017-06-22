// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: mgw-mock-objects
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var assert = require('assert');
// Create an instance of your custom policy
var Policy = require('./');
var p = Policy();

// create the mock objects
var mmo = require('mgw-mock-objects');

// Set up your test response
mmo.context.message.body = [{
    "ssn" : "deleteme"
}];

mmo.flow.proceed = function() {
    //Assert your positive state
    assert.equal(0, Object.keys(mmo.context.message.body[0]).length, 'ssn is deleted')
}

// Invoke the policy
p(mmo.props, mmo.context, mmo.flow);

// Lets say the service is badly behaved
// and returns a single object instead of an array
mmo.context.message.body = {
    "ssn" : "deleteme"
};

// Set up the fail flow handler
mmo.flow.fail = function() {
    //Assert that it's called state
    assert.ok(1, 'Expected negative test fail')
}

// we need to override the proceed as it is called by the implementation.
// See the mgw-retry example for how to use properties to control this.
// https://github.com/no9/mgw-retry
mmo.flow.proceed = function() {
}
p(mmo.props, mmo.context, mmo.flow);
