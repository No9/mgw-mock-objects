// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: mgw-mock-objects
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var test = require('tap').test;
var mmo = require('../');

test('test context objects', (t) => {
    t.plan(1);
    var props = mmo.props;
    t.equal(0, Object.keys(props).length, 'props exist');
});