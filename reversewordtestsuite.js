var reverseWord = function(x) {
        var revWord = '';
        for (var i = 0; i < x.length; i++) {
            revWord = revWord + x[x.length - (i + 1)];
        }
        return revWord;
    }

var counterCorrect = 0;
var counterIncorrect = 0;
var test = function(verbose) {
    var a = Date.now();
    var testCases = [
        ["anna", "anna"],
        ["bob", "bob"],
        ["mom", "mom"],
        ["racecar", "racecar"],
        ["twirl", "lriwt"],
        ["5", "a"],
        ["a", "a"],
        ["", ""],
        ["2", "3"]
    ];
    for (var i = 0; i < testCases.length; i++) {
        if (verbose) {
            if (reverseWord(testCases[i][0]) == testCases[i][1]) {
                console.log(reverseWord(testCases[i][0]) + "==" + testCases[i][1] + " is correct");
            } else {
                console.log(reverseWord(testCases[i][0]) + "==" + testCases[i][1] + " is incorrect");
            }
        } else if (reverseWord(testCases[i][0]) == testCases[i][1]) {
            counterCorrect = counterCorrect + 1;
        } else {
            counterIncorrect = counterIncorrect + 1;
        }
    }
    if (!verbose) {
        if (counterCorrect === testCases.length) {
            console.log("all tests passed");
        } else {
            console.log(counterIncorrect + " tests were incorrect");
        }
    }
    var b = Date.now();
    console.log("the test completed in " + (b - a) + "milliseconds")
}
test(false);
