debugger

var nums = [10, 20, 30, 40, 50] // { "0": 10, "1": 20, ... } 

var result = 0

for(var i = 0; i < nums.length; i++) {
    var num = nums[i]

    result = result + num
}

console.log('result', result)