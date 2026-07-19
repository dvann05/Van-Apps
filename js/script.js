// 1. DATA DATABASE APLIKASI (Simulasi)
const appsData = [
    {
        id: 1,
        title: "Petualangan Roblox",
        developer: "Studio Game Indo",
        rating: 4.7,
        price: "Gratis",
        category: "game",
        image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=150&auto=format&fit=crop&q=60",
        desc: "Jelajahi berbagai dunia kreatif buatan komunitas terbesar di dunia! Mainkan jutaan game buatan user lain gratis."
    },
    {
        id: 2,
        title: "Stickman Arena 3D",
        developer: "Animation Lab",
        rating: 4.5,
        price: "Gratis",
        category: "game",
        image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=150&auto=format&fit=crop&q=60",
        desc: "Pertarungan stickman sengit dengan grafis 3D memukau. Kendalikan karakter animasi favoritmu dan menangkan turnamen."
    },
    {
        id: 3,
        title: "Lentera Sejarah Quiz",
        developer: "Edu Media",
        rating: 4.9,
        price: "Gratis",
        category: "aplikasi",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&auto=format&fit=crop&q=60",
        desc: "Uji wawasanmu tentang sejarah dunia dan misteri nusantara lewat kuis interaktif yang seru dan menambah edukasi."
    },
    {
        id: 4,
        title: "Pixel Creator 2D",
        developer: "Pixel Arts",
        rating: 4.2,
        price: "Premium",
        category: "aplikasi",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=150&auto=format&fit=crop&q=60",
        desc: "Tools terbaik untuk membuat aset game sprite dan pixel art. Cocok untuk kreator konten animasi 2D."
    },
    {
        id: 5,
        title: "Horror Mystery Escape",
        developer: "Creepy Studio",
        rating: 4.6,
        price: "Gratis",
        category: "game",
        image: "https://images.unsplash.com/photo-1566241477600-ac026ad43874?w=150&auto=format&fit=crop&q=60",
        desc: "Pecahkan misteri di rumah hantu tua yang mencekam. Kumpulkan petunjuk sebelum makhluk di dalamnya menemukanmu!"
    },
    {
        id: 6,
        title: "Music Beat Maker",
        developer: "Sound Wave",
        rating: 4.8,
        price: "Gratis",
        category: "aplikasi",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=150&auto=format&fit=crop&q=60",
        desc: "Ciptakan musik latar untuk video animasi tanpa suara kamu. Mudah digunakan bahkan untuk produser musik pemula."
    }
];

// 2. AMBIL ELEMEN DOM
const appGrid = document.getElementById('app-grid');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('detail-modal');
const modalContent = document.getElementById('modal-content');

// 3. FUNGSI UNTUK MENAMPILKAN APLIKASI KE GRID
function renderApps(apps) {
    appGrid.innerHTML = ""; // Kosongkan grid terlebih dahulu
    
    if (apps.length === 0) {
        appGrid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-10">Aplikasi tidak ditemukan.</p>`;
        return;
    }

    apps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.className = "bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer group flex flex-col justify-between";
        
        // Ketika kartu diklik, jalankan fungsi openModal
        appCard.onclick = () => openModal(app.id);

        appCard.innerHTML = `
            <div>
                <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-3">
                    <img src="${app.image}" alt="${app.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
                </div>
                <h3 class="font-semibold text-sm text-gray-800 truncate">${app.title}</h3>
                <p class="text-xs text-gray-400 mt-0.5">${app.developer}</p>
            </div>
            <div class="mt-2 flex items-center justify-between">
                <div class="flex items-center text-xs text-gray-600">
                    <span class="font-medium">${app.rating}</span>
                    <i class="fa-solid fa-star text-amber-500 text-[10px] ml-1"></i>
                </div>
                <span class="text-[11px] ${app.price === 'Gratis' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'} px-2 py-0.5 rounded font-medium">${app.price}</span>
            </div>
        `;
        appGrid.appendChild(appCard);
    });
}

// 4. FITUR PENCARIAN (LIVE SEARCH)
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredApps = appsData.filter(app => 
        app.title.toLowerCase().includes(keyword) || 
        app.developer.toLowerCase().includes(keyword)
    );
    renderApps(filteredApps);
});

// 5. FITUR MODAL DETAIL POP-UP
function openModal(id) {
    const app = appsData.find(a => a.id === id);
    if (!app) return;

    modalContent.innerHTML = `
        <div class="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
            <img src="${app.image}" alt="${app.title}" class="w-full h-full object-cover">
        </div>
        <div class="flex-1">
            <h2 class="text-xl font-bold text-gray-900">${app.title}</h2>
            <p class="text-sm text-green-600 font-medium mt-0.5">${app.developer}</p>
            <div class="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                <div><span class="font-bold text-gray-700">${app.rating}</span> <i class="fa-solid fa-star text-amber-500"></i></div>
                <div>•</div>
                <div class="bg-gray-100 px-2 py-0.5 rounded text-gray-700 font-medium">${app.price}</div>
            </div>
            
            <p class="text-gray-600 text-sm mt-4 leading-relaxed">${app.desc}</p>
            
            <button onclick="simulateInstall('${app.title}')" class="mt-6 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm shadow-sm transition">
                Instal Aplikasi
            </button>
        </div>
    `;
    
    modal.classList.remove('hidden'); // Memunculkan modal
}

function closeModal() {
    modal.classList.add('hidden'); // Menyembunyikan modal
}

// Menutup modal jika user mengklik area luar kotak putih
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Simulasi klik tombol instal
function simulateInstall(appName) {
    alert(`Berhasil mendownload: ${appName}! (Ini hanya simulasi)`);
}

// RUN PERTAMA KALI SAAT HALAMAN DI-LOAD
renderApps(appsData);
