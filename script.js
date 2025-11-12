// =====================
// DATA PERTANYAAN
// =====================
const questions = [
    { question: "Kamu paling suka kegiatan apa?", options: { A:["Mengatur keuangan atau menganalisis data","Ekonomi"], B:["Menulis cerita, artikel, atau menerjemahkan teks","Sastra Inggris"], C:["Meneliti makhluk hidup dan lingkungan","Biologi"], D:["Mengamati perilaku sosial dan masyarakat","Sosiologi"] }},
    { question: "Mata pelajaran apa yang paling kamu kuasai?", options: { A:["Matematika dan Ekonomi","Ekonomi"], B:["Bahasa Inggris","Sastra Inggris"], C:["Biologi","Biologi"], D:["Sosiologi","Sosiologi"] }},
    { question: "Kamu lebih suka bekerja di lingkungan seperti apa?", options: { A:["Perusahaan atau kantor dengan data finansial","Ekonomi"], B:["Studio kreatif atau penerbitan","Sastra Inggris"], C:["Laboratorium penelitian","Biologi"], D:["Lapangan sosial dan komunitas","Sosiologi"] }},
    { question: "Jika kamu diberi tugas kelompok, peran apa yang paling kamu ambil?", options: { A:["Meneliti data dan mencari fakta","Biologi"], B:["Mengatur komunikasi dan kerja sama kelompok","Sosiologi"], C:["Mendesain atau menulis laporan","Sastra Inggris"], D:["Mengatur rencana dan pembagian tugas","Ekonomi"] }},
    { question: "Jenis berita atau konten apa yang paling menarik perhatianmu?", options: { A:["Penemuan ilmiah dan teknologi baru","Biologi"], B:["Budaya pop, sastra, atau karya kreatif","Sastra Inggris"], C:["Tren ekonomi dan bisnis","Ekonomi"], D:["Isu sosial, politik, dan kemasyarakatan","Sosiologi"] }},
    { question: "Teman-teman biasanya mengenal kamu sebagai orang yang...", options: { A:["Imajinatif dan suka bercerita","Sastra Inggris"], B:["Logis dan penuh perhitungan","Ekonomi"], C:["Empatik dan suka menolong","Sosiologi"], D:["Teliti dan suka meriset","Biologi"] }},
    { question: "Kamu lebih suka membaca tentang...", options: { A:["Kisah tokoh perubahan sosial","Sosiologi"], B:["Penelitian ilmiah dan teknologi","Biologi"], C:["Cerita sastra atau budaya","Sastra Inggris"], D:["Strategi bisnis sukses","Ekonomi"] }},
    { question: "Kalau ada masalah di sekitar kamu, hal pertama yang kamu pikirkan?", options: { A:["Bagaimana mengomunikasikannya dengan baik","Sastra Inggris"], B:["Bagaimana solusinya secara finansial","Ekonomi"], C:["Apa penyebab ilmiahnya","Biologi"], D:["Bagaimana dampaknya bagi orang lain","Sosiologi"] }},
    { question: "Kalau kamu lagi jalan-jalan ke tempat baru, hal pertama yang kamu perhatiin apa?", options: { A:["Aktivitas dan kebiasaan orang-orang di sana","Sosiologi"], B:["Keindahan alam atau jenis tumbuhan/hewan uniknya","Biologi"], C:["Arsitektur dan desain bangunannya","Sastra Inggris"], D:["Perkembangan usaha atau toko-toko di sekitarnya","Ekonomi"] }},
    { question: "Kamu paling suka suasana belajar yang...", options: { A:["Tenang, bisa fokus eksplorasi sendiri","Sastra Inggris"], B:["Ramai, banyak diskusi dan tukar pikiran","Sosiologi"], C:["Praktikal, langsung praktik dan eksperimen","Biologi"], D:["Tertata, jelas langkah-langkah dan targetnya","Ekonomi"] }}
];

// =====================
// DATA BIDANG / PEKERJAAN
// =====================
const bidangInfo = {
    Ekonomi: {
        pekerjaan: {
            "Akuntan": `💼 Pekerjaan: Akuntan
Deskripsi: Mencatat, mengelola, dan menganalisis data keuangan.
Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan
Rekomendasi Universitas: UI, UGM, UNAIR, UNDIP, UB`,
            "Analis Keuangan": `💼 Pekerjaan: Analis Keuangan
Deskripsi: Menganalisis kondisi keuangan perusahaan dan laporan pasar.
Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 12.000.000/bulan
Berpengalaman: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S2: Rp 18.000.000 – Rp 25.000.000/bulan
Lulusan S3: Rp 25.000.000 – Rp 35.000.000/bulan
Rekomendasi Universitas: UI, UGM, ITB, UNDIP, UNAIR`
        }
    },
    "Sastra Inggris": {
        pekerjaan: {
            "Penulis / Editor / Penerjemah": `🖋️ Pekerjaan: Penulis / Editor / Penerjemah
Deskripsi: Membuat karya tulis, menyunting, dan menerjemahkan teks.
Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan
Rekomendasi Universitas: UI, UNPAD, UNDIP`
        }
    },
    Biologi: {
        pekerjaan: {
            "Ahli Bioteknologi": `🧬 Pekerjaan: Ahli Bioteknologi
Deskripsi: Meneliti organisme untuk obat, vaksin, dan makanan bernilai tinggi.
Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 25.000.000/bulan
Lulusan S3: Rp 25.000.000 – Rp 40.000.000/bulan
Rekomendasi Universitas: UI, ITB, UGM, UNAIR, UNPAD`,
            "Ahli Ekologi": `🌿 Pekerjaan: Ahli Ekologi
Deskripsi: Memahami hubungan makhluk hidup dan lingkungannya.
Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan
Rekomendasi Universitas: IPB, UGM, UI, UNAIR, UNS`
        }
    },
    Sosiologi: {
        pekerjaan: {
            "Peneliti Sosial": `💬 Pekerjaan: Peneliti Sosial
Deskripsi: Melakukan penelitian terhadap tren sosial, perilaku masyarakat, dan dinamika ekonomi.
Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 13.000.000/bulan
Lulusan S2: Rp 13.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan
Rekomendasi Universitas: UI, UGM, UNAIR, UNPAD, UNS`
        }
    }
};

// =====================
// VARIABEL
// =====================
let scores = {Ekonomi:0,"Sastra Inggris":0,Biologi:0,Sosiologi:0};
let current = 0;

// =====================
// FUNGSI
// =====================
function shuffleOptions(options){
    const entries = Object.entries(options);
    for(let i=entries.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [entries[i],entries[j]]=[entries[j],entries[i]];
    }
    return entries;
}

function showQuestion(){
    const q = questions[current];
    const container = document.getElementById("quiz");
    const shuffled = shuffleOptions(q.options);
    container.innerHTML = `
        <div class="question">
            <h3>${q.question}</h3>
            ${shuffled.map(([key,[text]])=>`<button onclick="answer('${key}')">${text}</button>`).join("<br>")}
        </div>
    `;
}

function answer(option){
    const bidang = questions[current].options[option][1];
    if(scores[bidang]!==undefined) scores[bidang]++;
    current++;
    if(current<questions.length) showQuestion();
    else showResult();
}

function showResult(){
    const maxScore = Math.max(...Object.values(scores));
    const hasilList = Object.keys(scores).filter(k=>scores[k]===maxScore);
    let html = `<h3>🎯 Hasil Quiz</h3>`;
    hasilList.forEach(bidang=>{
        html += `<h4>${bidang}</h4>`;
        const jobs = bidangInfo[bidang]?.pekerjaan;
        if(jobs){
            Object.keys(jobs).forEach(job=>{
                html += `<div class="job-item" onclick="showDesc('${bidang}','${encodeURIComponent(job)}')">${job}</div>`;
            });
        }
    });
    html += `<button onclick="location.reload()">Ulangi Quiz</button>`;
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").innerHTML = html;
}

function showDesc(bidang,job){
    job = decodeURIComponent(job);
    const desc = bidangInfo[bidang]?.pekerjaan[job];
    if(!desc){
        alert("Data pekerjaan tidak ditemukan!");
        return;
    }
    document.getElementById("result").innerHTML = `
        <h3>${job}</h3>
        <div class="desc-box">${desc.replace(/\n/g,"<br>")}</div>
        <button onclick="showResult()">Kembali ke Hasil</button>
        <button onclick="location.reload()">Kembali ke Awal</button>
    `;
}

// =====================
// MULAI QUIZ
// =====================
showQuestion();
