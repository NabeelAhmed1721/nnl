const normalize = require('./normalize');
const segment = require('./segment');
const command = require('./command');
const argument = require('./argument');

/**
 * Parses a string and extracts commands and arguments.
 * Commands are signified by a word following a colon: [command]:
 * and argument(s) are on the other side signified by a equal sign: [command]: [argument(s)].
 * This can be broken down further to: [command]: [property]=[value] | [property]=[value] | etc.
 * Example input: 'find: name=Nabeel Ahmed'.
 * Example output: {command: 'find', argument: [{property: 'name', value: 'Nabeel Ahmed'}]}
 * 
 * @param   {string} input input string of a query.
 * 
 * @returns {Object} returns an object the parsed command and arguments
 */

function parser(input) {
    console.time("new parser");
    input = normalize(input); // normalize input
    let output = [];

    input = segment(input)

    for ( let query of input ) {
        let parsedCommand = command(query);
        let parsedArgument = argument(query);

        let result = {
            command: parsedCommand,
            argument: parsedArgument
        }

        output.push(result)
    }
    console.timeEnd("new parser");
    return output;
}

// console.log(parser("> find: name= Nabeel Ahmed | age= 17 > update: age=18")); // test

module.exports = parser;