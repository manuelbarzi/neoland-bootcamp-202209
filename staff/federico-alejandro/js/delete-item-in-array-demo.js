var a = [10, 20, 30, 40, 50]

var target = 30

var index = -1

for (var i = 0; i < a.length && index < 0; i++) {
    var val = a[i]

    if (val === target) index = i
}

if (index > 0) {
    for (var i = index; i < a.length - 1; i++) {
            a[i] = a[i + 1]
    }

    a.length-- //a.length -= 1 //a.length = a.length - 1
    
}