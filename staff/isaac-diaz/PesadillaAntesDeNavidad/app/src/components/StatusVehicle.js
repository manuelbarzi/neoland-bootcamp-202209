import calculateMonthsToNextItv from "../logic/helpers/calculateMonthsToNextItv"
import calculateMonthsToNextCheckOil from '../logic/helpers/calculateMonthsToNextCheckOil'

export default function StatusVehicle(level) {
    const color = level === 'problems' ? 'red' : level === 'warning' ? 'gold' : level === 'perfect' ? 'green' : 'undefined'

    if (calculateMonthsToNextItv || calculateMonthsToNextCheckOil <= 1) { 
        return 'problems'
    } else if (calculateMonthsToNextItv || calculateMonthsToNextCheckOil <= 3) {
        return 'warning'
    } else if (calculateMonthsToNextItv || calculateMonthsToNextCheckOil > 3)
    return 'perfect'    
}