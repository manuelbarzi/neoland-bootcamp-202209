const months = {
    'january': 1,
    'february':2,
    'march':3,
    'april':4,
    'may': 5,
     'june':6,
     'july':7,
     'august': 8,
     'september':9,
    'october': 10,
    'november':11,
    'december': 12
}

/**
 * Gets the number of the month
 * 
 * @param {number} month The month number
 */
export default function(month) {
    return months[month]
}