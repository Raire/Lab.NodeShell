const exportedPwd = require('./pwd');
const exportedLs = require('./ls');

process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd1') {
        exportedPWD.pwd1();
    } else if (cmd === 'ls1') {
        exportedLs.ls();
    } else {
        process.stdout.write('You Wrote: ' + cmd);
        process.stdout.write('\nprompt >');
    }
})
