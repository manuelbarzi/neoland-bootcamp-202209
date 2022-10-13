
function repeat(string, index) {
    var result = ''
    if (index === 0) {
        return result
    }
    if (index <= -1) {
        result = "error"
        return result
    }
    if (index === 1) {
        return string
    }
    if (index > 1) {
        var array = []
        for (var j = index; j > 0; j--) {
            for (var i = 0; i < string.length; i++) {
                array.push(string[i])
                
            }
        }
        
        var toStr = array.toString()
        return toStr.replace(/,/g, "")
    }
}