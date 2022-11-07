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
      pokemonToEmulate[methodToEmulate].apply(this);
      // pokemonToEmulate[methodToEmulate].call(this)
      // char.flamethrower.call(ditto)
    };
  }
  
  const char = new Charmander();
  const ditto = new Ditto();
  
  ditto.emulateAttack(char, "flamethrower");
  
  ditto.copyAttackAndStoreIt(char, "flamethrower");