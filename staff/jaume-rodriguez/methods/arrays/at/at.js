function at(array, index){
    if(index === undefined)
    index = 0
   
    if (index < 0)
    index = array.length + index
        

    return array[index]
}