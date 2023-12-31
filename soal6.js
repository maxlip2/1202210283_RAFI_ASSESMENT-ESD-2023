const menu = [
    { nama: 'Ayam Goreng Krispi', tipe: 'Makanan', harga: 15000 },
    { nama: 'Ayam Puk Puk (Bukan di geprek)', tipe: 'Makanan', harga: 13000 },
    { nama: 'Ayam Bakar', tipe: 'Makanan', harga: 20000 },
    { nama: 'Es Teh', tipe: 'Minuman', harga: 5000 },
    { nama: 'Es Jeruk', tipe: 'Minuman', harga: 7000 },
  ];
  
  function hitungBiaya(pesanan) {
    let totalBiaya = 0;
  
    pesanan.forEach(item => {
      const menuTerpilih = menu.find(menuItem => menuItem.nama === item.nama);
      if (menuTerpilih) {
        if (menuTerpilih.tipe === 'Makanan') {
          totalBiaya += menuTerpilih.harga * (1 + 0.05);
        } else if (menuTerpilih.tipe === 'Minuman') {
          totalBiaya += menuTerpilih.harga * (1 + 0.03);
        }
      }
    });
  
    totalBiaya *= 1.15;
  
    return totalBiaya;
  }
  const pesananRehan = [
    { nama: 'Ayam Bakar', jumlah: 2 },
    { nama: 'Es Teh', jumlah: 1 },
  ];
  
  const pesananAmba = [
    { nama: 'Ayam Puk Puk (Bukan di geprek)', jumlah: 1 },
    { nama: 'Es Teh', jumlah: 3 },
  ];
  
  const pesananFaiz = [
    { nama: 'Ayam Goreng Krispi', jumlah: 1 },
    { nama: 'Ayam Puk Puk (Bukan di geprek)', jumlah: 1 },
    { nama: 'Ayam Bakar', jumlah: 1 },
    { nama: 'Es Teh', jumlah: 1 },
    { nama: 'Es Jeruk', jumlah: 1 },
  ];
  const biayaRehan = hitungBiaya(pesananRehan);
  const biayaAmba = hitungBiaya(pesananAmba);
  const biayaFaiz = hitungBiaya(pesananFaiz);

  console.log('Biaya Rehan Whangsap: Rp ' + biayaRehan.toFixed(2));
  console.log('Biaya Amba Roni: Rp ' + biayaAmba.toFixed(2));
  console.log('Biaya Faiz Ngawi: Rp ' + biayaFaiz.toFixed(2));
  