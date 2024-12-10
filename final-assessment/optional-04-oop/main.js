import Item from './Item.js';
import Inventory from './Inventory.js';

const inventory = new Inventory();

// Menambahkan item ke inventaris
const item1 = new Item(1, 'Laptop', 10, 1000);
const item2 = new Item(2, 'Mouse', 50, 20);

inventory.addItem(item1);
inventory.addItem(item2);

console.log('Initial Inventory:');
console.log(inventory.listItems());


// Memperbarui detail item1
item1.updateDetails('Laptop', 8, 950);

console.log('\nInventory after update:');
console.log(inventory.listItems());


// Menghapus item dengan ID 2
inventory.removeItem(2);

console.log('\nInventory after removal:');
console.log(inventory.listItems());

