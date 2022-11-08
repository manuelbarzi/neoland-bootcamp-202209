function includes(array, searchElement, fromIndex = 0) {

    //Aqui quiero que si el valor es negativo pero no es superior al length del array cuente de atras en adelante
    if (-fromIndex < array.length) {
        return false
    }

    
    for (var i = fromIndex; i < array.length; i++) {
        var element = array[i]

        if (searchElement === element)
            return true;
    }
    return false
}

[2, 10, 5, 9, 4]