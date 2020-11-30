/**
 * Detects if input is a ascii character or not.
 * 
 * @param   {String} input Input string.
 * 
 * @returns {Boolean} Is input a ascii character?
 */

function isCharAscii(input) {
    let output = false;

    if( typeof(input) != 'string' ) { // return false if input isn't string
        return false;
    }

    if(input.length > 1) { // if input isn't a single char then return false
        return false;
    }

    output = input.toUpperCase() != input.toLowerCase();

    return output;
}

// console.log(isCharAscii("N")); // test

module.exports = isCharAscii;