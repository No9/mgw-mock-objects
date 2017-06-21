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