const isCharAscii = require("./lib/isCharAscii")

//to do: make for loop for segment either O(n) or implement ./command.js

/**
 * Segments a full query input string into an array of seperate command strings
 * Example input: '> find: name=Nabeel Ahmed > insert: age= 17'
 * Example output: ['find: name=Nabeel Ahmed','insert: age= 17']
 * Input string should be normalized first using ./normalize.js
 * This does not parse the actual command and arguments. Look at ./query.js for that.
 * 
 * @param   {String} input Normalized input string.
 * 
 * @returns {String[]} returns an array of command strings
 */

function segment(input) {
    let output = [];
    let readFrom = 0; // variable repersents the index to begin parsing a query to prevent recording an unwated colon

    if ( input == null ) { // if input is null return empty array
        return output;
    }

    for ( let i = 0; i < input.length; i++ ) {
        let char = input[i]; // current character in input string

        if ( char == ":" && i >= readFrom ) { // if loop finds a colon and it is within the readFrom range

            let query = ""; // string to store query characters
            let colonLocation = i; // store location of where colon was found in input

            for ( let x = colonLocation; x >= 0; x-- ) { // loop backwards from colon to get command
                let commandChar = input[x]; // current character from loop going backwards
                if( x == i || isCharAscii(commandChar) ) { // x == i just means to count the colon as it isn't a letter
                    query = commandChar + query; // add character to query string as long as it is an ascii letter
                } else {
                    break; // break loop if non-letter found
                }
            }

            if(query == ":") { // if query command is empty skip it
                continue;
            }


            for ( let x = colonLocation + 1; x < input.length; x++ ) { // this loop captures everything after the command and ignores colon
                let queryChar = input[x]; // current character from the loop to capture rest of query

                if (queryChar == ">" && input[x - 1] != "\\") { // > seperates queries and ends this loop. Makes sure > isn't escaped.
                    readFrom = x; // make sure to continue next loop from here
                    break;
                } else if (queryChar == "\\" && input[x + 1] == ">") { // if \ is detected with > remove the \ to allow escaped character
                    queryChar = ""; // remove \ from \> to get >
                }
                
                query += queryChar; // append queryChar to query

                if ( x == input.length - 1 ) { // if loop makes it to the end of the input string destory the loop to prevent anymore checking
                    readFrom = input.length; // making the readFrom range to the length will kill main loop
                    break;
                }
            }
            
            output.push(query); // finally push parsed query into output
        }
    }
    return output;
}

// console.log(segment(`>: > find:name=Nabeel Ahmed>update:age=16`)) // test

module.exports = segment