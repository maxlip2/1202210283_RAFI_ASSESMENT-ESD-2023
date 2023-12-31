function hitungKombinasiUsername(namaLengkap) {
    const namaTanpaSpasi = namaLengkap.replace(/\s/g, '').toLowerCase();
    const panjangNama = Math.min(namaTanpaSpasi.length, 6);
    let jumlahKombinasi = 0;
  
    for (let panjang = 1; panjang <= panjangNama; panjang++) {
      jumlahKombinasi += factorial(panjangNama) / (factorial(panjang) * factorial(panjangNama - panjang));
    }
    return jumlahKombinasi;
  }
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  const namaLengkap = "Naip Lovyu";
  const kombinasiUsername = hitungKombinasiUsername(namaLengkap);
  
  console.log(`Jumlah kombinasi username yang mungkin: ${kombinasiUsername}`);
  