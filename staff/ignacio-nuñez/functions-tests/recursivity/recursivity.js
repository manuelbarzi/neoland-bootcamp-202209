function factorial(n) {
    if (n<=1) return 1;
    return n* factorial(n-1);
}

debugger

var result = factorial(5)