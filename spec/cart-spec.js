var Cart = require('../src/main/model/cart.js');
var CartItem = require('../src/main/model/cart-item.js');
var Item = require('../src/main/model/item.js');

describe('Cart', function() {

  var cart;

  beforeEach(function () {
    cart = new Cart();
    cart.cartItems = [
      new CartItem(new Item('ITEM000000', '可口可乐', '瓶', 3.00),2),
      new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00),3),
      new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50),5)
    ];
  });

  describe('#findCartItem()', function () {

    it('should return cartItem by barcode', function() {
      expect(cart.findCartItem('ITEM000002')).toEqual(new CartItem(new Item('ITEM000002', '苹果', '斤',5.50), 5));
    });
  });

  describe('#addCartItem()', function () {

    it('should add a cartItem in cart', function () {
      cart.addCartItem(new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00), 2));
      expect(cart.cartItems[3]).toEqual(new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00), 2));
    });
  });

  describe('#getAmount()', function () {

    it('should return total price', function () {
      expect(cart.getAmount()).toBe(42.5);
    });
  });

});
