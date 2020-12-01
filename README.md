# NNL

>  A simple and multipurpose notation/query language.

### Hello World Demo

*Input*: `> Message: text= Hello World `

*Result*: `[{ command: 'Message', argument: [ { property: 'text', value: 'Hello World' } ] }]`

### How to use

#### Theory

Every NNL query consists of a command and at least one argument. 

> This is how a query looks from a basic view: `[command]: [argument]`

Arguments can be broken down into two components: property and value.

> This is how a query looks with a detailed view: `[command]: [property= value]`

To chain more commands to a query, you must use the `>` operator to separate the commands.

> For example: `[command]: [property= value] > [command]: [property= value]`.

To chain more arguments in a command, you must use the `|` operator to separate the arguments.

> For example: `[command]: [property= value] | [property= value] > [command]: [property= value]`

#### Real Examples

In the real world, you may be querying a database or setting procedural settings for a robot to complete. NNL is made to be used in a diverse range of applications. Here are some examples of how NNL can be used in the real world:

**Querying a database for a certain user and updating a value:**  `find: name= Jordan Carter | age= 24 > update: age= 25`

**Basic robot instructions**: `move: distance= 50 | speed= 10.2 > wait: sec= 2 > rotate: angle= 90 | origin= center `

> Contribute and add more examples!

### Good Practice

Like with most things, there are good practices that make using it more efficient and fun. Here are a few good practices with NNL:

- Although the parser will automatically ignore it, you don't have to add a `>` operator at the very beginning of the syntax. Such as this example:

  ```
  > find: name= Jordan Carter
  ```

- Although you don't need spaces between operators, it makes your query more readable. Here's an example of a query without spacing that will still work:

  ```
  find:name=Jordan Carter
  ```

  *Keep in mind you cannot have a space between the property and `=` operator. As well as with the `:` operator and a command. Well... at least for now ;)*.

- Speaking of the `:` and `=` operators, don't worry about escaping them inside the argument value, they are automatically assumed as values. However, look below for operators you do need to escape if you want to use them in arguments.

- Take advantage of multiple lines! Make your query look more readable by adding tabs and line breaks. Here's an example of a style: 

  ```
  > move:
      distance= 10    |
      speed=    20    |
      easeIn=   true  |
  > wait:
      min=      2	    |
  > rotate:
      angle=    -90   |
      speed=    10    |
  ```


  Get creative :).

### Escaping Characters

You can escape certain special characters with a `\` or `\\` (if you are using a javascript string to input the NNL data):

- To escape the  `>` operator, use: `\>` or `\\>` .
- To escape the `|` operator, use `\|` or `\\|` .

### Syntax Rules ( for now ;) )

- There cannot be any spaces between the [command] and the ':' operator.
- There cannot be any spaces between the [property] and the '=' operator.
- All values from arguments are converted to a string datatype.

### To-Do List (ways you can contribute!)

- [ ] Optimize parser
- [ ] Clean up code and make it more readable
- [ ] Typescript support
- [ ] Plugin support
- [ ] Library Logo

