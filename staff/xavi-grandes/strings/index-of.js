function indexOf(string, searchString, position = 0 ){
    // let result =  '' 
    debugger

    for (let i = 0; i < string.length; i++) {
        let hasToContinue = true

        for (let j = 0; j < searchString.length && hasToContinue; j++) {
            if(searchString[j] !== string[i + j]) {
                hasToContinue = false
            } else {
                if(j === searchString.length - 1) {
                    return i
                }
            }
        }
    }

    // for (var i = 0; i < string.length; i++){
    //     char = string[i]
        
    //     if (char === ' ' || char === ','){
    //         if (result === searchString){
    //             resultIndex = i - searchString.length     
    //             return resultIndex
    //         } else {
    //             result = ''; 
    //             char = string[i + 1];
    //             i = i + 1
    //         }
    //     } 

    //     result += char
    // }
    return -1
}