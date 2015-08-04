var Strategy = require('../src/main/model/strategy.js');
var Cart = require('../src/main/model/cart.js');
var CartItem = require('../src/main/model/cart-item.js');
var Item = require('../src/main/model/item.js');
var ReceiptItem = require('../src/main/model/receipt-item.js');

describe('Strategy', function() {
  describe('#buyTwoGetOneFree(barcodes,cart)', function() {

    it('should return correct receipt items ', function() {
      var expectItems = [
        new ReceiptItem(new CartItem(new Item('ITEM000000', '可口可乐', '瓶', 3.00), 2), 0),
        new ReceiptItem(new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 3), 0),
        new ReceiptItem(new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50), 5), 5.5)
      ];

      var barcodes = ['ITEM000000', 'ITEM000002'];
      var cart = new Cart();
      cart.cartItems = [
        new CartItem(new Item('ITEM000000', '可口可乐', '瓶', 3.00), 2),
        new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 3),
        new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50), 5)
      ];

      expect(Strategy.buyTwoGetOneFree(barcodes, cart)).toEqual(expectItems);
    });
  });
});
