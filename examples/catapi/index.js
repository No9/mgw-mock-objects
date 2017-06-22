'use strict';

let BAD_KEYS = ['ssn','birthday','salary'];

module.exports = function (config) {

  return function (props, context, flow) {

    // this function is run once per transaction assuming
    // the policy is executed as part of an Assembly
    try {
        context.message.body.forEach( (ob) => {
            //loop over BAD_KEYS and delete
                BAD_KEYS.forEach( (key) => {
                    delete ob[key];
                });
        });
    } catch (ex) {
            // Fail the flow if the body is an unexpected format
            flow.fail();
    }
    flow.proceed();
  }
}