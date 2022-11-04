function concatStrings(firstString, secondString, joinString) {
    var returnString = ''

    // Traverse first string
    for (let i = 0; i < firstString.length; i++) {
        let letter = firstString[i];

        returnString += letter;

    }

    // Traverse joinString
    for (let i = 0; i < joinString.length; i++) {
        let letter = joinString[i];

        returnString = returnString + letter;
    }

    // Traverse second string
    for (let i = 0; i < secondString.length; i++) {
        let letter = secondString[i];

        returnString = returnString + letter;
    }

    return returnString


}