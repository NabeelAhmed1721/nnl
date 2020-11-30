const parser = require('./src/parser');

console.log('results:', parser(`

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