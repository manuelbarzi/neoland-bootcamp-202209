function repeat(string, n) {
    result = ''
    
    n = Math.trunc(n)

    if (n < 0) {
        result = 'Invalid count value: ' + n

    } else {
        for (i = 0; i < n; i++)

            result = result + string
    }
    return result

}
