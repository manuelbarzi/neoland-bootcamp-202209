Array.prototype.sortNumbers = function (order = '') {
    var output = [];
    var inserted;

    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < output.length; j++) {
            if (order === 'a' || '' || !order) {
                if (this[i] < output[j]) {
                    inserted = true;
                    output.splice(j, 0, this[i]);
                    break;
                }
            }
            if (order === 'd') {
                if (this[i] > output[j]) {
                    inserted = true;
                    output.splice(j, 0, this[i]);
                    break;
                }
            }
            continue;
        }

        if (!inserted) {
            output.push(this[i])
        }
    }
    return output
}