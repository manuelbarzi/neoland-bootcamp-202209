import isTheInspectionCaducated from "./isTheInspectionCaducated"
/*
lisenceDate: {fecha}
lastInspectionOil: {fecha}
lastKms: {string}
kms: {string}
gas: {string} -> type: gasolina, diesel
*/

 function calculateNextInspectionOil(licenseDate, lastKms, lastInspectionOil, kms, gas) {
    const licenseDay = licenseDate.getDate()
    const licenseMonth = licenseDate.getMonth()
    const licenseYear = licenseDate.getFullYear()
    const lastInspectDay = lastInspectionOil.getDate()
    const lastInspectMonth = lastInspectionOil.getMonth()
    const lastInspectYear = lastInspectionOil.getFullYear()

    const isCaducated = isTheInspectionCaducated(lastInspectionOil, licenseDate, lastKms, kms, gas)

    let isGoingToCaducate = false

    if(!isCaducated){
        // TODO
        isGoingToCaducate = isTheInspectionGoingToCaducate(lastInspectionOil, licenseDate, lastKms, kms, gas)
    }

    if (gas === 'gasolina') {
        if (!lastInspectionOil) {

            var firstInspection = licenseYear + 1

            var nextInspectionOilDate = new Date(firstInspection, licenseMonth, licenseDay)
            var nextKms = 10000 //arreglar

            return { nextInspectionOilDate, nextKms, isCaducated, isGoingToCaducate }

        } else if (lastInspectionOil) {


            var nextInspectionOil = lastInspectYear + 1
            var nextInspectionOilDate = new Date(nextInspectionOil, lastInspectMonth, lastInspectDay)
            var nextKms = lastKms + 10000

            return { nextInspectionOilDate, nextKms, isCaducated, isGoingToCaducate }
        }
    }

    if (gas === 'diesel') {
        if (!lastInspectionOil) {

            var firstInspection = licenseYear + 1

            var nextInspectionOilDate = new Date(firstInspection, licenseMonth, licenseDay)
            var nextKms = 15000

            return { nextInspectionOilDate, nextKms, isCaducated, isGoingToCaducate }

        } else if (caducateInspection) {

            var nextInspectionOil = lastInspectYear + 1
            var nextInspectionOilDate = new Date(nextInspectionOil, lastInspectMonth, lastInspectDay)
            var nextKms = lastKms + 10000

            return { nextInspectionOilDate, nextKms, isCaducated, isGoingToCaducate }
        }
    }
}






// if (status < 1 || kms > lastKms + 14500 && gas === 'diesel') {

//     return red

// } else if (status < 1 || kms > lastKms + 9500 && gas === 'gasolina') {

//     return red

// } else if (status < 3 || kms > lastKms + 2500 && gas === 'diesel') {

//     return yellow

// } else if (status < 3 || kms > lastKms + 2500 && gas === 'gasolina') {

//     return yellow

// } else
//     return green

