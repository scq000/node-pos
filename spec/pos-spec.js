var POS = require('../src/main/model/pos.js');
var Cart = require('../src/main/model/cart.js');
var Scanner = require('../src/main/model/scanner.js');
var CartItem = require('../src/main/model/cart-item.js');
var Item = require('../src/main/model/item.js');

describe('POS', function () {

  var pos,cart,scanner,tags;

  beforeEach(function () {
    cart = new Cart();
    scanner = new Scanner();
    pos = new POS(cart,scanner);
    tags = [
     'ITEM000001',
     'ITEM000001',
     'ITEM000001',
     'ITEM000001',
     'ITEM000001',
     'ITEM000003-2',
     'ITEM000005',
     'ITEM000005',
     'ITEM000005'
   ];
  });

  describe('#scan(tags)', function () {

    it('should add cartItems to cart by scan tags', function () {
      var expectItems = [
        new CartItem(  new Item('ITEM000001', '雪碧', '瓶', 3.00),5),
        new CartItem(new Item('ITEM000003', '荔枝', '斤', 15.00),2),
        new CartItem(new Item('ITEM000005', '方便面', '袋', 4.50),3)
      ];
      pos.scan(tags);

      expect(cart.cartItems).toEqual(expectItems);
    });
  });

});
