//import classes
const Fruit = require('../app/fruit');
const Apple = require('../app/apple');
const Cheese = require('../app/cheese');
const Sausage = require('../app/sausage');

//Tests fruit.js
describe('Fruit', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    afterEach(() => {
      consoleSpy.mockClear();
    });

    test('#setFruit will set fruit name if a string is provided', () => {
        const apple = new Fruit();
        apple.setFruit('apple');

        expect(apple.getFruit()).toBe('apple');
    })

    test('#setfruit threw an error message if a number is provided', () => {
        const orange = new Fruit();

        expect(() => orange.setFruit(50)).toThrow('50 is not a valid string');
      });
});

//tests Apple.js
describe('Apple', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    afterEach(() => {
      consoleSpy.mockClear();
    });

    test('setAmmount will return a number if number is not a decimal or negative number', () => {
        const apple = new Apple();
        apple.setAmmount(50);

        expect(apple.getAmmount()).toBe(50);
    })


    test('#setAmmount logs an error message if a whole number is not given', () => {
        const apple = new Apple();

        expect(() => apple.setAmmount(10.6)).toThrow('10.6 is not a whole number greater than zero');
        
    });

    test('#setAmmount logs an error message if a whole number is not given', () => {
        const apple = new Apple();

        expect(() => apple.setAmmount(-7)).toThrow('-7 is not a whole number greater than zero');
        
    });
});

//tests Cheese.js
describe('Cheese', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    afterEach(() => {
      consoleSpy.mockClear();
    });

    test('setCheese will return if a valid string', () => {
        const muenster = new Cheese();
        muenster.setCheese('muenster')

        expect(muenster.getCheese()).toBe('muenster');
    })

    test('setCheese will throw error if not a valid string', () => {
        const muenster = new Cheese();


        expect(() => muenster.setCheese(25)).toThrow('25 is not a valid string');
    })


    test('setIsSmoked will return true or false if input is a boolean', () => {
        const muenster = new Cheese();
        muenster.setIsSmoked(true);

        expect(muenster.getIsSmoked()).toBe(true);
    })

    test('setIsSmoked will return true or false if input is a boolean', () => {
        const muenster = new Cheese();
        muenster.setIsSmoked(false);

        expect(muenster.getIsSmoked()).toBe(false);
    })


    test('setIsSmoked will throw an error if input is not a boolean', () => {
        const muenster = new Cheese();
       
        expect(() => muenster.setIsSmoked('hello')).toThrow('hello is not a boolean');
    })

});

//tests Sausage.js
describe('Sausage', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    afterEach(() => {
      consoleSpy.mockClear();
    });

    test('setSausage will return if a valid string', () => {
        const brautz = new Sausage();
        brautz.setSausage('brautz')

        expect(brautz.getSausage()).toBe('brautz')
    })

    test('setSausage will throw error if not a valid string', () => {
        const brautz = new Sausage();

        expect(() => brautz.setSausage(true)).toThrow('true is not a valid string');
    })


    test('setIsSmoked will return true or false if input is a boolean', () => {
        const brautz = new Sausage();
        brautz.setIsSmoked(true);

        expect(brautz.getIsSmoked()).toBe(true);
    })

    test('setIsSmoked will return true or false if input is a boolean', () => {
        const brautz = new Sausage();
        brautz.setIsSmoked(false);

        expect(brautz.getIsSmoked()).toBe(false);
    })


    test('setIsSmoked will throw an error if input is not a boolean', () => {
        const brautz = new Sausage();
       
        expect(() => brautz.setIsSmoked('hello')).toThrow('hello is not a boolean');
    })

});

// describe('Book', () => {
//     const consoleSpy = jest.spyOn(console, 'log');
  
//     afterEach(() => {
//       consoleSpy.mockClear();
//     });

// test('', () => {

// })
// });

//blank copy for tests
// describe('Book', () => {
//     const consoleSpy = jest.spyOn(console, 'log');
  
//     afterEach(() => {
//       consoleSpy.mockClear();
//     });

// test('', () => {

// })
// });

