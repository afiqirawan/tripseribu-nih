// 1. DATA GUDANG (Simpan semua info pulau di sini)
const daftarTrip = {
    'pari': {
        nama: 'Open Trip Pulau Pari',
        badge: 'Best Seller',
        harga: '390.000',
        gambar: 'image/kartu2.jpg',
        // Fasilitas sesuai Screenshot 2026-03-21 230113.png
        fasilitas: [
            'Penyebrangan Kapal PP', 
            'Homestay AC', 
            'Makan 3x', 
            'Sepeda Santai', 
            'Kapal & Alat Snorkeling', 
            'BBQ', 
            'Guide Lokal & Dokumentasi Underwater'
        ],
        itinerary: {
            // Jadwal Hari 1 sesuai Screenshot 2026-03-21 230137.png
            day1: [
                { jam: '06.00', kegiatan: 'Kumpul di Pelabuhan Kaliadem - Muara Angke' },
                { jam: '07.00', kegiatan: 'Menuju Pulau Pari' },
                { jam: '09.00', kegiatan: 'Check-in penginapan di Pulau Pari' },
                { jam: '11.30', kegiatan: 'Makan siang' },
                { jam: '13.00', kegiatan: 'Snorkeling & Jelajah Pulau' },
                { jam: '13.30', kegiatan: 'Ke Bintang Rama' },
                { jam: '14.00', kegiatan: 'Ke APL' },
                { jam: '17.30', kegiatan: 'Sunset di Pantai Pasir Perawan' },
                { jam: '18.30', kegiatan: 'Makan malam' },
                { jam: '21.00', kegiatan: 'Santap BBQ' },
                { jam: '21.30', kegiatan: 'Acara Bebas dan Istirahat' }
            ],
            // Jadwal Hari 2 sesuai Screenshot 2026-03-21 230155.png
            day2: [
                { jam: '05.00', kegiatan: 'Sunrise di Bukit Matahari' },
                { jam: '07.00', kegiatan: 'Sarapan pagi' },
                { jam: '08.00', kegiatan: 'Ke Pantai Bintang & LIPI' },
                { jam: '09.00', kegiatan: 'Check out homestay' },
                { jam: '10.00', kegiatan: 'Perjalanan kembali menuju Pelabuhan Kaliadem - Muara Angke' }
            ]
        }
    },
    'pari2': {
        nama: 'One Day Pulau Pari',
        badge: 'Favorite',
        harga: '200.000',
        gambar: 'image/pari2-2.jpg',
        // Fasilitas sesuai Screenshot 2026-03-21 230846.png
        fasilitas: [
            'Penyebrangan Kapal PP',
            'Makan Siang',
            'Tour Leader',
            'Dokumentasi',
        ],
        itinerary: {
            // Jadwal sesuai Screenshot 2026-03-21 230905.png
            day1: [
                { jam: '06.30', kegiatan: 'Kumpul di Dermaga Kaliadem - Muara Angke' },
                { jam: '10.30', kegiatan: 'Tiba di Pulau Pari' },
                { jam: '10.45', kegiatan: 'Explore Pulau Pari, Pantai Pasir Perawan' },
                { jam: '11.00', kegiatan: 'Snorkling(opsional)' },
                { jam: '13.00', kegiatan: 'Makan Siang' },
                { jam: '16.00', kegiatan: 'Selesai di Pantai Pasir Perawan dan perjalanan pulang' },
                { jam: '18.00', kegiatan: 'Perkiraan sampai di Jakarta dermaga Muara kamal dan trip selesai' }
            ],
            day2: [] // Kosong karena paket 1 hari
        }
    },
    'pulau-harapan': {
        nama: 'Pulau Harapan',
        badge: 'Speedboat Express',
        harga: '390.000',
        gambar: 'image/harapan2.jpg',
        fasilitas: [
            'Penyebrangan Kapal PP',
            'Homestay AC ',
            'Makan 3X',
            'Kapal Jelajah Pulau',
            'kapal Alat Snorkeling',
            'BBQ',
            'Guide Lokal & Dokumentasi Underwater'
        ],
        itinerary: {
            day1: [
                { jam: '06.00', kegiatan: 'Kumpul di Pelabuhan Kaliadem' },
                { jam: '07.00', kegiatan: 'Menuju Pulau Harapan' },
                { jam: '10.00', kegiatan: 'Tiba di Pulau Harapan' },
                { jam: '10.30', kegiatan: 'Check-in homestay' },
                { jam: '11.00', kegiatan: 'Makan siang di Pulau Harapan (kami siapkan di homestay)' },
                { jam: '11.30', kegiatan: 'Acara bebas. Bisa di isi dengan istirahat atau explore Pulau Harapan' },
                { jam: '13.00', kegiatan: 'Kegiatan snorkling di 2 sampai 3 spot snorkling' },
                { jam: '16.00', kegiatan: 'Menikmati sunset di pulau (Option: Pulau Perak, Pulau Dolpin, dan Pulau Bulat)' },
                { jam: '17.00', kegiatan: 'Kembali ke Pulau Harapan' },
                { jam: '17.30', kegiatan: 'Bersih-bersih dan istirahat sejenak' },
                { jam: '18.00', kegiatan: 'Makan malam di Pulau Harapan (kami siapkan di homestay)' },
                { jam: '19.00', kegiatan: 'Acara bebas. Bisa di isi dengan menikmati suasana malam di Pulau Harapan' },
                { jam: '21.00', kegiatan: 'Barbeque Time' },
                { jam: '22.00', kegiatan: 'Acara Bebas' }
            ],
            day2: [
                { jam: '05.30', kegiatan: 'Hunting sunrise di dermaga Pulau Harapan' },
                { jam: '06.30', kegiatan: 'Sarapan (kami siapkan di homestay)' },
                { jam: '07.00', kegiatan: 'Jelajah Pulau (Option: Pulau Bira Besar, Pulau Bulat, Pulau Genteng)' },
                { jam: '09.00', kegiatan: 'Kembali ke homestay' },
                { jam: '10.00', kegiatan: 'Check-out dan menuju dermaga dan naik ke kapal' },
                { jam: '11.00', kegiatan: 'Perjalanan menuju Pelabuhan Kaliadem – Muara Angke dan trip selesai' }
            ]
        }
    },
    'pramuka': {
        nama: 'Pulau Pramuka',
        badge: 'Best Seller',
        harga: '420.000',
        gambar: 'image/pramuka2.jpg', // Sesuaikan nama file gambar lo
        fasilitas: ['Penyebaran Kapal PP', 'Homestay AC', 'Makan 3x', 'Kapal Jelajah Pulau', 'Kapal & Alat Snorkeling', 'BBQ', 'Guide Lokal & Dokumentasi Underwater'],
        itinerary: {
            day1: [
                { jam: '06.00', kegiatan: 'Berkumpul di Pelabuhan Kali Adem' },
                { jam: '07.00', kegiatan: 'Perjalanan ke Pulau Pramuka' },
                { jam: '11.00', kegiatan: 'Tiba, Check-in Homestay & Acara Bebas' },
                { jam: '13.00', kegiatan: 'Snorkeling Soft Coral & Pulau Air' },
                { jam: '17.30', kegiatan: 'Kembali ke Pulau Pramuka' },
                { jam: '19.00', kegiatan: 'Makan Malam & Barbeque Ikan Bakar' }
            ],
            day2: [
                { jam: '05.30', kegiatan: 'Sunrise di Pulau Pramuka' },
                { jam: '06.30', kegiatan: 'Sarapan Pagi' },
                { jam: '07.30', kegiatan: 'Explore Taman Nasional & Penangkaran Penyu' },
                { jam: '10.00', kegiatan: 'Mandi, Packing & Persiapan Pulang' },
                { jam: '12.00', kegiatan: 'Perjalanan ke Pelabuhan Kali Adem' }
            ]
        }
    },
    'tidung': {
        nama: 'Pulau Tidung',
        badge: 'Favorite',
        harga: '390.000',
        gambar: 'image/kartu6.jpg', // Pastikan filenya ada di folder image
        fasilitas: [
            'Penyebrangan Kapal PP', 
            'Homestay AC', 
            'Makan 3x', 
            'Kapal & Alat Snorkeling', 
            'BBQ', 
            'Guide Lokal & Dokumentasi Underwater'
        ],
        itinerary: {
            day1: [
                { jam: '06.30', kegiatan: 'Kumpul di Dermaga Kali Adem' },
                { jam: '08.00', kegiatan: 'Berangkat ke Pulau Tidung' },
                { jam: '10.00', kegiatan: 'Tiba & check-in homestay' },
                { jam: '11.00', kegiatan: 'Makan siang' },
                { jam: '12.00', kegiatan: 'Foto di Jembatan Cinta & jumping' },
                { jam: '13.30', kegiatan: 'Snorkeling di spot terbaik' },
                { jam: '15.30', kegiatan: 'Sepedaan keliling pulau' },
                { jam: '17.00', kegiatan: 'Sunset di pantai' },
                { jam: '18.30', kegiatan: 'BBQ & makan malam' },
                { jam: '20.00', kegiatan: 'Free time' }
            ],
            day2: [
                { jam: '06.00', kegiatan: 'Sunrise di Jembatan Cinta' },
                { jam: '07.00', kegiatan: 'Sarapan & check-out' },
                { jam: '08.00', kegiatan: 'Explore Tidung Besar' },
                { jam: '10.00', kegiatan: 'Last photo session' },
                { jam: '11.00', kegiatan: 'Kembali ke Jakarta' },
                { jam: '13.00', kegiatan: 'Tiba di Dermaga Muara Angke' }
            ]
        }
    },
    'kelor': {
        nama: 'Kelor Onrust Cipir',
        badge: 'Pasti Jalan',
        harga: '200.000', // Sesuaikan dengan harga di katalog lo jika berbeda
        gambar: 'image/kelor2.jpg',
        fasilitas: [
            'Kapal Wisata Jelajah Pulau PP', 
            'Makan Siang', 
            'Tour Leader', 
            'Dokumentasi'
        ], // Sesuai screenshot fasilitas
        itinerary: {
            day1: [
                { jam: '07.00', kegiatan: 'Kumpul di Dermaga Kali Adem' },
                { jam: '08.00', kegiatan: 'Berangkat island hopping' },
                { jam: '09.00', kegiatan: 'Tiba di Pulau Kelor, hiking bukit' },
                { jam: '10.30', kegiatan: 'Explore Pulau Onrust & benteng Belanda' },
                { jam: '12.00', kegiatan: 'Makan siang di kapal' },
                { jam: '13.00', kegiatan: 'Main air & foto-foto di Pulau Cipir' },
                { jam: '14.30', kegiatan: 'Snorkeling (opsional)' },
                { jam: '15.30', kegiatan: 'Persiapan pulang' },
                { jam: '16.00', kegiatan: 'Kembali ke Jakarta' },
                { jam: '17.00', kegiatan: 'Tiba di Dermaga Muara Angke' }
            ], // Data dari itinerary terbaru
            day2: [] // Kosong karena paket satu hari saja
        }
    },
};

let tripTerpilih = null;

// 2. FUNGSI BUKA MODAL
function openModal(id) {
    const data = daftarTrip[id];
    if (!data) return;

    tripTerpilih = data; // Simpan sementara data yg diklik

    // Isi konten dasar ke ID yang ada di HTML lo
    document.getElementById('modal-title').innerText = data.nama;
    document.getElementById('modal-badge').innerText = data.badge;
    document.getElementById('modal-img').src = data.gambar;
    
    // Jika ada elemen harga di modal, isi juga
    const priceElem = document.getElementById('modal-price');
    if(priceElem) priceElem.innerText = data.harga;

    // Isi Fasilitas (Looping biar rapi)
    const listFasilitas = document.getElementById('modal-facilities');
    listFasilitas.innerHTML = '';
    data.fasilitas.forEach(f => {
        listFasilitas.innerHTML += `<li class="flex items-center gap-2"><span>✅</span> ${f}</li>`;
    });

    // Default tampilin Itinerary Day 1
    switchDay(1);

    // Munculkan Modal (Hapus class hidden)
    const modal = document.getElementById('modal-detail');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Kunci scroll body biar ga balapan
    document.body.style.overflow = 'hidden';
}

// 3. FUNGSI GANTI HARI (ITINERARY)
function switchDay(hari) {
    if (!tripTerpilih) return;
    
    const container = document.getElementById('modal-itinerary');
    const jadwal = hari === 1 ? tripTerpilih.itinerary.day1 : tripTerpilih.itinerary.day2;
    
    // Update Style Tombol (Biar ketauan mana yg aktif)
    const btn1 = document.getElementById('btn-day1');
    const btn2 = document.getElementById('btn-day2');
    
    if(hari === 1) {
        btn1.classList.add('bg-orange-500', 'text-white');
        btn2.classList.remove('bg-orange-500', 'text-white');
    } else {
        btn2.classList.add('bg-orange-500', 'text-white');
        btn1.classList.remove('bg-orange-500', 'text-white');
    }

    // Render Jadwal
    container.innerHTML = '';
    jadwal.forEach(item => {
        container.innerHTML += `
            <div class="relative pl-2">
                <div class="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-white border-4 border-orange-500"></div>
                <p class="text-[10px] font-black text-orange-500 uppercase mb-0.5">${item.jam} WIB</p>
                <p class="text-slate-700 text-sm font-bold leading-tight">${item.kegiatan}</p>
            </div>
        `;
    });
}

// 4. FUNGSI TUTUP MODAL
function closeModal() {
    const modal = document.getElementById('modal-detail');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto'; // Aktifkan scroll lagi
}

// Tambahan: Nutup modal kalau klik area luar (background hitam)
window.onclick = function(event) {
    const modal = document.getElementById('modal-detail');
    if (event.target == modal) {
        closeModal();
    }
}


//POP UP JADWAL 
// --- FUNGSI KHUSUS MODAL JADWAL ---

function openJadwal() {
    const modalJadwal = document.getElementById('modal-jadwal');
    const contentJadwal = document.getElementById('modal-content');
    
    modalJadwal.classList.remove('hidden');
    modalJadwal.classList.add('flex');
    
    // Animasi sedikit biar smooth
    setTimeout(() => {
        contentJadwal.classList.remove('scale-95');
        contentJadwal.classList.add('scale-100');
    }, 10);

    document.body.style.overflow = 'hidden'; // Kunci scroll background
}

function closeJadwal() {
    const modalJadwal = document.getElementById('modal-jadwal');
    const contentJadwal = document.getElementById('modal-content');
    
    contentJadwal.classList.remove('scale-100');
    contentJadwal.classList.add('scale-95');
    
    setTimeout(() => {
        modalJadwal.classList.add('hidden');
        modalJadwal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Aktifkan scroll lagi
    }, 200);
}

// Tutup modal jadwal kalau user klik di area hitam/blur
document.getElementById('modal-jadwal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeJadwal();
    }
});

// whatsapp.js - Khusus buat ngurusin kirim pesan ke WA

function updateWALinkWithDate(event) {
    // 1. Ambil elemen-elemen yang dibutuhin
    const titleElem = document.getElementById('modal-title');
    const dateElem = document.getElementById('booking-date');
    const priceElem = document.getElementById('modal-price');

    // 2. Ambil value-nya (dengan fallback kalau data kosong)
    const tripName = titleElem ? titleElem.innerText : "Trip";
    const bookingDate = dateElem ? dateElem.value : "";
    const tripPrice = priceElem ? priceElem.innerText : "Cek Harga";
    
    // --- KONFIGURASI ADMIN ---
    const phone = "628568673041"; 
    // -------------------------

    // 3. Validasi: Jika tanggal kosong, stop di sini.
    if (!bookingDate) {
        alert("Waduh, tanggalnya belum dipilih nih! Pilih dulu ya biar Admin bisa cek slot. 😊");
        if (event) event.preventDefault(); 
        return false;
    }

    // 4. Rakit pesan otomatis (Format rapi pakai Bold di WA)
    const message = `Halo Admin Trip Seribu! 👋%0A%0ASaya mau tanya ketersediaan slot untuk:%0A📍 *Paket:* ${tripName}%0A📅 *Rencana Tanggal:* ${bookingDate}%0A💰 *Harga:* Rp ${tripPrice}%0A%0AApakah masih tersedia? Terima kasih!`;

    // 5. EKSEKUSI: Buka WhatsApp langsung di tab baru
    const waURL = `https://wa.me/${phone}?text=${message}`;
    window.open(waURL, '_blank');

    // Optional: Mencegah link standar berjalan kalau lo pakai tag <a>
    if (event) event.preventDefault();
}