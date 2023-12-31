function cekDuplikat(data) {
    let set = new Set();
  
    for (let angka of data) {
      if (set.has(angka)) {
        return true;
      }
  
      set.add(angka);
    }
  
    return false;
  }
  
  const dataAngka = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 20, 17, 19];
  const hasil = cekDuplikat(dataAngka);
  
  console.log(hasil);
  