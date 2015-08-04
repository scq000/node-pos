var Scanner = require('../src/main/model/scanner.js');
var CartItem = require('../src/main/model/cart-item.js');
var Item = require('../src/main/model/item.js');

describe('Scanner', function() {
  describe('#scan', function() {
    var scanner;

    beforeEach(function() {
      scanner = new Scanner();
    });

    it('should return a cartItem by standard tag', function() {
      expect(scanner.scan('ITEM000001')).toEqual(new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 1));
    });

    it('should return a cartItem by special tag', function() {
      expect(scanner.scan('ITEM000002-3')).toEqual(new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50), 3));
    });
  });
});
