function runProgram(input){
    // here we are splitting the input by newLine using "/n" 
    var input=input.split("\n");
    var n = Number(input[0]);
    var arr=input[1].split(" ").map(Number);
 }
 /// process.stdin is an inbuilt application programming interface of the process module which listens the userinput
 //  process.stdin.resume() is a readable Stream that points to a standard input stream (stdin). Standard input streams are paused by default, so you must call process.
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
    read += input;
 });
 process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
 });
 
 process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
 });