Array.prototype.shuffle = function () {
  const result = [];
  const indexes = [];

  for (let i = 0; i < this.length; i++) {
    indexes[indexes.length] = i;
  }

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    const index = Math.floor(Math.random() * indexes.length);

    result[index] = element;

    for (let j = index; j < indexes.length - 1; j++) {
      indexes[j] = indexes[j + 1];
    }

    indexes.length--;
  }

  return result;
};
