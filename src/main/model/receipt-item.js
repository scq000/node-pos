function ReceiptItem(cartItem,discount) {
  this.cartItem = cartItem;
  this.discount = discount;
}

ReceiptItem.prototype.getSubTotal = function() {
  return this.cartItem.getSubTotal() - this.discount;
};

ReceiptItem.prototype.getString = function() {
  var Utils = require('./utils.js');

  return '名称：' + this.cartItem.item.name +
    '，数量：' + this.cartItem.count + this.cartItem.item.unit +
    '，单价：' + Utils.formatPrice(this.cartItem.item.price) +
    '(元)，小计：' + Utils.formatPrice(this.getSubTotal()) + '(元)\n';
};

module.exports = ReceiptItem;
