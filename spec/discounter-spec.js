var Discounter = require('../src/main/model/discounter.js');
var Promotion = require('../src/main/model/promotion.js');
var Cart = require('../src/main/model/cart.js');
var CartItem = require('../src/main/model/cart-item.js');
var Item = require('../src/main/model/item.js');
var ReceiptItem = require('../src/main/model/receipt-item.js');

describe('Discounter', function() {

  var discounter;
  var promotion;
  var cart;

  beforeEach(function() {
    promotion = new Promotion('BUY_TWO_GET_ONE_FREE', [
      'ITEM000000',
      'ITEM000002'
    ]);
    cart = new Cart();
    cart.cartItems = [
      new CartItem(new Item('ITEM000000', '可口可乐', '瓶', 3.00), 2),
      new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 3),
      new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50), 5)
    ];
    discounter = new Discounter(promotion, cart);
  });

  describe('#getReceiptItems()', function() {
    it('should return receiptItems', function() {
      var expectItems = [
        new ReceiptItem(new CartItem(new Item('ITEM000000', '可口可乐', '瓶', 3.00), 2), 0),
        new ReceiptItem(new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 3), 0),
        new ReceiptItem(new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50), 5), 5.5)
      ];
      expect(discounter.getReceiptItems()).toEqual(expectItems);
    });
  });
});
