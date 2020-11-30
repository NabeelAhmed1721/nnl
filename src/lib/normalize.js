/**
 * Normalizes a string for parsing.
 * Removes any line-breaks and padding space.
 * 
 * @param   {String} input Input string.
 * 
 * @returns {String} Normalized string.
 */

function normalize(input) {
    let output = ""; // output string
    for (let i = 0; i < input.length; i++ ) { // cycle through each char
        let char = input[i]; // current character in string

        if (char == "\n" || char ==  "\r") { // skip line breaks
            continue;
        }

        output += input[i]; // add char to output
    }
    output = output.trim(); // trim any padding space
    return output // return output
}

// console.log(normalize(`
//     >find:
//         name=Nabeel Ahmed
//     >update:
//         age=16
// `)) // test - tabs (or \t) and spaces should not be changed as they may hold value

module.exports = normalize