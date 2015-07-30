

function PromotionCalculator(promotion,cart){
  this.promotion = promotion;
  this.cart = cart;
}

PromotionCalculator.prototype.getDiscountItemsDetial = function (){
  var Strategy = require('./strategy.js');
  if(this.promotion.type === 'BUY_TWO_GET_ONE_FREE'){
      return Strategy.buyTwoGetOneFree(this.promotion.barcodes,this.cart);
  }
};

module.exports = PromotionCalculator;
