<<<<<<< HEAD
// JavaScript untuk Fajar Sport

// Smooth scrolling untuk navigasi menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek hover untuk gambar produk
const produkImages = document.querySelectorAll('.imageproduk img');
produkImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Validasi formulir kontak
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Mohon lengkapi semua bidang di formulir kontak.");
        e.preventDefault();
    } else if (!validateEmail(email)) {
        alert("Mohon masukkan alamat email yang valid.");
        e.preventDefault();
    } else {
        alert("Pesan Anda telah terkirim. Terima kasih!");
    }
});

// Fungsi validasi email sederhana
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
=======
// JavaScript untuk Fajar Sport

// Smooth scrolling untuk navigasi menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efek hover untuk gambar produk
const produkImages = document.querySelectorAll('.imageproduk img');
produkImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});

// Validasi formulir kontak
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Mohon lengkapi semua bidang di formulir kontak.");
        e.preventDefault(); // Mencegah pengiriman formulir jika ada bidang kosong
    } else if (!validateEmail(email)) {
        alert("Mohon masukkan alamat email yang valid.");
        e.preventDefault();
    } else {
        alert("Pesan Anda telah terkirim. Terima kasih!");
    }
});

// Fungsi validasi email sederhana
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
>>>>>>> bb6bf018b007de766af455d399c2f85e2f0e2666
