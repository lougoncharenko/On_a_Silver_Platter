class Fruit {
    constructor(){
        
    }

    getFruit() {
        return this.fruit;
    }

    setFruit(fruit) {
        if (typeof fruit == 'string'){
          this.fruit= fruit
        } else {
            throw `${fruit} is not a valid string`
        }

    }

    toString () {
        return (`${this.fruit} is tasty!`)
    }
}

module.exports = Fruit; 