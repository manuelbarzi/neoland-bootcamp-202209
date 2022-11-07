Array.prototype.shuffle = function () {
  const result = [];
  const indexes = [];

  for (let i = 0; i < this.length; i++) {
    indexes[indexes.length] = i;
  }

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    const randomNumber = Math.floor(Math.random() * indexes.length);

    const index = indexes[randomNumber];

    result[index] = element;

    for (let j = randomNumber; j < indexes.length - 1; j++) {
      indexes[j] = indexes[j + 1];
    }

    indexes.length--;
  }
  return result;
};
