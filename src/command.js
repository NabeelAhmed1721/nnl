const isCharAscii = require("./lib/isCharAscii")

/**
 * Parses a string query and returns the command
 * Commands are signified by a word following a colon: [command]:
 * Example input: 'find: name=Nabeel Ahmed'
 * Example output: 'find'
 * 
 * @param   {String} input string of query
 * 
 * @returns {String} returns command found else undefined
 */

function command(input) {
    let output = ""; // string for command
    let colonLocation = null;

    for (let i = 0; i < input.length; i++ ) { // cycle through each char
        let char = input[i]; // current char

        if(char == ":") {
            colonLocation = i; // store location of where colon was found in input
            break; // stop loop once colon location is found
        }
    }

    if ( colonLocation == null ) { // return undefined if no command found
        return undefined;
    }

    for ( let x = colonLocation - 1; x >= 0; x-- ) { // loop backwards from colon to get command
        let commandChar = input[x]; // current character from loop going backwards
        if( isCharAscii(commandChar) ) { // only count ascii letters
            output = commandChar + output; // add character to command string as long as it is an ascii letter
        } else {
            break; // break loop if non-letter found
        }
    }

    if ( output.length == 0 ) { // return undefined if output is empty
        return undefined;
    }

    output = output.trim(); // trim command
    return output;
}

// console.log(command("find: name=Nabeel Ahmed")) // test

module.exports = command;