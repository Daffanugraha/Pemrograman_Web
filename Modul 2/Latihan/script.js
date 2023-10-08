document.getElementById('jumlahkan').addEventListener('click', function() {
    // Ambil nilai dari input
    var angka1 = parseFloat(document.getElementById('angka1').value);
    var angka2 = parseFloat(document.getElementById('angka2').value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        alert('Masukkan angka yang valid');
    } else {
        // Jumlahkan angka-angka tersebut
        var hasil = angka1 + angka2;
    
        // Tampilkan hasilnya dalam pop-up alert
        alert('Hasil penjumlahan: ' + hasil);
    }
    
    // Tampilkan hasilnya
    document.getElementById('hasil').textContent = hasil;
});
document.getElementById('ulang').addEventListener('click', function() {
    // Atur ulang nilai input dan hasil
    document.getElementById('angka1').value = '';
    document.getElementById('angka2').value = '';
});
