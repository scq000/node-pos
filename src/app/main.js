var POS = require('./model/pos.js');
var Scanner = require('./model/scanner.js');
var Cart  = require('./model/cart.js');
var Utils = require('./model/utils.js');


function printReceipt(tags) {

  var cart = new Cart();
  var scanner = new Scanner();
  var pos = new POS(cart,scanner);
  pos.scan(tags);

  pos.discount(Utils.loadPromotions()[0]);

  var receipt = pos.getReceipt();

  console.log(receipt);

}


module.exports.main = printReceipt;
