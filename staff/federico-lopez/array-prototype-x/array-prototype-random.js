Array.prototype.random = function () {
  const randomIndex = Math.floor(Math.random() * this.length);

  return this[randomIndex];
};
