var POS = require('./model/pos.js');
var Scanner = require('./model/scanner.js');
var Cart  = require('./model/cart.js');

function printReceipt(tags) {
  var cart = new Cart();
  var scanner = new Scanner();
  var pos = new POS(cart,scanner);

  pos.scan(tags);

  var receipt = pos.getReceipt();

  console.log(receipt);

}

module.exports.main = printReceipt;
