export default function (items) {
    
    const mapAmountItems = items.map( (item) => item.amount )
    if (mapAmountItems[0] === undefined) {
        return '0,00€'
    } else {
        document.getElementById("total").innerHTML = mapAmountItems.reduce(getSum, 0) + '€';
    
        function getSum(total, num) {
            return total + num
        }
    }

  }