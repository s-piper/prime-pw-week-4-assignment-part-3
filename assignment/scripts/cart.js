console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(nameOfItem) {
  console.log('in addItem', nameOfItem);
  //push new items into basket array.
  basket.push(nameOfItem);
  return true;
} //end addItem
addItem ('banana');
addItem ('orange');
addItem ('grapes');
console.log(`Added 3 items, should return true: ${addItem()}`);
