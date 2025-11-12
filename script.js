// =====================
// DATA PERTANYAAN
// =====================
const questions = [
    { question: "Kamu paling suka kegiatan apa?", options: { A:["Mengatur keuangan atau menganalisis data","Ekonomi"], B:["Menulis cerita, artikel, atau menerjemahkan teks","Sastra Inggris"], C:["Meneliti makhluk hidup dan lingkungan","Biologi"], D:["Mengamati perilaku sosial dan masyarakat","Sosiologi"] } },
    { question: "Mata pelajaran apa yang paling kamu kuasai?", options: { A:["Matematika dan Ekonomi","Ekonomi"], B:["Bahasa Inggris","Sastra Inggris"], C:["Biologi","Biologi"], D:["Sosiologi","Sosiologi"] } },
    { question: "Kamu lebih suka bekerja di lingkungan seperti apa?", options: { A:["Perusahaan atau kantor dengan data finansial","Ekonomi"], B:["Studio kreatif atau penerbitan","Sastra Inggris"], C:["Laboratorium penelitian","Biologi"], D:["Lapangan sosial dan komunitas","Sosiologi"] } },
    { question: "Jika kamu diberi tugas kelompok, peran apa yang paling kamu ambil?", options: { A:["Meneliti data dan mencari fakta","Biologi"], B:["Mengatur komunikasi dan kerja sama kelompok","Sosiologi"], C:["Mendesain atau menulis laporan","Sastra Inggris"], D:["Mengatur rencana dan pembagian tugas","Ekonomi"] } },
    { question: "Jenis berita atau konten apa yang paling menarik perhatianmu?", options: { A:["Penemuan ilmiah dan teknologi baru","Biologi"], B:["Budaya pop, sastra, atau karya kreatif","Sastra Inggris"], C:["Tren ekonomi dan bisnis","Ekonomi"], D:["Isu sosial, politik, dan kemasyarakatan","Sosiologi"] } },
    { question: "Teman-teman biasanya mengenal kamu sebagai orang yang...", options: { A:["Imajinatif dan suka bercerita","Sastra Inggris"], B:["Logis dan penuh perhitungan","Ekonomi"], C:["Empatik dan suka menolong","Sosiologi"], D:["Teliti dan suka meriset","Biologi"] } },
    { question: "Kamu lebih suka membaca tentang...", options: { A:["Kisah tokoh perubahan sosial","Sosiologi"], B:["Penelitian ilmiah dan teknologi","Biologi"], C:["Cerita sastra atau budaya","Sastra Inggris"], D:["Strategi bisnis sukses","Ekonomi"] } },
    { question: "Kalau ada masalah di sekitar kamu, hal pertama yang kamu pikirkan?", options: { A:["Bagaimana mengomunikasikannya dengan baik","Sastra Inggris"], B:["Bagaimana solusinya secara finansial","Ekonomi"], C:["Apa penyebab ilmiahnya","Biologi"], D:["Bagaimana dampaknya bagi orang lain","Sosiologi"] } },
    { question: "Kalau kamu lagi jalan-jalan ke tempat baru, hal pertama yang kamu perhatiin apa?", options: { A:["Aktivitas dan kebiasaan orang-orang di sana","Sosiologi"], B:["Keindahan alam atau jenis tumbuhan/hewan uniknya","Biologi"], C:["Arsitektur dan desain bangunannya","Sastra Inggris"], D:["Perkembangan usaha atau toko-toko di sekitarnya","Ekonomi"] } },
    { question: "Kamu paling suka suasana belajar yang...", options: { A:["Tenang, bisa fokus eksplorasi sendiri","Sastra Inggris"], B:["Ramai, banyak diskusi dan tukar pikiran","Sosiologi"], C:["Praktikal, langsung praktik dan eksperimen","Biologi"], D:["Tertata, jelas langkah-langkah dan targetnya","Ekonomi"] } }
];

// =====================
// DATA BIDANG / KERJA
// =====================
const bidangInfo = {
    Ekonomi: {
        jurusan:["Akuntansi","Manajemen","Ekonomi Pembangunan"],
        kampus:["UI","UGM","UNAIR"],
        pekerjaan: {
            "Akuntan":{desc:"Menganalisis laporan keuangan dan memberi saran finansial.", gaji:"Rp5.000.000 – Rp30.000.000", kampus:["UI","UGM","UNAIR","UNDIP","UB"]},
            "Manajer Keuangan":{desc:"Mengatur dan mengelola strategi keuangan perusahaan.", gaji:"Rp10.000.000 – Rp50.000.000", kampus:["UI","UGM","UNAIR"]},
            "Konsultan Pajak":{desc:"Membantu perencanaan dan pelaporan pajak klien.", gaji:"Rp7.000.000 – Rp35.000.000", kampus:["UI","UGM","UNAIR"]}
        }
    },
    "Sastra Inggris": {
        jurusan:["Sastra Inggris","Linguistik","Penerjemahan"],
        kampus:["UI","UNPAD","UNDIP"],
        pekerjaan: {
            "Penerjemah":{desc:"Menerjemahkan teks antar bahasa secara akurat.", gaji:"Rp4.000.000 – Rp20.000.000", kampus:["UI","UNPAD","UNDIP"]},
            "Penulis":{desc:"Membuat karya tulis kreatif seperti novel dan artikel.", gaji:"Rp3.500.000 – Rp25.000.000", kampus:["UI","UNPAD","UNDIP"]},
            "Editor":{desc:"Menyunting naskah agar efektif dan menarik.", gaji:"Rp4.000.000 – Rp22.000.000", kampus:["UI","UNPAD","UNDIP"]}
        }
    },
    Biologi: {
        jurusan:["Bioteknologi","Biologi Murni","Ekologi"],
        kampus:["UGM","IPB","ITB"],
        pekerjaan: {
            "Ahli Bioteknologi":{desc:"Meneliti organisme untuk aplikasi medis dan pertanian.", gaji:"Rp5.000.000 – Rp30.000.000", kampus:["UGM","IPB","ITB"]},
            "Ahli Gizi":{desc:"Memberikan saran nutrisi dan pola makan sehat.", gaji:"Rp4.500.000 – Rp25.000.000", kampus:["UGM","IPB","ITB"]},
            "Peneliti Lingkungan":{desc:"Menganalisis dampak aktivitas manusia terhadap alam.", gaji:"Rp5.000.000 – Rp28.000.000", kampus:["UGM","IPB","ITB"]}
        }
    },
    Sosiologi: {
        jurusan:["Sosiologi","Antropologi","Kebijakan Publik"],
        kampus:["UI","UNPAD","UNAIR"],
        pekerjaan: {
            "Peneliti Sosial":{desc:"Menganalisis perilaku dan tren masyarakat.", gaji:"Rp4.500.000 – Rp30.000.000", kampus:["UI","UNPAD","UNAIR"]},
            "Konsultan Komunitas":{desc:"Membantu pengembangan program sosial.", gaji:"Rp4.000.000 – Rp25.000.000", kampus:["UI","UNPAD","UNAIR"]},
            "Dosen Sosiologi":{desc:"Mengajar dan meneliti bidang sosial budaya.", gaji:"Rp5.000.000 – Rp35.000.000", kampus:["UI","UNPAD","UNAIR"]}
        }
    }
};

// =====================
// VARIABEL
// =====================
let scores = {Ekonomi:0,"Sastra Inggris":0,Biologi:0,Sosiologi:0};
let current = 0;

// =====================
// FUNGSI UTAMA
// =====================
function shuffleOptions(options){
    const entries = Object.entries(options);
    for(let i=entries.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
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
    scores[bidang]++;
    current++;
    if(current<questions.length) showQuestion();
    else showResult();
}

// =====================
// HASIL QUIZ
// =====================
function showResult(){
    const maxScore = Math.max(...Object.values(scores));
    const hasilList = Object.keys(scores).filter(key=>scores[key]===maxScore);
    let bidangList = hasilList.map(bid=>bidangInfo[bid]);
    let fakultas = bidangList.map(b=>b.jurusan.join(", ")).join(", ");
    let bidangDominan = hasilList.join(", ");
    let kampus = [...new Set(bidangList.flatMap(b=>b.kampus))].join(", ");

    document.getElementById("quiz").innerHTML="";
    document.getElementById("result").innerHTML=`
    <h3>🎯 Hasil Quiz</h3>
    <p><strong>Fakultas yang Cocok:</strong> ${fakultas}</p>
    <p><strong>Bidang Studi Dominan:</strong> ${bidangDominan}</p>
    <p><strong>Rekomendasi Kampus:</strong> ${kampus}</p>
    <button onclick='showDeskripsi(${JSON.stringify(hasilList)})'>Lihat Deskripsi Kerja</button>
    <button onclick='showAllFields()'>Lihat Deskripsi Kerja Lainnya</button>
    <button onclick='location.reload()'>Ulangi Quiz</button>
  `;
}

// =====================
// DESKRIPSI PEKERJA
// =====================
function showDeskripsi(list){
    let html="<h3>💼 Deskripsi Kerja</h3>";
    list.forEach(bidang=>{
        const data = bidangInfo[bidang];
        html+=`<h4>${bidang}</h4>`;
        Object.entries(data.pekerjaan).forEach(([job, info])=>{
            html+=`<div class="job-item" onclick="showDesc('${job}','${info.desc}','${info.gaji}','${info.kampus.join(", ")}')">${job}</div>`;
        });
    });
    html+=`<button onclick="location.reload()">Kembali ke Awal</button>`;
    document.getElementById("result").innerHTML=html;
}

function showDesc(job,desc,gaji,kampus){
    document.getElementById("result").innerHTML=`
    <h3>${job}</h3>
    <div class="desc-box">
        ${desc}<br>
        <strong>Kisaran Gaji:</strong> ${gaji}<br>
        <strong>Rekomendasi Kampus:</strong> ${kampus}
    </div>
    <button onclick="showResult()">Kembali ke Hasil</button>
    <button onclick="location.reload()">Kembali ke Awal</button>
    `;
}

// =====================
// DESKRIPSI BIDANG LAINNYA
// =====================
function showAllFields(){
    const fields = ["Ekonomi","Sastra Inggris","Biologi","Sosiologi"];
    let html="<h3>📚 Pilih Mapel</h3>";
    fields.forEach(f=>{
        html+=`<button onclick="showFieldDesc('${f}')">${f}</button>`;
    });
    html+=`<button onclick="location.reload()">Kembali ke Awal</button>`;
    document.getElementById("result").innerHTML=html;
}

function showFieldDesc(field){
    const data = bidangInfo[field];
    let html = `<h3>${field}</h3>`;

    Object.entries(data.pekerjaan).forEach(([job, info])=>{
        html += `<div class="job-item" onclick="showDesc('${job}','${info.desc}','${info.gaji}','${info.kampus.join(", ")}')">${job}</div>`;
    });

    html += `<button onclick="showAllFields()">Kembali ke Pilihan Mapel</button>`;
    html += `<button onclick="location.reload()">Kembali ke Awal</button>`;

    document.getElementById("result").innerHTML = html;
}

// =====================
// MULAI QUIZ
// =====================
showQuestion()
