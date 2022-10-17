class Sausage {
    constructor(sausage, IsSmoked){
        this.sausage = sausage;
        this.IsSmoked = IsSmoked;
    }

    getSausage(){
        return this.sausage;
    }

    setSausage(sausage){
        if (typeof sausage == 'string'){
            this.sausage= sausage;
          } else {
              throw `${sausage} is not a valid string`;
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
            return `You are eating a smoked ${this.sausage}`;
        } else {
            return `You are eating a ${this.sausage}`;
        }    
    }

}

module.exports = Sausage; 