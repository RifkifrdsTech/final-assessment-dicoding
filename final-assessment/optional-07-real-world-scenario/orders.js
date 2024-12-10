// Menggunakan fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menampung data pesanan
let orders = [];

// Fungsi untuk menambahkan pesanan
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0); // Hitung total harga pesanan
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu', // Status awal pesanan adalah "Menunggu"
  };
  
  orders.push(newOrder); // Menambahkan pesanan ke dalam array orders
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang berstatus "Selesai"
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // Filter pesanan yang sudah selesai
    .reduce((total, order) => total + order.totalPrice, 0); // Jumlahkan total harga pesanan
}

// Fungsi untuk menghapus pesanan berdasarkan ID
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id); // Hapus pesanan dengan ID yang sesuai
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
