const Fruit = require('./fruit');

class Apple extends Fruit {
    constructor(ammount) {
        super();

        this.ammount =ammount;
    }

    getAmmount() {
        return this.ammount;
    }

    setAmmount(ammount) {
        if (ammount % 1 === 0 && ammount > 0){
          this.ammount= ammount;
        } else {
            throw `${ammount} is not a whole number greater than zero`
        }

    }
}

module.exports = Apple;