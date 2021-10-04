/*
jumlahBurungAwal = 6969;
burungMati = 0.111 * jumlahBurungAwal;
jumlahSebelum21HariPertama = jumlahBurungAwal - burungMati;
jumlahBurung21HariPertama = jumlahSebelum21HariPertama + jumlahSebelum21HariPertama;

console.log(burungMati);
console.log(jumlahSebelum21HariPertama);
console.log(jumlahBurung21HariPertama);
*/
hariAkhir = 441;
hariHasil = hariAkhir / 21;
jumlahBurungAwal = 6969;
for (i = 1;  i <= hariHasil; i++){
	burungMati = 0.111 * jumlahBurungAwal;
	jumlahBurungAwal = jumlahBurungAwal - burungMati;
	jumlahBurungAwal = jumlahBurungAwal + jumlahBurungAwal;
}
console.log("Jumlah Burung Lovebird setelah " + hariAkhir + " adalah :"+ Math.ceil(jumlahBurungAwal));