// =====================
// DATA PERTANYAAN
// =====================
const questions = [
    {question:"Kamu paling suka kegiatan apa?", options:{A:["Mengatur keuangan atau menganalisis data","Ekonomi"], B:["Menulis cerita, artikel, atau menerjemahkan teks","Sastra Inggris"], C:["Meneliti makhluk hidup dan lingkungan","Biologi"], D:["Mengamati perilaku sosial dan masyarakat","Sosiologi"]}},
    {question:"Mata pelajaran apa yang paling kamu kuasai?", options:{A:["Matematika dan Ekonomi","Ekonomi"], B:["Bahasa Inggris","Sastra Inggris"], C:["Biologi","Biologi"], D:["Sosiologi","Sosiologi"]}},
    {question:"Kamu lebih suka bekerja di lingkungan seperti apa?", options:{A:["Perusahaan atau kantor dengan data finansial","Ekonomi"], B:["Studio kreatif atau penerbitan","Sastra Inggris"], C:["Laboratorium penelitian","Biologi"], D:["Lapangan sosial dan komunitas","Sosiologi"]}},
    {question:"Jika kamu diberi tugas kelompok, peran apa yang paling kamu ambil?", options:{A:["Meneliti data dan mencari fakta","Biologi"], B:["Mengatur komunikasi dan kerja sama kelompok","Sosiologi"], C:["Mendesain atau menulis laporan","Sastra Inggris"], D:["Mengatur rencana dan pembagian tugas","Ekonomi"]}},
    {question:"Jenis berita atau konten apa yang paling menarik perhatianmu?", options:{A:["Penemuan ilmiah dan teknologi baru","Biologi"], B:["Budaya pop, sastra, atau karya kreatif","Sastra Inggris"], C:["Tren ekonomi dan bisnis","Ekonomi"], D:["Isu sosial, politik, dan kemasyarakatan","Sosiologi"]}},
    {question:"Teman-teman biasanya mengenal kamu sebagai orang yang...", options:{A:["Imajinatif dan suka bercerita","Sastra Inggris"], B:["Logis dan penuh perhitungan","Ekonomi"], C:["Empatik dan suka menolong","Sosiologi"], D:["Teliti dan suka meriset","Biologi"]}},
    {question:"Kamu lebih suka membaca tentang...", options:{A:["Kisah tokoh perubahan sosial","Sosiologi"], B:["Penelitian ilmiah dan teknologi","Biologi"], C:["Cerita sastra atau budaya","Sastra Inggris"], D:["Strategi bisnis sukses","Ekonomi"]}},
    {question:"Kalau ada masalah di sekitar kamu, hal pertama yang kamu pikirkan?", options:{A:["Bagaimana mengomunikasikannya dengan baik","Sastra Inggris"], B:["Bagaimana solusinya secara finansial","Ekonomi"], C:["Apa penyebab ilmiahnya","Biologi"], D:["Bagaimana dampaknya bagi orang lain","Sosiologi"]}},
    {question:"Kalau kamu lagi jalan-jalan ke tempat baru, hal pertama yang kamu perhatiin apa?", options:{A:["Aktivitas dan kebiasaan orang-orang di sana","Sosiologi"], B:["Keindahan alam atau jenis tumbuhan/hewan uniknya","Biologi"], C:["Arsitektur dan desain bangunannya","Sastra Inggris"], D:["Perkembangan usaha atau toko-toko di sekitarnya","Ekonomi"]}},
    {question:"Kamu paling suka suasana belajar yang...", options:{A:["Tenang, bisa fokus eksplorasi sendiri","Sastra Inggris"], B:["Ramai, banyak diskusi dan tukar pikiran","Sosiologi"], C:["Praktikal, langsung praktik dan eksperimen","Biologi"], D:["Tertata, jelas langkah-langkah dan targetnya","Ekonomi"]}}
];

// =====================
// DATA BIDANG / KERJA
// =====================
const bidangInfo = {
    "Sastra Inggris": {
        pekerjaan: {
            "Penulis atau Editor": `Membuat dan menyunting teks seperti artikel, novel, atau konten media. Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-12 jt`,
            "Penerjemah": `Menerjemahkan teks atau percakapan. Pemula: Rp 5-9 jt, Berpengalaman: Rp 9-15 jt`,
            "Content Creator / Copywriter": `Menciptakan konten menarik untuk media sosial, website, atau iklan. Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-12 jt`,
            "Guru Bahasa Inggris": `Mengajar tata bahasa, kosa kata, serta keterampilan berbicara dan menulis. Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt`,
            "Tour Guide Internasional": `Memandu wisatawan, memberikan informasi sejarah & budaya. Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-12 jt`,
            "Linguist (Ahli Bahasa)": `Mempelajari struktur & penggunaan bahasa. Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-15 jt`
        }
    },
    "Biologi": {
        pekerjaan: {
            "Ahli Bioteknologi": `Meneliti organisme untuk obat, vaksin, makanan bernilai tinggi. Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-15 jt`,
            "Ahli Ekologi": `Mempelajari hubungan makhluk hidup & lingkungan. Pemula: Rp 5-8 jt, Berpengalaman: Rp 8-12 jt`,
            "Ahli Gizi": `Merancang pola makan sehat untuk individu & masyarakat. Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt`,
            "Peneliti Medis": `Mencari inovasi di bidang kesehatan. Pemula: Rp 6-9 jt, Berpengalaman: Rp 9-14 jt`,
            "Mikrobiolog": `Mempelajari mikroorganisme & perannya. Pemula: Rp 5-8 jt, Berpengalaman: Rp 8-12 jt`,
            "Ahli Pertanian Modern": `Mengembangkan teknik pertanian modern & bioteknologi. Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt`,
            "Ahli Forensik Biologi": `Menganalisis DNA, darah, jaringan tubuh. Pemula: Rp 6-9 jt, Berpengalaman: Rp 9-14 jt`
        }
    },
    "Sosiologi": {
        pekerjaan: {
            "Sosiolog": `Menganalisis perilaku masyarakat & perubahan sosial. Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-12 jt`,
            "Jurnalis Sosial": `Menulis & melaporkan isu sosial. Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt`,
            "Analis Kebijakan Publik": `Menilai dampak program pemerintah & rekomendasi kebijakan. Pemula: Rp 5-9 jt, Berpengalaman: Rp 9-14 jt`,
            "Konsultan Sosial": `Memberikan saran kepada pemerintah / NGO. Pemula: Rp 4-7 jt, Berpengalaman: Rp 7-12 jt`,
            "Peneliti Sosial": `Melakukan penelitian tren sosial & dinamika ekonomi. Pemula: Rp 5-8 jt, Berpengalaman: Rp 8-13 jt`,
            "Pekerja LSM (NGO)": `Bekerja di lembaga nonpemerintah fokus isu sosial. Pemula: Rp 4-8 jt, Berpengalaman: Rp 8-15 jt`,
            "Dosen Sosiologi": `Mengajar & meneliti bidang sosiologi. Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-15 jt`
        }
    },
    "Ekonomi": {
        pekerjaan: {
            "Akuntan": `Mencatat, mengelola & menganalisis data keuangan. Pemula: Rp 5-10 jt, Berpengalaman: Rp 10-15 jt`,
            "Analis Keuangan": `Menganalisis kondisi keuangan perusahaan & pasar. Pemula: Rp 6-12 jt, Berpengalaman: Rp 12-18 jt`,
            "Ekonom": `Meneliti & memprediksi tren ekonomi. Pemula: Rp 7-12 jt, Berpengalaman: Rp 12-20 jt`,
            "Konsultan Bisnis": `Membantu perusahaan mengembangkan strategi. Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-20 jt`,
            "Investor / Analis Pasar Modal": `Mengelola portofolio saham & risiko investasi. Pemula: Rp 7-12 jt, Berpengalaman: Rp 12-25 jt`,
            "Auditor Internal": `Memeriksa kepatuhan & risiko perusahaan. Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-15 jt`,
            "Manajer Pemasaran": `Mengembangkan strategi promosi & meningkatkan penjualan. Pemula: Rp 6-10 jt, Berpengalaman: Rp 10-20 jt`
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

// =====================
// TAMPILKAN HASIL LANGSUNG SEMUA PEKERJAAN
// =====================
function showResult(){
    const maxScore = Math.max(...Object.values(scores));
    const hasilList = Object.keys(scores).filter(k=>scores[k]===maxScore);
    let html = `<h3>🎯 Hasil Quiz</h3>`;

    hasilList.forEach(bidang=>{
        html += `<h4>${bidang}</h4>`;
        const jobs = bidangInfo[bidang].pekerjaan;
        Object.entries(jobs).forEach(([job,desc])=>{
            html += `<div class="desc-box"><strong>${job}:</strong> ${desc}</div>`;
        });
    });

    html += `<button onclick="location.reload()">Ulangi Quiz</button>`;
    document.getElementById("quiz").innerHTML="";
    document.getElementById("result").innerHTML=html;
}

// =====================
// MULAI QUIZ
// =====================
showQuestion();
