function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Shape() {
  this.position = new Point(0, 0);

  const element = document.createElement("div");
  element.style.position = "absolute";

  this.container = element;
}

Shape.prototype.move = function (x, y) {
  this.position.x = x;
  this.position.y = y;
};

Shape.prototype.render = function () {
  this.container.style.left = this.position.x + "px";
  this.container.style.bottom = this.position.y + "px";

  document.body.append(this.container);
};

function Emoji(icon) {
  Shape.call(this);

  this.icon = icon;
}

Emoji.prototype = Object.create(Shape.prototype);
Emoji.prototype.constructor = Emoji;

Emoji.prototype.eat = function () {
  return this.icon + "🍔";
};

Emoji.prototype.render = function () {
  this.container.innerText = this.icon;
  Shape.prototype.render.apply(this);
};

var crazy = new Emoji("😨");
crazy.move(100, 100);
crazy.render();

var raptor = new Emoji("🦖");
raptor.move(50, 50);
raptor.render();

document.onkeydown = function(event) {
    const key = event.key

    if (key === 'ArrowUp')
        crazy.move(crazy.position.x, crazy.position.y + 10)
    else if (key === 'ArrowDown')
        crazy.move(crazy.position.x, crazy.position.y - 10)
    else if (key === 'ArrowLeft')
        crazy.move(crazy.position.x - 10, crazy.position.y)
    else if (key === 'ArrowRight')
        crazy.move(crazy.position.x + 10, crazy.position.y)
    else if (key === 'w')
        raptor.move(raptor.position.x, raptor.position.y + 10)
    else if (key === 's')
        raptor.move(raptor.position.x, raptor.position.y - 10)
    else if (key === 'a')
        raptor.move(raptor.position.x - 10, raptor.position.y)
    else if (key === 'd')
        raptor.move(raptor.position.x + 10, raptor.position.y)
    

    crazy.render()
    raptor.render()

    if (crazy.position.x === raptor.position.x && crazy.position.y === raptor.position.y)
        alert('game over')
}