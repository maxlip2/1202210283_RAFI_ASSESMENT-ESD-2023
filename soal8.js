
const produk = [
    { nama: 'TV', kategori: 'elektronik', harga: 1000 },
    { nama: 'headphone', kategori: 'elektronik', harga: 200 },
    { nama: 'baju', kategori: 'fashion', harga: 50 },
    { nama: 'gitar', kategori: 'musik', harga: 300 },
    { nama: 'sepatu', kategori: 'olahraga', harga: 80 },
    { nama: 'kamera', kategori: 'elektronik', harga: 600 },
  ];
  
  const pelanggan = [
    { nama: 'Rina', minat: ['elektronik', 'musik'], beli: ['TV', 'headphone'] },
    { nama: 'Budi', minat: ['fashion', 'musik'], beli: ['baju', 'gitar'] },
    { nama: 'Hartono', minat: ['olahraga', 'elektronik'], beli: ['sepatu', 'kamera'] },
  ];
  
  function rekomendasiProduk(namaPelanggan) {
    const pelangganTerpilih = pelanggan.find(p => p.nama === namaPelanggan);
  
    if (!pelangganTerpilih) {
      return [];
    }
  
    const minatPelanggan = new Set(pelangganTerpilih.minat.flat());
    const beliPelanggan = new Set(pelangganTerpilih.beli);
    const produkRekomendasi = [];
  
    for (const minat of minatPelanggan) {
      const produkTersedia = produk
        .filter(item => item.kategori === minat && !beliPelanggan.has(item.nama))
        .map(item => item.nama);
      produkRekomendasi.push(...produkTersedia);
    }
  
    return produkRekomendasi;
  }
  
  const hasilRekomendasi = rekomendasiProduk("Rina");
  console.log(hasilRekomendasi);
  