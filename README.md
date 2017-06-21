# mgw-mock-objects
A mock object provider to help build tests for microgateway custom policies

This module is to creating custom javascript policies for the [Strongloop Microgateway](https://github.com/strongloop/microgateway).

# usage

Create a custom policy - [See this end to end tutorial](https://strongloop.com/strongblog/introducing-api-microgateway-programmable-open-source-gateway-apis/). 

Then test it
```
$ npm install mgw-mock-objects -D
```
**Example Test**
```
// Create an instance of your custom policy
var Policy = require('../');
var p = Policy();

// create the mock objects
var mmo = require('mgw-mock-objects');

Set the properties that your policy expects

mmo.flow.proceed = function() {
    //Assert your positive state
}

mmo.flow.fail = function() {
    //Assert your negative state
}

// Invoke the policy
p(mmo.props, mmo.context, mmo.flow);
```