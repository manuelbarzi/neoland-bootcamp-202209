const months = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december'
}

/**
 * Gets the name of the month
 * 
 * @param {number} month The month number
 */
export default function(month) {
    return months[month]
}