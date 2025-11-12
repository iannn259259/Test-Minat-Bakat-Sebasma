const questions = [
    {
        question: "Kamu paling suka kegiatan apa?",
        options: {
            A:["Mengatur keuangan atau menganalisis data","Ekonomi"],
            B:["Menulis cerita, artikel, atau menerjemahkan teks","Sastra Inggris"],
            C:["Meneliti makhluk hidup dan lingkungan","Biologi"],
            D:["Mengamati perilaku sosial dan masyarakat","Sosiologi"]
        }
    },
    // ... tambah semua pertanyaan sesuai versi finalmu
];

const bidangInfo = {
    Biologi: {
        pekerjaan: {
            "Ahli Bioteknologi": `🧬 MAPEL: BIOLOGI
🧫 Pekerjaan: Ahli Bioteknologi
Deskripsi Pekerjaan:
Ahli bioteknologi meneliti dan mengembangkan teknologi berbasis organisme hidup untuk menciptakan produk seperti obat, vaksin, dan makanan bernilai tinggi.

Kisaran Gaji:
Pemula: Rp 6.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 25.000.000/bulan
Lulusan S3: Rp 25.000.000 – Rp 40.000.000/bulan

Rekomendasi Universitas dan Fakultas:
UI – FMIPA
ITB – Sekolah Ilmu dan Teknologi Hayati
UGM – Fakultas Biologi
UNAIR – Fakultas Sains dan Teknologi
UNPAD – FMIPA`,
            "Ahli Ekologi": `🌿 Pekerjaan: Ahli Ekologi
Deskripsi Pekerjaan:
Ahli ekologi mempelajari hubungan antar makhluk hidup dan lingkungannya untuk menjaga keseimbangan ekosistem dan keberlanjutan alam.

Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan

Rekomendasi Universitas dan Fakultas:
IPB – Fakultas Kehutanan dan Lingkungan
UGM – Fakultas Biologi
UI – FMIPA
UNAIR – FST
UNS – Fakultas Biologi`
            // ... tambahkan semua pekerjaan Biologi lain
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
            // ... tambahkan pekerjaan Sosiologi lain
        }
    },
    Ekonomi: {
        pekerjaan: {
            "Akuntan": `💼 Pekerjaan: Akuntan
Deskripsi: Akuntan bertugas mencatat, mengelola, dan menganalisis data keuangan.
Kisaran Gaji:
Pemula: Rp 5.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan
Rekomendasi Universitas: UI, UGM, UNAIR, UNDIP, UB`
            // ... tambahkan pekerjaan Ekonomi lain
        }
    },
    "Sastra Inggris": {
        pekerjaan: {
            "Penulis / Editor / Penerjemah": `💼 Pekerjaan: Penulis / Editor / Penerjemah
Deskripsi: Membuat karya tulis, menyunting, dan menerjemahkan teks.
Kisaran Gaji:
Pemula: Rp 4.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan
Rekomendasi Universitas: UI, UNPAD, UNDIP`
            // ... tambahkan pekerjaan lain Sastra Inggris
        }
    }
};

let scores = {Ekonomi:0,"Sastra Inggris":0,Biologi:0,Sosiologi:0};
let current = 0;

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
    if(scores[bidang] !== undefined) scores[bidang]++;
    current++;
    if(current<questions.length) showQuestion();
    else showResult();
}

function showResult(){
    const maxScore = Math.max(...Object.values(scores));
    const hasilList = Object.keys(scores).filter(key=>scores[key]===maxScore);
    let html = `<h3>🎯 Hasil Quiz</h3>`;

    hasilList.forEach(bidang=>{
        html += `<h4>${bidang}</h4>`;
        const jobs = bidangInfo[bidang].pekerjaan;
        Object.entries(jobs).forEach(([job,desc])=>{
            html += `<div class="job-item" onclick="showDesc('${bidang}','${job}')">${job}</div>`;
        });
    });

    html += `<button onclick="location.reload()">Ulangi Quiz</button>`;
    document.getElementById("quiz").innerHTML="";
    document.getElementById("result").innerHTML=html;
}

function showDesc(bidang,job){
    const desc = bidangInfo[bidang].pekerjaan[job];
    document.getElementById("result").innerHTML = `
        <h3>${job}</h3>
        <div class="desc-box">${desc.replace(/\n/g,"<br>")}</div>
        <button onclick="showResult()">Kembali ke Hasil</button>
        <button onclick="location.reload()">Kembali ke Awal</button>
    `;
}

showQuestion();
