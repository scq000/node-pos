function Strategy() {
}

Strategy.buyTwoGetOneFree = function (barcodes,cart) {
  var ReceiptItem = require('./receipt-item.js');
  var receiptItems = [];

  cart.cartItems.forEach(function(cartItem) {
    var isExisted = (barcodes.indexOf(cartItem.item.barcode) != -1);
    var discount = isExisted ? Math.floor(cartItem.count / 3) * cartItem.item.price
                             : 0;
    var receiptItem = new ReceiptItem(cartItem, discount);
    receiptItems.push(receiptItem);
  });

  return receiptItems;
};

module.exports = Strategy;
