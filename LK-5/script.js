// BUG ASLI: const namaAwal di-reassign → TypeError
// const bersifat immutable, tidak bisa di-reassign setelah dideklarasikan.
// PERBAIKAN: gunakan 'let' jika nilainya akan berubah

// var namaAwal = "Sumanto";
// var namaAkhir = "El kumar";
// var namaLengkap = namaAwal + " " + namaAkhir;

if (true) {
    let namaAwal = "sumanto";    // FIX: ganti const → let
    namaAwal = "el kumar";       // sekarang bisa di-reassign
    console.log(namaAwal);       // output: "el kumar"
}

// console.log(namaAwal); // ReferenceError: namaAwal is not defined (karena let bersifat block-scoped)