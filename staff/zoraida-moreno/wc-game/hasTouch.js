let counter = 0
const count = document.createElement('p')
count.innerText = counter

function hasElementsTouchEachOther(area1, area2) {
    if (((area2.area.x[0] >= area1.area.x[0] && area2.area.x[0] <= area1.area.x[1]) &&
        (area2.area.y[0] >= area1.area.y[0] && area2.area.y[0] <= area1.area.y[1])) ||
        ((area2.area.x[1] >= area1.area.x[0] && area2.area.x[1] <= area1.area.x[1]) &&
            (area2.area.y[1] >= area1.area.y[0] && area2.area.y[1] <= area1.area.y[1]))) {
        counter++
        count.innerText = counter
        return true
    }
    else
        return false
}
document.body.append(count)