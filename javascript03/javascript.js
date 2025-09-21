// --- BAGIAN DATA ---
let produkToko = [
  {id: 1, nama: "Laptop ASUS", harga: 7000000, stok: 5},
  {id: 2, nama: "Mouse Logitech", harga: 200000, stok: 10},
];

// --- BAGIAN DOM ELEMENTS ---
// Menghubungkan JavaScript dengan elemen-elemen di HTML
const form = document.getElementById('form-tambah-produk');
const namaInput = document.getElementById('nama-produk');
const hargaInput = document.getElementById('harga-produk');
const stokInput = document.getElementById('stok-produk');
const daftarProdukContainer = document.getElementById('daftar-produk-container');

// --- BAGIAN FUNGSI ---

/**
 * Fungsi untuk menampilkan (merender) semua produk ke halaman HTML.
 * Ini adalah pengganti tampilkanProduk() yang lama.
 */
function renderProduk() {
    // 1. Kosongkan dulu container produk agar tidak ada data duplikat
    daftarProdukContainer.innerHTML = '';

    // 2. Loop setiap produk di array dan buat elemen HTML-nya
    produkToko.forEach(produk => {
        const hargaFormatted = new Intl.NumberFormat('id-ID', {
            style: 'currency', currency: 'IDR', minimumFractionDigits: 0
        }).format(produk.harga);

        const elemenProduk = document.createElement('div');
        elemenProduk.className = 'produk-item';
        elemenProduk.innerHTML = `
            <div class="produk-info">
                <strong>${produk.nama}</strong><br>
                <span>Harga:</span> ${hargaFormatted} | <span>Stok:</span> ${produk.stok}
            </div>
            <button class="btn-hapus" data-id="${produk.id}">Hapus</button>
        `;
        // 3. Masukkan elemen produk yang sudah jadi ke dalam container
        daftarProdukContainer.appendChild(elemenProduk);
    });
}

/**
 * Fungsi untuk menambahkan produk baru
 */
function tambahProduk(nama, harga, stok) {
    const idBaru = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;
    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    produkToko.push(produkBaru);
}

/**
 * Fungsi untuk menghapus produk berdasarkan ID
 */
function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
}


// --- BAGIAN EVENT LISTENERS ---

// Event listener untuk form submission (ketika tombol "Tambah Produk" diklik)
form.addEventListener('submit', function(event) {
    // Mencegah halaman refresh saat form disubmit
    event.preventDefault();

    // 1. Ambil nilai dari setiap input
    const nama = namaInput.value;
    const harga = parseInt(hargaInput.value);
    const stok = parseInt(stokInput.value);

    // 2. Panggil fungsi untuk menambah produk ke array
    tambahProduk(nama, harga, stok);

    // 3. Render ulang daftar produk di HTML untuk menampilkan data baru
    renderProduk();

    // 4. Kosongkan form input setelah produk ditambahkan
    form.reset();
});

// Event listener untuk tombol hapus (menggunakan event delegation)
daftarProdukContainer.addEventListener('click', function(event) {
    // Cek apakah yang diklik adalah tombol dengan class 'btn-hapus'
    if (event.target.classList.contains('btn-hapus')) {
        const idProduk = parseInt(event.target.getAttribute('data-id'));
        
        // Panggil fungsi hapus
        hapusProduk(idProduk);

        // Render ulang daftar produk untuk menghapus item dari tampilan
        renderProduk();
    }
});


// --- INISIALISASI ---
// Tampilkan produk yang sudah ada saat halaman pertama kali dimuat
renderProduk();