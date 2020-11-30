const segment = require('./segment');

test('Query string parsing function', () => {
    expect(segment('> find:name= Nabeel: Ahmed |id= 123 |lol= 10 |> insert:age= 17 |> update:age= 10 |ip= 10.10.0.30.3'))
        .toStrictEqual([
            'find:name= Nabeel: Ahmed |id= 123 |lol= 10 |',
            'insert:age= 17 |',
            'update:age= 10 |ip= 10.10.0.30.3'
        ]); // default demo

    expect(segment('> hello: message=world'))
        .toStrictEqual([
            'hello: message=world'
        ]); // single query

    expect(segment('> hello: message=world> food expire=2003 > motion: running= true'))
        .toStrictEqual([
            'hello: message=world',
            'motion: running= true'
        ]); // query that has has a missing colon query is ignored

    expect(segment('> something: works=true> motion: jumping= false>'))
        .toStrictEqual([
            'something: works=true', 
            'motion: jumping= false'
        ]); // if text is missing after > to ignore it


    expect(segment('motion: jumping= false> message: text=Javascript \\> Java'))
        .toStrictEqual([
            'motion: jumping= false',
            'message: text=Javascript > Java'
        ]); // detect escape string for >

    expect(segment('> something: works=true> motion: jumping= false food: add=banana'))
        .toStrictEqual([
            'something: works=true',
            'motion: jumping= false food: add=banana'
        ]); // if a > is missing to assume the text after it is part of the arguments of preseding segment

    expect(segment(''))
        .toStrictEqual([]); // blank result
});