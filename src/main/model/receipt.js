function Receipt(){
  this.receiptItems = [];
}

Receipt.prototype.setDiscounter = function (discounter) {
  this.receiptItems = discounter.getDiscountItemsDetial();
};

Receipt.prototype.getReceiptItemsString = function () {
  var receiptItemsString = '';

  this.receiptItems.forEach(function (receiptItem) {
    receiptItemsString += receiptItem.getString();
  });

  return receiptItemsString;
};

Receipt.prototype.getAmount = function (cart) {
  var amount = 0;

  this.receiptItems.forEach(function (receiptItem) {
    amount += receiptItem.getSubTotal();
  });

  return amount;
};

Receipt.prototype.getSavedMoney = function () {
  var savedMoney = 0;

  this.receiptItems.forEach(function (receiptItem) {
    savedMoney += receiptItem.discount;
  });

  return savedMoney;
};

Receipt.prototype.toString = function () {
  var Utils = require('./utils.js');

  return '***<没钱赚商店>收据***\n' +
  '打印时间：' + Utils.getCurrentTime() +'\n' +
  '----------------------\n' +
    this.getReceiptItemsString() +
  '----------------------\n' +
  '总计：' + Utils.formatPrice(this.getAmount()) + '(元)\n' +
  '节省：' + Utils.formatPrice(this.getSavedMoney()) + '(元)\n' +
  '**********************';
};

module.exports = Receipt;
