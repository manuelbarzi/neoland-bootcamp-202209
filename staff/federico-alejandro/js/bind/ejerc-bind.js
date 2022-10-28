function Ford() {
    this.model = 'Ford';
    this.charac = function(){
        console.log(this.model + ' 🚗' + ' and new' + ' 🔊' );
    };
    
}

  function Dacia(){
    this.model ='Dacia';
    this.newModelo = function (carToSteal, characToSteal) {
        const characBindedToDacia = carToSteal[characToSteal].bind(this);

        this[characToSteal] = characBindedToDacia;
    };
    this.copyModel = function (carToCopy, characToCopy) {
        carToCopy[characToCopy].apply(this);
        
    };
}
const fordcar = new Ford();
const daciacar = new Dacia();
daciacar.copyModel(fordcar, 'charac');
daciacar.newModelo(fordcar, 'charac');
