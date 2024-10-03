// 1
const panjang: number = 5
const lebar: number = 3
const luas = panjang*lebar
console.log(luas);
// 2
const keliling = 2*(panjang + lebar);
console.log(keliling);
// 3
const radius = 5
const diameter = radius*2
console.log(diameter);
const keliling2 = 2*Math.PI*radius
console.log(keliling2);
const luasL = Math.PI*radius**2
console.log(luasL);
// 4
const a = 80
const b = 65
const total_angles = 180
console.log(total_angles-(a+b));
// 5
const hari1 = 400
const totalhari = 30
const totaltahun = 365
const hasiltahun = Math.round(hari1/totaltahun)
const hasilbulan = Math.round((hari1%totaltahun)/totalhari)
const hasilhari = ((hasilbulan)%totalhari)
console.log(`${hasiltahun} tahun, ${hasilbulan} bulan, ${hasilhari} hari`)

const hari2 = 366  
const hasiltahun2 = Math.round(hari2/totaltahun)
const hasilbulan2 = Math.round((hari2%totaltahun)/totalhari)
const hasilhari2 = ((hasilbulan2)%totalhari)
console.log(hasiltahun2 + " year, " + hasilbulan2 + " month, " +hasilhari2 +" days");
//6
const today = new Date(2022, 0, 20);
const nextday = new Date(2022, 0, 22);
const ms = 24 * 60 * 60 * 1000
const daysleft = Math.abs((today.getTime() - nextday.getTime())/ms)
console.log(daysleft);

