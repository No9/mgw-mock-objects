var test = require('tap').test;
var mmo = require('../');

test('test context objects', (t) => {
    t.plan(1);
    var props = mmo.props;
    t.equal(0, Object.keys(props).length, 'props exist');
});