const Fruit = require('./fruit');

class Banana extends Fruit {
    constructor() {
        super();
    }

    eat(){
        return `You eat a ${this.fruit}`
    }
}


module.exports = Banana;
