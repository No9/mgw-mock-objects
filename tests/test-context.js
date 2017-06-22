// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: mgw-mock-objects
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var test = require('tap').test;
var mmo = require('../');

test('test context objects', (t) => {
    t.plan(2);
    var ctx = mmo.context;
    ctx.set('holder1', 'val');
    var retval = ctx.get('holder1')
    t.equal('val', retval, 'Test value is stored');
    t.equal(0, Object.keys(ctx.message.headers).length, 'header exists with no values');
});