function Charmander() {
    this.name = "Charmander";
    this.flamethrower = function (amount = 1) {
      console.log("🔥".repeat(amount) + this.name);
    };
  }
  
  function Ditto() {
    this.name = "Ditto";
    this.copyAttackAndStoreIt = function (pokemonToSteal, methodToSteal) {
      const methodBindedToDitto = pokemonToSteal[methodToSteal].bind(this);
      // char.flamethrower.bind(this)
      // char.flamethrower.bind(ditto)
  
      this[methodToSteal] = methodBindedToDitto;
    };
  
    this.emulateAttack = function (pokemonToEmulate, methodToEmulate) {
      pokemonToEmulate[methodToEmulate].apply(this); //funciona ifual que call
      //opcion de emular el ataque, no lo almacena sino que lo ejucuta directamente
      // pokemonToEmulate[methodToEmulate].call(this) metodo de charmander llamado por ditto
      // char.flamethrower.call(ditto)
    };
  }
  //en cosola los creo y puedo ver que tienen cada uno
  const char = new Charmander();
  const ditto = new Ditto();
  
  ditto.emulateAttack(char, "flamethrower"); //emula de charmander el metodo flamethrower

  ditto.copyAttackAndStoreIt(char, "flamethrower");
  //bind no ejecuta. crea otra funcion copia, sivuelvo a mirar en ditto, aparece que tiene guardado el flamethrower