Burray.prototype.filter = function (callback) {
    if (callback instanceof Function === false) {
      throw new TypeError(`"${callback}" is not a function`);
    }
  
    const result = new Burray();
  
    for (let i = 0; i < this.length; i++) {
      const element = this[i];
  
      const meetsTheCondition = callback(element);
  
      if (meetsTheCondition) {
        result[result.length++] = element;
        //   result[result.length] = element;
        //   result.length++;
      }
    }
  
    return result;
  };