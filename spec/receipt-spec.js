var Receipt = require('../src/main/model/receipt.js');
var ReceiptItem = require('../src/main/model/receipt-item.js');
var CartItem = require('../src/main/model/cart-item.js');
var Item = require('../src/main/model/item.js');
var Utils = require('../src/main/model/utils.js');

describe('Receipt', function() {

  var receipt;

  beforeEach(function() {
    receipt = new Receipt();
    receipt.receiptItems = [
      new ReceiptItem(new CartItem(new Item('ITEM000000', '可口可乐', '瓶', 3.00), 2), 0),
      new ReceiptItem(new CartItem(new Item('ITEM000001', '雪碧', '瓶', 3.00), 3), 0),
      new ReceiptItem(new CartItem(new Item('ITEM000002', '苹果', '斤', 5.50), 5), 5.5)
    ];
  });

  describe('#getAmount()', function() {
    it('should return correct price', function() {
      expect(receipt.getAmount()).toBe(37);
    });
  });

  describe('#getSavedMoney()', function() {
    it('should return correct price', function() {
      expect(receipt.getSavedMoney()).toBe(5.5);
    });
  });

  describe('#toString()', function() {

    var expectText = '***<没钱赚商店>收据***\n' +
      '打印时间：' + Utils.getCurrentTime() + '\n' +
      '----------------------\n' +
      '名称：可口可乐，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
      '名称：雪碧，数量：3瓶，单价：3.00(元)，小计：9.00(元)\n' +
      '名称：苹果，数量：5斤，单价：5.50(元)，小计：22.00(元)\n' +
      '----------------------\n' +
      '总计：37.00(元)\n' +
      '节省：5.50(元)\n' +
      '**********************';

    it('should return correct string', function() {
      expect(receipt.toString()).toBe(expectText);
    });
  });

});
