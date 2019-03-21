/* Your code goes here */

var customerName = 'bob';
const leastFavouriteCustomer = 'helen';
var bestCustomer

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
   bestCustomer = 'not bob'
}

function overWriteBestCustomer() {
   bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  leastFavouriteCustomer = 'john';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'joe';
  // let favoriteCustomer = 'hank';
  throw new SyntaxError()
}