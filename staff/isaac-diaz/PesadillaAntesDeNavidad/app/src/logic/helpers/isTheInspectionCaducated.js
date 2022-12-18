// si lastKms mas 10000 es >= a los kms actuales en los gasolina, caducada
// si lastKms mas 15000 es >= a los kms actuales en los diesel, caducada
// si ha pasado un año de la fecha de matriculacion, caducada
// si ha pasado un año desde la ultima revision, caducada

 function isTheInspectionCaducated(lastInspectionOil, licenseDate, lastKms, kms, gas) {
    const now = new Date
    const licenseYear = licenseDate.getFullYear()
    const lastInspectYear = lastInspectionOil.getFullYear()

    if (gas === 'gasolina') {
        if (lastKms + 10000 >= kms) {

            return true
        }
        else if (licenseYear + 1 <= now) {

            return true
        }
        else if (lastInspectYear + 1 <= now)

            return true
    } else if (gas === 'diesel') {
        if (lastKms + 15000 >= kms) {

            return true
        }
        else if (licenseYear + 1 <= now) {

            return true
        }
        else if (lastInspectYear + 1 <= now)

            return true
    }

    return false
}