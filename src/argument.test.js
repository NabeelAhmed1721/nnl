const argument = require('./argument');

test('String normalize function', () => {
    expect(argument('find: age=17'))
        .toStrictEqual([
            { property: 'age', value: "17" }
        ]); // single argument

    expect(argument('find: age= 17 | name= Nabeel Ahmed'))
        .toStrictEqual([
            { property: 'age', value: "17" },
            { property: 'name', value: "Nabeel Ahmed" }
        ]); // more than one argument

    expect(argument('find: age= 17 name= Nabeel Ahmed'))
        .toStrictEqual([
            { property: 'age', value: "17 name= Nabeel Ahmed" }
        ]); // missing seperator

    expect(argument('find: age= 17 |= Nabeel Ahmed'))
        .toStrictEqual([
            { property: 'age', value: "17" }
        ]); // incorrect property is ignored

    expect(argument(''))
        .toStrictEqual([]); // blank

    expect(argument('find: age= 17 || ds? \\r| =sd Na \beel Ahmed'))
        .toStrictEqual([
            { property: 'age', value: "17" }
        ]); // cocaine proof
});