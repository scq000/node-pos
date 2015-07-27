var PromotionCalculator = require('./promotion-calculator.js');
var Utils = require('./utils.js');

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
  var PromotionCalculator = require('./promotion-calculator.js');

  var receipt = new Receipt();
  var promotions = Utils.loadPromotions();

  for(var i = 0; i < promotions.length; i++) {
    var discounter = new PromotionCalculator(promotions[i],this.cart);
    receipt.setDiscounter(discounter);
  }

  return receipt.toString();
};

module.exports = POS;
