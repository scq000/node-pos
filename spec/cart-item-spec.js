var CartItem = require('../src/main/model/cart-item.js');
var Item = require('../src/main/model/item.js');

describe('CartItem', function() {

  describe('#getSubTotal()', function() {

    it('should return correct subTotal price', function () {
        var cartItem = new CartItem(new Item('ITEM000002', '苹果', '斤',4.00), 5);
        expect(cartItem.getSubTotal()).toBe(20);
    });
  });
});
