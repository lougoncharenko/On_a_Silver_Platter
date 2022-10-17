class Cheese {
    constructor(cheese, IsSmoked){
        this.cheese = cheese;
        this.IsSmoked = IsSmoked;
    }

    getCheese(){
        return this.cheese
    }

    setCheese(cheese){
        if (typeof cheese == 'string'){
            this.cheese= cheese
          } else {
              throw `${cheese} is not a valid string`
          }
    }

}

module.exports = Cheese; 