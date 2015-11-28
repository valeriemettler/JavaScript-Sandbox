var dbl = function(n) {
    console.log(n)
    return 2 * n;
}

var testCases = [
    [1, 2],
    [2, 4],
    [3, 4],
]

var ok = function() {

    for (var i = 0; i < testCases.length; i++) {

        if (dbl(testCases[i][0]) == testCases[i][1]) {
            console.log("correct");
        } else {
            console.log("incorrect");
        }

    }
}
ok();