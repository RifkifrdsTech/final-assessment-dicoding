class Inventory {
    constructor() {
      this.items = []; // Menampung daftar item
    }
  
    // Method untuk menambahkan item ke dalam inventaris
    addItem(item) {
      this.items.push(item);
    }
  
    // Method untuk menghapus item berdasarkan ID
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    // Method untuk menampilkan daftar item dalam inventaris
    listItems() {
      return this.items.map(item => item.displayDetails()).join('\n');
    }
  }
  
  export default Inventory;
  