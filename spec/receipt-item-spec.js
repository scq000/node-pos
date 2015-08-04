var ReceiptItem = require('../src/main/model/receipt-item.js');
var CartItem = require('../src/main/model/cart-item.js');
var Item = require('../src/main/model/item.js');

describe('ReceiptItem', function () {

  var receiptItem;

  beforeEach(function () {
    receiptItem = new ReceiptItem( new CartItem(new Item('ITEM000002', '苹果', '斤',4.00), 5),3);
  });

  describe('#getSubTotal()', function () {
    it('should return receipt item price', function () {
      expect(receiptItem.getSubTotal()).toBe(17);
    });
  });

  describe('#getString()', function () {
    it('should return the information of receipt item', function () {
      expect(receiptItem.getString()).toBe('名称：苹果，数量：5斤，单价：4.00(元)，小计：17.00(元)\n');
    });
  });

});
