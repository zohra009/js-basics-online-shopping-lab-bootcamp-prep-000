var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemObject = {itemName: item, itemPrice: Math.floor(Math.random() * 100)} 
getCart().push(itemObject)
return `${itemObject.itemName} has been added to your cart.`
}

function viewCart() {
  if (getCart().length===0) {
    return `Your shopping cart is empty.`
  }
  for (let i=0; i<getCart().length; i++) {
    return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
  }
}  
function total(cart) {
  var sum = 0 
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  if (arguments[0] === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var sum = total()
    setCart([])
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}