function POS(cart,scanner) {
  this.cart = cart;
  this.scanner = scanner;
}

POS.prototype.scan = function (tags){
  for(var i = 0; i < tags.length; i++) {
    var cartItem = this.scanner.scan(tags[i]);
    this.cart.addCartItem(cartItem);
  }
};

POS.prototype.getReceipt = function () {
  var Receipt = require('./receipt.js');
  var Utils = require('./utils.js');
  var Discounter = require('./discounter.js');

  var receipt = new Receipt();
  var promotions = Utils.loadPromotions();

  for(var i = 0; i < promotions.length; i++) {
    var discounter = new Discounter(promotions[i],this.cart);
    receipt.setDiscounter(discounter);
  }

  return receipt.toString();
};

module.exports = POS;
