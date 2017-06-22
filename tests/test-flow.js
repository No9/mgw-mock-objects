// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: mgw-mock-objects
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var test = require('tap').test;
var mmo = require('../');

test('test flow objects', (t) => {
    t.plan(6);
    var flow = mmo.flow;
    t.ok(typeof flow.logger.debug === 'function', 'debug is a function');
    t.ok(typeof flow.logger.error === 'function', 'error is a function');
    t.ok(typeof flow.logger.info === 'function', 'info is a function');
    t.ok(typeof flow.logger.warn === 'function', 'warn is a function');
    t.ok(typeof flow.proceed === 'function', 'proceed is a function');
    t.ok(typeof flow.fail === 'function', 'fail is a function');
});