var gambar = document.getElementById("gambar");
var judul = document.getElementById("title");
var background = document.getElementById("sub-container");
var keterangan = document.getElementById("sub-title");
var hilang = document.getElementById("group-button");

function bener(){
    gambar.src = 'assets/image 2.png';
    judul.innerHTML = 'Anda Benar!';
    background.style.backgroundColor = '#6FD240';
    keterangan.innerHTML = 'Anda adalah seorang Mahasiswa';
    hilang.remove();
}
function salah(){
    gambar.src = 'assets/image 3.png';
    judul.innerHTML = 'Anda Berbohong!';
    background.style.backgroundColor = '#E12E2E';
    keterangan.innerHTML = 'Anda adalah seorang Teknisi';
    hilang.remove();
}