document.addEventListener("DOMContentLoaded", function() {
    // 1. Logika Toggle Menu Mobile (Hamburger)
    const menuToggle = document.querySelector(".ridzki_menu_toggle");
    const navMenu = document.getElementById("ridzki_nav");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("ridzki_mobile_active");
        });
    }

    // 2. Logika Diperbaiki: Otomatis Menandai Menu Navbar Sesuai Halaman Aktif
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("#ridzki_nav a");

    navLinks.forEach(link => {
        // Ambil nama file dari href (contoh: "about.html")
        const linkHref = link.getAttribute("href");
        
        // Cek apakah URL saat ini berakhiran dengan nama file tersebut
        // atau jika di local/root (berakhiran "/" atau tanpa nama file) dan link-nya adalah "index.html"
        if (currentPath.endsWith(linkHref) || (linkHref === "index.html" && (currentPath.endsWith("/") || currentPath === ""))) {
            link.classList.add("ridzki_active");
        } else {
            link.classList.remove("ridzki_active"); // Pastikan halaman lain tidak ikut aktif
        }
    });

    // 3. Logika Validasi Form Kontak
    const ridzkiContactForm = document.getElementById("ridzki_contactForm");
    
    if (ridzkiContactForm) {
        ridzkiContactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const nama = document.getElementById("ridzki_name").value.trim();
            const email = document.getElementById("ridzki_email").value.trim();
            const pesan = document.getElementById("ridzki_message").value.trim();
            const alertBox = document.getElementById("ridzki_alert");
            
            if (nama === "" || email === "" || pesan === "") {
                alertBox.style.color = "red";
                alertBox.textContent = "Mohon isi semua kolom formulir dengan benar!";
            } else {
                alertBox.style.color = "green";
                alertBox.textContent = "Terima kasih, pesan Anda berhasil dikirim ke sistem Bank Mandiri!";
                ridzkiContactForm.reset();
            }
        });
    }
});