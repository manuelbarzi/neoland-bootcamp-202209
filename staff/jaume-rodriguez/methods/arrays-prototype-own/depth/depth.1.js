Array.prototype.depth = function () {
    var maxDeep = 1

    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if (!(element instanceof Array)) {
            continue;
        }
        /* ---entrando a contexto--- */
        const subArrayDepth = element.depth() + 1;
        if (subArrayDepth > maxDeep) {
            maxDeep = subArrayDepth
        }
    }
    return maxDeep;
}