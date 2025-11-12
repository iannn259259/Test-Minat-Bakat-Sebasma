// =====================
// DESKRIPSI PEKERJA (HASIL QUIZ)
// =====================
function showDeskripsi(list){
    let html = "<h3>💼 Deskripsi Kerja Berdasarkan Hasil Quiz</h3>";
    list.forEach(bidang=>{
        html += showFieldText(bidang);
    });
    html += `<button onclick="location.reload()">🔁 Kembali ke Awal</button>`;
    document.getElementById("result").innerHTML = html;
}

// =====================
// LIHAT SEMUA BIDANG
// =====================
function showAllFields(){
    const fields = ["Ekonomi","Sastra Inggris","Biologi","Sosiologi"];
    let html = "<h3>📚 Pilih Mata Pelajaran untuk Melihat Deskripsi Kerja</h3>";
    fields.forEach(f=>{
        html += `<button onclick="showFieldDesc('${f}')">${f}</button>`;
    });
    html += `<button onclick="location.reload()">Kembali ke Awal</button>`;
    document.getElementById("result").innerHTML = html;
}

// =====================
// TAMPILKAN DESKRIPSI TIAP BIDANG
// =====================
function showFieldDesc(field){
    const html = showFieldText(field);
    document.getElementById("result").innerHTML = `
      <h3>${field}</h3>
      <div class="desc-box">${html.replace(/\n/g, "<br>")}</div>
      <button onclick="showAllFields()">Kembali ke Pilihan Mapel</button>
      <button onclick="location.reload()">Kembali ke Awal</button>
    `;
}

// =====================
// TEMPLATE DESKRIPSI LENGKAP
// =====================
function showFieldText(field){
    let desc = "";

    if(field === "Ekonomi"){
        desc = `
💰 Pekerjaan: Akuntan
Deskripsi Pekerjaan:
Akuntan mencatat, mengelola, dan menganalisis data keuangan. Mereka menyusun laporan keuangan, memastikan kepatuhan pajak, dan memberi saran finansial.

Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 10.000.000
Berpengalaman: Rp 10.000.000 – Rp 15.000.000
S2: Rp 15.000.000 – Rp 20.000.000
S3: Rp 20.000.000 – Rp 30.000.000

Rekomendasi Universitas:
UI, UGM, UNAIR, UNDIP, UB

💹 Pekerjaan: Analis Keuangan
Deskripsi Pekerjaan:
Menganalisis tren keuangan dan membantu perusahaan dalam keputusan investasi.

💼 Pekerjaan: Manajer Keuangan
Deskripsi Pekerjaan:
Mengatur strategi dan aliran dana perusahaan untuk mencapai stabilitas finansial.

📊 Pekerjaan: Konsultan Pajak
Deskripsi Pekerjaan:
Memberikan layanan konsultasi dan pengelolaan pajak untuk individu atau perusahaan.
        `;
    }

    else if(field === "Sastra Inggris"){
        desc = `
📚 Pekerjaan: Penerjemah
Deskripsi Pekerjaan:
Menerjemahkan dokumen, buku, dan teks antar bahasa dengan akurasi tinggi.

Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 7.000.000
Berpengalaman: Rp 7.000.000 – Rp 12.000.000
S2: Rp 12.000.000 – Rp 18.000.000
S3: Rp 18.000.000 – Rp 25.000.000

Rekomendasi Universitas:
UI, UGM, UNDIP, UNPAD, UNAIR

✍️ Pekerjaan: Penulis
Deskripsi Pekerjaan:
Menulis karya sastra, artikel, naskah film, atau konten kreatif digital.

📝 Pekerjaan: Editor
Deskripsi Pekerjaan:
Menyunting naskah agar lebih efektif dan menarik untuk pembaca.

💡 Pekerjaan: Copywriter
Deskripsi Pekerjaan:
Membuat teks promosi dan kampanye iklan yang menarik perhatian publik.
        `;
    }

    else if(field === "Biologi"){
        desc = `
🔬 Pekerjaan: Ahli Bioteknologi
Deskripsi Pekerjaan:
Meneliti dan mengembangkan teknologi berbasis organisme untuk kesehatan, pertanian, dan industri.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 10.000.000
Berpengalaman: Rp 10.000.000 – Rp 15.000.000
S2: Rp 15.000.000 – Rp 25.000.000
S3: Rp 25.000.000 – Rp 40.000.000

Rekomendasi Universitas:
UGM, IPB, ITB, UNAIR, UI

🥗 Pekerjaan: Ahli Gizi
Deskripsi Pekerjaan:
Mempelajari nutrisi dan memberikan saran pola makan sehat.

🌱 Pekerjaan: Peneliti Lingkungan
Deskripsi Pekerjaan:
Menganalisis dampak manusia terhadap alam dan memberi solusi konservasi.

🧪 Pekerjaan: Analis Laboratorium
Deskripsi Pekerjaan:
Melakukan eksperimen dan uji biologi untuk riset atau industri.
        `;
    }

    else if(field === "Sosiologi"){
        desc = `
👥 Pekerjaan: Peneliti Sosial
Deskripsi Pekerjaan:
Menganalisis perilaku masyarakat dan perubahan sosial menggunakan metode penelitian ilmiah.

Kisaran Gaji:
Pemula: Rp 4.500.000 – Rp 8.000.000
Berpengalaman: Rp 8.000.000 – Rp 15.000.000
S2: Rp 15.000.000 – Rp 25.000.000
S3: Rp 25.000.000 – Rp 35.000.000

Rekomendasi Universitas:
UI, UNPAD, UNAIR, UGM, UNDIP

🤝 Pekerjaan: Konsultan Komunitas
Deskripsi Pekerjaan:
Merancang dan mendampingi program sosial untuk meningkatkan kesejahteraan masyarakat.

🎓 Pekerjaan: Dosen Sosiologi
Deskripsi Pekerjaan:
Mengajar, meneliti, dan menulis di bidang sosial budaya.

🏛️ Pekerjaan: Analis Kebijakan Publik
Deskripsi Pekerjaan:
Menganalisis dan merumuskan kebijakan untuk lembaga pemerintahan dan publik.
        `;
    }

    return desc;
}