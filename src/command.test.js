const command = require('./command');

test('String normalize function', () => {
    expect(command('find: age=17'))
        .toBe('find'); // default

    expect(command('find age=17'))
        .toBe(undefined); // without colon operator

    expect(command(''))
        .toBe(undefined); // blank

    expect(command('find:sds: age=17'))
        .toBe('find'); // more than one colon

    expect(command('--: age=17'))
        .toBe(undefined); // non ascii command
});