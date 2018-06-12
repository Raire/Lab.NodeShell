process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd1') {
        process.stdout.write(process.cwd());
    } else {
        process.stdout.write('You Write: ' + cmd);
        process.stdout.write('\nprompt >');
    }
})
