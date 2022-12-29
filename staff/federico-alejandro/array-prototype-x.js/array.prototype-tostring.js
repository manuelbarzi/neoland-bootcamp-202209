Array.prototype.toString = function(){
    var str = ''

    for (var i = 0; i < this.length; i++){
         str += this[i]

    if (i < this.length - 1) str += ','
}

return str
}

/*Array.prototype.toString.apply(chars, num, a, [function(d){
    console.log(d)
}])*/

