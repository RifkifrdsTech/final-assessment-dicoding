function fibonacci(n) {
    // Kasus dasar: jika n adalah 0, kembalikan [0]
    if (n === 0) {
      return [0];
    }
    // Kasus dasar: jika n adalah 1, kembalikan [0, 1]
    if (n === 1) {
      return [0, 1];
    }
    // Rekursi: panggil fibonacci(n-1) dan tambahkan fibonacci(n-1)[n-1] + fibonacci(n-2) ke dalam array
    const fibSeries = fibonacci(n - 1);
    fibSeries.push(fibSeries[n - 1] + fibSeries[n - 2]);
    return fibSeries;
  }

// Jangan hapus kode di bawah ini!
export default fibonacci;
