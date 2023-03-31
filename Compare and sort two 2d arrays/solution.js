// two arrays inventory and update array
// compare both and update inventory with update array and also add their quantities together
// return the inventory in alphabetic order accounting for the first alphabet only

/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.  Example arrays:

arr1 = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
]

arr2 = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
]

Update the current existing inventory item quantities (in `arr1`). If an item cannot be found, add the new item and quantity 
into the inventory array. The returned inventory array should be in alphabetical order by item.
*/


function answer (inventory, updated_inventory) {
  // create a data dictionary
  const final_inventory = {};

  // loop through the first array and update the data dictionary
  inventory.forEach(item => {
    final_inventory[item[1]] = item[0];
  });

  // loop through the second array and update the data dictionary
  updated_inventory.forEach(item => {
    //can it be found in the data dictionary if yes then update if no then add new value
    if(final_inventory[item[1]] !== undefined) {
      // let old final_inventory[item[0]] 
      final_inventory[item[1]] = final_inventory[item[1]] + item[0];
    }
    else {
      final_inventory[item[1]] = item[0];
    }
  });

  // sort by alphabetic order
  const solution = []
  for (const key in final_inventory) {
    solution.push([final_inventory[key], key])
  }

  // return solution.sort((a,b) => a[1].localeCompare(b[1]));
  
  // ALTERNATIVE SORT
  return solution.sort((a, b) => {
    const charCodeA = a[1].charCodeAt(0);
    const charCodeB = b[1].charCodeAt(0);
    return charCodeA - charCodeB;
  });
}

const arr1 = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
]

const arr2 = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
]

console.log(answer(arr1, arr2));
