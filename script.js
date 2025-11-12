// =====================
// DATA PERTANYAAN
// =====================
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
    {
        question: "Mata pelajaran apa yang paling kamu kuasai?",
        options: {
            A:["Matematika dan Ekonomi","Ekonomi"],
            B:["Bahasa Inggris","Sastra Inggris"],
            C:["Biologi","Biologi"],
            D:["Sosiologi","Sosiologi"]
        }
    },
    {
        question: "Kamu lebih suka bekerja di lingkungan seperti apa?",
        options: {
            A:["Perusahaan atau kantor dengan data finansial","Ekonomi"],
            B:["Studio kreatif atau penerbitan","Sastra Inggris"],
            C:["Laboratorium penelitian","Biologi"],
            D:["Lapangan sosial dan komunitas","Sosiologi"]
        }
    },
    {
        question: "Jika kamu diberi tugas kelompok, peran apa yang paling kamu ambil?",
        options: {
            A:["Meneliti data dan mencari fakta","Biologi"],
            B:["Mengatur komunikasi dan kerja sama kelompok","Sosiologi"],
            C:["Mendesain atau menulis laporan","Sastra Inggris"],
            D:["Mengatur rencana dan pembagian tugas","Ekonomi"]
        }
    },
    {
        question: "Jenis berita atau konten apa yang paling menarik perhatianmu?",
        options: {
            A:["Penemuan ilmiah dan teknologi baru","Biologi"],
            B:["Budaya pop, sastra, atau karya kreatif","Sastra Inggris"],
            C:["Tren ekonomi dan bisnis","Ekonomi"],
            D:["Isu sosial, politik, dan kemasyarakatan","Sosiologi"]
        }
    },
    {
        question: "Teman-teman biasanya mengenal kamu sebagai orang yang...",
        options: {
            A:["Imajinatif dan suka bercerita","Sastra Inggris"],
            B:["Logis dan penuh perhitungan","Ekonomi"],
            C:["Empatik dan suka menolong","Sosiologi"],
            D:["Teliti dan suka meriset","Biologi"]
        }
    },
    {
        question: "Kamu lebih suka membaca tentang...",
        options: {
            A:["Kisah tokoh perubahan sosial","Sosiologi"],
            B:["Penelitian ilmiah dan teknologi","Biologi"],
            C:["Cerita sastra atau budaya","Sastra Inggris"],
            D:["Strategi bisnis sukses","Ekonomi"]
        }
    },
    {
        question: "Kalau ada masalah di sekitar kamu, hal pertama yang kamu pikirkan?",
        options: {
            A:["Bagaimana mengomunikasikannya dengan baik","Sastra Inggris"],
            B:["Bagaimana solusinya secara finansial","Ekonomi"],
            C:["Apa penyebab ilmiahnya","Biologi"],
            D:["Bagaimana dampaknya bagi orang lain","Sosiologi"]
        }
    },
    {
        question: "Kalau kamu lagi jalan-jalan ke tempat baru, hal pertama yang kamu perhatiin apa?",
        options: {
            A:["Aktivitas dan kebiasaan orang-orang di sana","Sosiologi"],
            B:["Keindahan alam atau jenis tumbuhan/hewan uniknya","Biologi"],
            C:["Arsitektur dan desain bangunannya","Sastra Inggris"],
            D:["Perkembangan usaha atau toko-toko di sekitarnya","Ekonomi"]
        }
    },
    {
        question: "Kamu paling suka suasana belajar yang...",
        options: {
            A:["Tenang, bisa fokus eksplorasi sendiri","Sastra Inggris"],
            B:["Ramai, banyak diskusi dan tukar pikiran","Sosiologi"],
            C:["Praktikal, langsung praktik dan eksperimen","Biologi"],
            D:["Tertata, jelas langkah-langkah dan targetnya","Ekonomi"]
        }
    }
];

// =====================
// DATA BIDANG / KERJA
// =====================
const jobs = {
    Biologi:[
        {
            title:"Ahli Bioteknologi",
            desc:`Ahli bioteknologi meneliti dan mengembangkan teknologi berbasis organisme hidup untuk menciptakan produk seperti obat, vaksin, dan makanan bernilai tinggi.`,
            salary:`Pemula: Rp 6.000.000 – Rp 10.000.000/bulan
Berpengalaman: Rp 10.000.000 – Rp 15.000.000/bulan
Lulusan S2: Rp 15.000.000 – Rp 25.000.000/bulan
Lulusan S3: Rp 25.000.000 – Rp 40.000.000/bulan`,
            uni:`UI – FMIPA
ITB – Sekolah Ilmu dan Teknologi Hayati
UGM – Fakultas Biologi
UNAIR – Fakultas Sains dan Teknologi
UNPAD – FMIPA`
        },
        {
            title:"Ahli Ekologi",
            desc:`Ahli ekologi mempelajari hubungan antar makhluk hidup dan lingkungannya untuk menjaga keseimbangan ekosistem dan keberlanjutan alam.`,
            salary:`Pemula: Rp 5.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 20.000.000/bulan
Lulusan S3: Rp 20.000.000 – Rp 30.000.000/bulan`,
            uni:`IPB – Fakultas Kehutanan dan Lingkungan
UGM – Fakultas Biologi
UI – FMIPA
UNAIR – FST
UNS – Fakultas Biologi`
        },
        {
            title:"Ahli Gizi",
            desc:`Ahli gizi memantau dan merancang pola makan sehat untuk meningkatkan kesehatan individu dan masyarakat.`,
            salary:`Pemula: Rp 4.000.000 – Rp 7.000.000/bulan
Berpengalaman: Rp 7.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan`,
            uni:`IPB – Fakultas Ekologi Manusia
UGM – FK-KMK
UNAIR – FKM
UI – FKM
UNDIP – FKM`
        },
        {
            title:"Peneliti Medis",
            desc:`Peneliti medis mencari inovasi di bidang kesehatan seperti obat, vaksin, dan metode pengobatan baru.`,
            salary:`Pemula: Rp 6.000.000 – Rp 9.000.000/bulan
Berpengalaman: Rp 9.000.000 – Rp 14.000.000/bulan
Lulusan S2: Rp 14.000.000 – Rp 22.000.000/bulan
Lulusan S3: Rp 22.000.000 – Rp 35.000.000/bulan`,
            uni:`UI – Fakultas Kedokteran
UGM – Fakultas Kedokteran
ITB – Sekolah Farmasi
UNAIR – Fakultas Kedokteran
UNHAS – Fakultas Kedokteran`
        }
        // ... bisa ditambah semua pekerjaan Biologi lainnya
    ],
    Sosiologi:[
        {
            title:"Peneliti Sosial",
            desc:`Melakukan penelitian terhadap tren sosial, perilaku masyarakat, dan dinamika ekonomi untuk lembaga riset atau universitas.`,
            salary:`Pemula: Rp 5.000.000 – Rp 8.000.000/bulan
Berpengalaman: Rp 8.000.000 – Rp 13.000.000/bulan
Lulusan S2: Rp 13.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan`,
            uni:`UI – FISIP
UGM – FISIPOL
UNAIR – FISIP
UNPAD – FISIP
UNS – FISIP`
        },
        {
            title:"Konsultan Sosial",
            desc:`Memberikan saran kepada pemerintah, NGO, atau lembaga sosial dalam menangani masalah masyarakat.`,
            salary:`Pemula: Rp 4.000.000 – Rp 7.000.000/bulan
Berpengalaman: Rp 7.000.000 – Rp 12.000.000/bulan
Lulusan S2: Rp 12.000.000 – Rp 18.000.000/bulan
Lulusan S3: Rp 18.000.000 – Rp 25.000.000/bulan`,
            uni:`UI – FISIP
UGM – FISIPOL
UNAIR – FISIP
UNHAS – FISIP
UNPAD – FISIP`
        }
        // ... semua pekerjaan sosiologi lainnya
    ],
    Ekonomi:[
        {
            title:"Akuntan",
            desc:`Akuntan bertugas mencatat, mengelola, dan menganalisis data keuangan suatu organisasi atau individu. Tanggung jawabnya meliputi penyusunan laporan keuangan, pemeriksaan kepatuhan terhadap peraturan pajak, serta memberikan saran finansial untuk membantu pengambilan keputusan yang tepat.`,
            salary:`Pemula: Rp 5.000.000 – Rp 10.000.000
Berpengalaman: Rp 10.000.000 – Rp 15.000.000
Lulusan S2: Rp 15.000.000 – Rp 20.000.000
Lulusan S3: Rp 20.000.000 – Rp 30.000.000`,
            uni:`Universitas Airlangga (UNAIR) – Fakultas Ekonomi dan Bisnis (FEB)
Universitas Indonesia (UI) – Fakultas Ekonomi dan Bisnis (FEB)
Universitas Gadjah Mada (UGM) – Fakultas Ekonomika dan Bisnis (FEB)
Universitas Diponegoro (UNDIP) – Fakultas Ekonomika dan Bisnis (FEB)
Universitas Brawijaya (UB) – Fakultas Ekonomi dan Bisnis (FEB)`
        }
        // ... semua pekerjaan ekonomi lainnya
    ],
    "Sastra Inggris":[
        {
            title:"Penulis atau Editor",
            desc:`Penulis atau editor bertanggung jawab membuat dan menyunting teks seperti artikel, novel, atau konten media. Profesi ini membutuhkan kemampuan bahasa, tata tulis, dan kreativitas tinggi.`,
            salary:`Pemula: Rp 4.000.000 – Rp 8.000.000
Berpengalaman: Rp 8.000.000 – Rp 12.000.000
Lulusan S2: Rp 12.000.000 – Rp 18.000.000
Lulusan S3: Rp 18.000.000 – Rp 25.000.000`,
            uni:`Universitas Indonesia – Fakultas Ilmu Budaya (FIB)
Universitas Gadjah Mada – FIB
Universitas Airlangga – FIB
Universitas Diponegoro – FIB
Universitas Padjadjaran – FIB`
        }
        // ... semua pekerjaan sastra Inggris lainnya
    ]
};

// =====================
// VARIABEL
// =====================
let scores = {Ekonomi:0,"Sastra Inggris":0,Biologi:0,Sosiologi:0};
let current = 0;

// =====================
// FUNGSI UTAMA QUIZ
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
    document.getElementById("quiz").innerHTML="";
    document.getElementById("result").innerHTML=`
    <h3>🎯 Hasil Quiz</h3>
    <p><strong>Bidang Studi Dominan:</strong> ${hasilList.join(", ")}</p>
    <button onclick='showAllFields()'>Lihat Semua Pekerjaan</button>
  `;
}

// =====================
// TAMPILKAN SEMUA PEKERJAAN
// =====================
function showAllFields(){
    let html="<h3>📚 Pilih Mapel</h3>";
    Object.keys(jobs).forEach(mapel=>{
        html+=`<button onclick="showJobs('${mapel}')">${mapel}</button>`;
    });
    html+=`<button onclick="location.reload()">Ulangi Quiz</button>`;
    document.getElementById("result").innerHTML=html;
}

function showJobs(mapel){
    let html=`<h3>📌 Pekerjaan di ${mapel}</h3>`;
    jobs[mapel].forEach((job,index)=>{
        html+=`<button onclick="showJobDetail('${mapel}',${index})">${job.title}</button><br>`;
    });
    html+=`<button onclick="showAllFields()">Kembali</button>`;
    document.getElementById("result").innerHTML=html;
}

function showJobDetail(mapel,index){
    const job = jobs[mapel][index];
    document.getElementById("result").innerHTML=`
    <h3>💼 Pekerjaan: ${job.title}</h3>
    <p><strong>Deskripsi Pekerjaan:</strong><br>${job.desc}</p>
    <p><strong>Kisaran Gaji:</strong><br>${job.salary.replace(/\n/g,"<br>")}</p>
    <p><strong>Rekomendasi Universitas dan Fakultas:</strong><br>${job.uni.replace(/\n/g,"<br>")}</p>
    <button onclick="showJobs('${mapel}')">Kembali ke Pekerjaan ${mapel}</button>
    <button onclick="showAllFields()">Kembali ke Mapel</button>
    <button onclick="location.reload()">Ulangi Quiz</button>
  `;
}

// =====================
// MULAI QUIZ
// =====================
showQuestion();
