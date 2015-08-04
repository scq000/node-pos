function Cart() {
  this.cartItems = [];
}

Cart.prototype.findCartItem = function(barcode) {
  for (var i = 0; i < this.cartItems.length; i++) {
    if (this.cartItems[i].item.barcode === barcode) {
      return this.cartItems[i];
    }
  }
};

Cart.prototype.addCartItem = function(cartItem) {
  var existed = this.findCartItem(cartItem.item.barcode);

  if (!existed) {
    this.cartItems.push(cartItem);
  } else {
    existed.count += cartItem.count;
  }
};

Cart.prototype.getAmount = function() {
  var amount = 0;

  this.cartItems.forEach(function(cartItem) {
    amount += cartItem.getSubTotal();
  });

  return amount;
};

module.exports = Cart;
