//import classes
const Fruit = require('../app/fruit');

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

//blank copy for tests
// describe('Book', () => {
//     const consoleSpy = jest.spyOn(console, 'log');
  
//     afterEach(() => {
//       consoleSpy.mockClear();
//     });

// test('', () => {

// })
// });

