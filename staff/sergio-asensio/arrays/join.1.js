function join(array, separator){
    result = ''
    
    for (i = 0; i < array.length ; i++)
        if (i < array.length -1)
        result = result + array[i] + separator
        else{
            result = result + array[i]
        }
    return result


}