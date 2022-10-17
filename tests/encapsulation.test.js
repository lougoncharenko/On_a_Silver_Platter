//import classes
const Fruit = require('../app/fruit');
const Apple = require('../app/apple');
const Cheese = require('../app/cheese');

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

    test('setAmmount will return a number if number is not a decimal or negative number', () => {
        const muenster = new Cheese();
        muenster.setCheese('muenster')

        expect(muenster.getCheese()).toBe('muenster');
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

