console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(nameOfItem) {
  console.log('in addItem');
  //push new items into basket array.
  basket.push(nameOfItem);
  return true;
} //end addItem
console.log(`Adding banana, should return true: ${addItem('banana')}`);
console.log(`Adding orange, should return true: ${addItem('orange')}`);
console.log(`Adding grapes, should return true: ${addItem('grapes')}`);

function listItem(array){ //should list each item from basket
  for (let i = 0; i < array.length; i++) {
   console.log(`Expecting each item to be listed ${array[i]}`);

  }
}
console.log(listItem(basket));

function empty(array) {
  while (array.length > 0) {
    array.pop ();

  }
  return 'empty';
}
console.log(`Basket is now: ${empty(basket)}`);
console.log(listItem(basket));
