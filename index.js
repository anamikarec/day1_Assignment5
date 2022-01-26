// HACKERRANK BOILER CODE IN JAVASCRIPT

//declare variables to process the data
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

// Begin reading from stdin so the process does not exit. (basically reading from the command line)
process.stdin.resume();

//set the enconding for received data to ascii so it will be readable
process.stdin.setEncoding('ascii');

//if data is coming through, put it in the input_stdin string. keep receiving data until no more comes through
process.stdin.on('data', function (data) {
    input_stdin += data;
});


//after the transmission when the end signal is received break the string up and push each new line (\n == new line) as an element into the array.
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});


//gives you one element per line to work with.
function readLine() {
    return input_stdin_array[input_currentline++];
}
 