var factorial = function(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}
console.log("f(1) = " + factorial(1));
console.log("f(2) = " + factorial(2));
console.log("f(3) = " + factorial(3));
console.log("f(4) = " + factorial(4));
console.log("f(5) = " + factorial(5));
if (factorial(1) == 1 ) { console.log("correct");} else {console.log("incorrect");}
if (factorial(2) == 2 ) { console.log("correct");} else {console.log("incorrect");}
if (factorial(3) == 6 ) { console.log("correct");} else {console.log("incorrect");}
if (factorial(4) == 24 ) { console.log("correct");} else {console.log("incorrect");}