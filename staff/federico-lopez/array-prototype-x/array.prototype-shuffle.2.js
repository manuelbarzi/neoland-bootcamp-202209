Array.prototype.shuffle = function () {
  const result = [];

  // creo un array de índices donde alojo los índices disponibles
  const indexes = [];

  for (let i = 0; i < this.length; i++) {
    indexes[indexes.length] = i;
  }

  // recorrer el array de principio a fin
  // por cada elemento lo coloco en una nueva posición random

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    const randomNumber = Math.floor(Math.random() * indexes.length);

    const index = indexes[randomNumber];

    result[index] = element;

    for (let j = randomNumber; j < indexes.length - 2; j++) {
      indexes[j] = indexes[j + 1];
    }
  }

  // indexes [0, 1, 2, 3, 4]
  // result [ empty, empty, 1er elemento, empty, empty ]

  return result;
};
