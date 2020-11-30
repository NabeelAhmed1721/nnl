const { argument } = require('../src');

console.log('results:', argument(`

    > find:
        name= Nabeel Ahmed |
        id= 123 |
        lol= 10 |
    > insert:
        age= 17 |
    > update:
        age= 10 |
        ip= 10.10.0.30.3

`))