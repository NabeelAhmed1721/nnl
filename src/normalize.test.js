const normalize = require('./normalize');

test('String normalize function', () => {
    expect(normalize('Hello \nWorld'))
        .toBe('Hello World'); // one line break

    expect(normalize('\r\n  Hello Wo\rrld  '))
        .toBe('Hello World'); // line break, feed returns and space padding

    expect(normalize('Hello World'))
        .not.toBe('HelloWorld'); // unwanted string mutation

    expect(normalize('\r \n  > \r\nFind: name=Nabeel Ahmed > Insert\n: age=10\r\n   '))
        .toBe('> Find: name=Nabeel Ahmed > Insert: age=10'); // advanced text

    expect(normalize('Hello World'))
        .toBe('Hello World'); // nothing
});