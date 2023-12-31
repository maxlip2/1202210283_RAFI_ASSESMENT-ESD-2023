function cariPencuri(urutanKedatangan, fotoXiao) {
    const teman = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];
  
    let kueHilang = false;
  
    for (let i = 0; i < urutanKedatangan.length; i++) {
      const temanSekarang = teman[i];
  
      switch (temanSekarang) {
        case 'Ningguang':
          if (!kueHilang) {
            kueHilang = true;
            console.log(`${temanSekarang} adalah pencuri!`);
            return temanSekarang;
          }
          break;
  
        case 'Hutao':
          break;
  
        case 'Xiao':
          if (!kueHilang) {
            kueHilang = true;
            console.log(`${temanSekarang} adalah pencuri!`);
            return temanSekarang;
          }
          break;
  
        case 'Childe':
          if (!kueHilang) {
            kueHilang = true;
            console.log(`${temanSekarang} adalah pencuri!`);
            return temanSekarang;
          }
          break;
      }
    }
  
    if (!kueHilang) {
      console.log('Semua teman memberikan kado tanpa mengambil kue.');
    }
  
    return null;
  }
  
  const urutanKedatangan = ['Ningguang', 'Hutao', 'Xiao', 'Childe'];
  
  const fotoXiao = true;
  
  const pencuri = cariPencuri(urutanKedatangan, fotoXiao);
  