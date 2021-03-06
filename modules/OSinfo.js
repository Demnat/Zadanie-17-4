var os = require('os');
var time = require('./timeFormat');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', time.printTime(uptime.toFixed(0)));
    console.log(uptime.toFixed(0));
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    console.log('test time: ~', time.printTime(90005));
}

exports.print = getOSinfo;