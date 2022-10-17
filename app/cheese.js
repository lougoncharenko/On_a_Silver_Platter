class Cheese {
    constructor(cheese, IsSmoked){
        this.cheese = cheese;
        this.IsSmoked = IsSmoked;
    }

    getCheese(){
        return this.cheese;
    }

    setCheese(cheese){
        if (typeof cheese == 'string'){
            this.cheese= cheese;
          } else {
              throw `${cheese} is not a valid string`;
          }
    }

    getIsSmoked(){
        return this.isSmoked;
    }

    setIsSmoked(isSmoked){
        if (typeof isSmoked == 'boolean'){
            this.isSmoked= isSmoked;
          } else {
              throw `${isSmoked} is not a boolean`;
          }
    }

    eat(){
        if (this.isSmoked == true){
            return `You are eating a smoked ${this.cheese}`;
        } else {
            return `You are eating ${this.cheese}`;
        }    
    }

    toString(){
        
    }

}

module.exports = Cheese; 