//import class
const Apple = require('../app/apple');
const Banana = require('../app/banana');

describe('Apple', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    afterEach(() => {
      consoleSpy.mockClear();
    });

    test('apple inherits fruits toString(), setFruit(), getFruit() methods', () => {
        const apple = new Apple();
        apple.setFruit('apple');
        apple.getFruit();
        
        expect(apple.toString()).toBe('apple is tasty!')

    })

    test('using the eat() method with amount of 30', () => {
        const apple = new Apple();
        apple.setFruit('apple')
        apple.setAmmount(30)

        expect(apple.eat()).toBe('Customer bought 30 apples to eat')
    })
});


describe('Banana', () => {
    const consoleSpy = jest.spyOn(console, 'log');
  
    afterEach(() => {
      consoleSpy.mockClear();
    });

    test('Banana inherits fruits toString(), setFruit(), getFruit() methods', () => {
        const banana = new Banana();
        banana.setFruit('banana');
        banana.getFruit();
        
        expect(banana.toString()).toBe('banana is tasty!')

    })

    test('Banana inherits eat() method', () => {
        const banana = new Banana();
        banana.setFruit('banana');
        banana.getFruit();
        
        expect(banana.eat()).toBe('You eat a banana')

    })
});


