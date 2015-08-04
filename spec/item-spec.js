var Item = require('../src/main/model/item.js');

describe('Item', function() {

  describe('Constructer', function() {
    it('should work correctly', function() {
      var item1 = new Item('ITEM000000', '可口可乐', '瓶', 3.00);
      var item2 = new Item('ITEM000002', '苹果', '斤');

      expect(item1.barcode).toBe('ITEM000000');
      expect(item1.name).toBe('可口可乐');
      expect(item1.unit).toBe('瓶');
      expect(item1.price).toBe(3.00);
      expect(item2.price).toBe(0);
    });
  });

  describe('#find()', function() {
    it('should return item by barcode', function () {
      expect(Item.find('ITEM000000')).toEqual(new Item('ITEM000000', '可口可乐', '瓶', 3.00));
    });
  });

});
