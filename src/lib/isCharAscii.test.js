const isCharAscii = require('./isCharAscii');

test('String normalize function', () => {
    expect(isCharAscii('N'))
        .toBe(true); // uppercase letter

    expect(isCharAscii('n'))
        .toBe(true); // lowercase letters

    expect(isCharAscii('  s  '))
        .toBe(false); // spaces (should be trimmed before hand this function should not assume)

    expect(isCharAscii('nas'))
        .toBe(false); // multiple chars

    expect(isCharAscii(4))
        .toBe(false); // non letter

    expect(isCharAscii('络'))
        .toBe(false); // non ascii letter
});