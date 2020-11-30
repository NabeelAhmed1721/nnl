// custom algorithm
// add escape for >
// error handling/finder

// parseQuery('> find:name= Nabeel Ahmed |id= 123 |lol= 10 |> insert:age= 17 |> update:age= 10 |ip= 10.10.0.30.3')

console.log('results:',parseQuery(`
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

function parseQuery(input) {
    console.time("legacy code");
    input = input.replace(/(\r\n|\n|\r)/gm, ''); // remove all line breaks for all OS
    if (input) {   
        const queryRegex = /([a-zA-Z]([a-z]|[A-Z])*?)\:(.[^\>]*)?/gm; // regex to find query [command]:[argument]
        const commandRegex = /([a-zA-Z]([a-z]|[A-Z])*?)\:/gm; // regex to find command [command]:
        const matches = input.match(queryRegex); // matches any strings in input;
        const results = []; // array of queries
        const error = "No command supplied";
        if (!matches) {
            return error;
        }

        for (let match of matches) {
            let command = match.match(commandRegex)[0]; // get command from match
            let argument = match.replace(command, "").trim(); // trim any whitespace from argument
            let parsedArguments = parseArgument(argument); // array parsed arguments into: property: value;
            if(parsedArguments.length == 0) { // if array is empty skip command
                continue;
            }
            let query = {
                command,
                argument: parsedArguments
            }
            results.push(query);
        }
        console.timeEnd("legacy code");
        return matches != null ? results : error; // return result if match is not null
    } else {
        return error; // if no string is supplied
    }
}

function parseArgument(input) {
    const argumentRegex = /([a-zA-Z])([a-z]|[A-Z])*?\=([^\|]*)/gm;
    const propertyRegex = /([a-zA-Z])([a-z]|[A-Z])*?\=/gm;
    const matches = input.match(argumentRegex);
    const arguments = []; // array of arguments parsed

    if(matches) {
        for (match of matches) {
            let property = match.match(propertyRegex)[0];
            let value = match.replace(property, "").trim();
            let result = { // return object of property and value. two components to every argument
                property,
                value
            }
            arguments.push(result)
        }
    }

    return arguments;
}