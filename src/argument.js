const isCharAscii = require("./lib/isCharAscii")

// to do make repetive stuff function like is this a ascii letter?
// make property[] not an array for consistency
// add spacing between equal signs: age = 17. ignore spaces then trim.
    // ^ continued this. Spaces are only counted up until first letter.
    // [space][space]id[space][space]= make it so it breaks once space is detected AFTER detecting a letter

/**
 * Parses a string query and returns an array of arguments
 * Arguments are signified by a word following a command: [command]: [argument(s)]
 * Arguments are broken down into: [property] = [value]
 * Example input: 'find: name=Nabeel Ahmed'
 * Example output: '[{property: 'name', value: 'Nabeel Ahmed'}]'
 * 
 * @param   {String} input string of query
 * 
 * @returns {String[]} returns array of arguments found
 */

function argument(input) {
    let output = [];
    let readFrom = 0; // store where to read next argument. To prevent reading equal signs within values
    
    for ( let i = 0; i < input.length; i++ ) {
        let char = input[i];

        if ( char == "=" && i >= readFrom ) { // make sure to only count = if it is in readFrom range
            let assignerLocation = i;
            let argument = {}; // store argument object
            let property = ""; // array to store property chars
            let value = ""; // string to store value

            // get argument property
            for ( let x = assignerLocation - 1; x >= 0; x-- ) { // get argument property
                let propertyChar = input[x];

                if ( isCharAscii(propertyChar) ) { // only count ascii letters
                    property = propertyChar + property; // add character to property string as long as it is an ascii letter
                } else {
                    break; // break loop if non-letter found
                }
            }

            if (property.length == 0 ) { // if property is empty just skip it.
                continue;
            }

            property = property.trim(); // trim any spaces

            for ( let x = assignerLocation + 1; x < input.length; x++ ) { // loop through the rest of the input to get value and go one forward to ignore
                let valueChar = input[x];

                if ( valueChar == "|" && input[x - 1] != "\\" ) { // argument seperator. Only seperate if it isn't escaped
                    readFrom = x; // next read should begin from here
                    break;
                } else if (valueChar == "\\" && input[x + 1] == "|") {
                    valueChar = ""; // remove \ from \| to get |
                }

                // add | escape
                value += valueChar;

                if (x == input.length - 1 ) { // if loop makes it to the end of the input string stop loop
                    readFrom = input.length; // making the readFrom range to the length will kill main loop
                    break;
                }
            }

            value = value.trim(); // trim values to remove redundant spaces

            argument = { // make values into an object
                property,
                value
            }

            output.push(argument); // push parsed argument to output
        }
    }
    return output;
}

// console.log(argument("find: age= 17 | name= Nabeel Ahmed")); // test

module.exports = argument;