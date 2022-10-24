Array.prototype.toObject = function() {

    //if ((array instanceof Array)) throw new TypeError(array + ' is an array')
    //if (!(object instanceof Object)) throw new TypeError(object + 'is not an object')
    //if (typeof object !== 'object') throw new TypeError(object + ' is not an object')
    var res = {}


    for(var i = 0; i < this.length; i++){
        res[i] = this[i] 
    }
    res.length = this.length
    
    return res
} 

Array.prototype.toObject.call()

// {0: 10, 1:20, 2:30, length: 3}