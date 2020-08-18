/*Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
Lakukan FOR LOOP pada Javascript.*/


for (let user = 1; user <= 100; user ++) {
    console.log(user);
}

/*2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
Nilai awal = 0
Pengulangan = 10 kali
Nilai awal ditambah 2 setiap pengulangan
Tampilan hasil penambahan pada setiap pengulangan */

for (let count = 0; count < 20; count +=2){
    console.log(count);
}

/*3.  Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan */

for (let i = 0; i <= 20; i ++){
    if ((i%2)==1){
        console.log(i + " adalah angka ganjil")
    } else {
        console.log(i + " adalah angka genap")
    }
}

/*4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan
sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)*/

let tanya = confirm ("Apakah anda mau mengulang?");
let hitung = 0;

while (true){
    tanya = confirm ("Apakah anda mau mengulang?");
    hitung ++;
    if (tanya == false){
        alert("anda telah mengulang sebanyak " + hitung + " kali")
    }
}


/*5. Buat sebuah program kuis.
Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
Lakukan pengecekan apakah jawaban dari user sudah benar
Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar*/

let kuis
do {
    kuis = prompt("Sebutkan kepanjangan dari nama IB!")
} while (kuis != "impact byte")
alert("jawaban benar!")
