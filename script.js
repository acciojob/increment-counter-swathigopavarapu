// Standard boilerplate for Node.js based platforms
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function() {
    inputString = inputString.trim().split("\n");
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    // Example: read a number
    let n = parseInt(readLine().trim());

    // Example: logic (square the number)
    let result = n * n;

    // Print final result
    console.log(result);
}
