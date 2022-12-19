export default function (items) {
    
    const mapAmountItems = items.map( (item) => item.amount )

    document.getElementById("total").innerHTML = mapAmountItems.reduce(getSum, 0) + '€';

    function getSum(total, num) {
        return total + num
    }

  }