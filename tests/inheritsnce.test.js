//import class
const Apple = require('../app/apple');

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