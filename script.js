const showResultsBtn = document.getElementById('showResultsBtn');
const resultsDiv = document.getElementById('results');
const jobsList = document.getElementById('jobsList');
const jobDetailsDiv = document.getElementById('jobDetails');
const jobTitle = document.getElementById('jobTitle');
const jobDesc = document.getElementById('jobDesc');
const jobSalary = document.getElementById('jobSalary');
const jobUni = document.getElementById('jobUni');
const showAllBtn = document.getElementById('showAllBtn');
const allJobsDiv = document.getElementById('allJobs');
const retryBtn = document.getElementById('retryBtn');
const dominantMapelSpan = document.getElementById('dominantMapel');

// Data pekerjaan per mapel
const jobsData = {
    "Biologi": [
        {title:"Ahli Bioteknologi", desc:"Meneliti & mengembangkan teknologi berbasis organisme.", salary:"Pemula: 6-10 jt, Berpengalaman: 10-15 jt", uni:"UI-FMIPA, ITB-SITH, UGM-FBiologi, UNAIR-FST, UNPAD-FMIPA"},
        {title:"Ahli Ekologi", desc:"Mempelajari hubungan antar makhluk hidup & lingkungannya.", salary:"Pemula: 5-8 jt, Berpengalaman: 8-12 jt", uni:"IPB-FKLH, UGM-FBiologi, UI-FMIPA, UNAIR-FST, UNS-FBiologi"},
        {title:"Ahli Gizi", desc:"Merancang pola makan sehat.", salary:"Pemula: 4-7 jt, Berpengalaman: 7-12 jt", uni:"IPB-FEM, UGM-FK, UNAIR-FKM, UI-FKM, UNDIP-FKM"},
        {title:"Peneliti Medis", desc:"Mencari inovasi di bidang kesehatan.", salary:"Pemula: 6-9 jt, Berpengalaman: 9-14 jt", uni:"UI-FK, UGM-FK, ITB-SFarm, UNAIR-FK, UNHAS-FK"},
        {title:"Mikrobiolog", desc:"Mempelajari mikroorganisme & perannya.", salary:"Pemula: 5-8 jt, Berpengalaman: 8-12 jt", uni:"UGM-FBiologi, UI-FMIPA, ITB-SHayati, UNAIR-FST, UNPAD-FMIPA"},
        {title:"Ahli Pertanian Modern", desc:"Mengembangkan teknik tanam efisien & berkelanjutan.", salary:"Pemula: 4-7 jt, Berpengalaman: 7-12 jt", uni:"IPB-FPertanian, UGM-FPertanian, UNPAD-FPertanian, UB-FPertanian, UNAIR-FST"},
        {title:"Ahli Forensik Biologi", desc:"Menganalisis DNA & jaringan tubuh untuk penyelidikan.", salary:"Pemula: 6-9 jt, Berpengalaman: 9-14 jt", uni:"UI-FK, UGM-FBiologi, UNAIR-FK, UNHAS-FK, ITB-SHayati"}
    ],
    "Sosiologi": [
        {title:"Sosiolog", desc:"Menganalisis perilaku & perubahan sosial.", salary:"Pemula: 4-8 jt, Berpengalaman: 8-12 jt", uni:"UI-FISIP, UGM-FISIPOL, UNAIR-FISIP, UNPAD-FISIP, UNS-FISIP"},
        {title:"Jurnalis Sosial", desc:"Menulis & melaporkan isu sosial.", salary:"Pemula: 4-7 jt, Berpengalaman: 7-12 jt", uni:"UI-Ilmu Kom, UNPAD-FIKOM, UGM-FISIPOL, UNAIR-FISIP, UMN-FIKOM"},
        {title:"Analis Kebijakan Publik", desc:"Menilai dampak program pemerintah & menyusun rekomendasi.", salary:"Pemula: 5-9 jt, Berpengalaman: 9-14 jt", uni:"UGM-FISIPOL, UI-FISIP, UNAIR-FISIP, UB-FISIP, UNDIP-FISIP"},
        {title:"Konsultan Sosial", desc:"Memberikan saran pemerintah/NGO dalam masalah sosial.", salary:"Pemula: 4-7 jt, Berpengalaman: 7-12 jt", uni:"UI-FISIP, UGM-FISIPOL, UNAIR-FISIP, UNHAS-FISIP, UNPAD-FISIP"},
        {title:"Peneliti Sosial", desc:"Meneliti tren sosial & perilaku masyarakat.", salary:"Pemula: 5-8 jt, Berpengalaman: 8-13 jt", uni:"UI-FISIP, UGM-FISIPOL, UNAIR-FISIP, UNPAD-FISIP, UNS-FISIP"},
        {title:"Pekerja LSM (NGO)", desc:"Bekerja di lembaga nonpemerintah.", salary:"Pemula: 4-8 jt, Berpengalaman: 8-15 jt", uni:"UI-FISIP, UGM-FISIPOL, UNAIR-FISIP, UNPAD-FISIP, UNDIP-FISIP"},
        {title:"Dosen Sosiologi", desc:"Mengajar & meneliti di perguruan tinggi.", salary:"Pemula: 6-10 jt, Berpengalaman: 10-15 jt", uni:"UI-FISIP, UGM-FISIPOL, UNAIR-FISIP, UNPAD-FISIP, UB-FISIP"}
    ],
    "Ekonomi": [
        {title:"Akuntan", desc:"Mencatat, mengelola & menganalisis data keuangan.", salary:"Pemula: 5-10 jt, Berpengalaman: 10-15 jt", uni:"UNAIR-FEB, UI-FEB, UGM-FEB, UNDIP-FEB, UB-FEB"},
        {title:"Analis Keuangan", desc:"Menganalisis kondisi keuangan perusahaan & pasar.", salary:"Pemula: 6-12 jt, Berpengalaman: 12-18 jt", uni:"UI-FEB, UGM-FEB, ITB-SBM, UNDIP-FEB, UNAIR-FEB"},
        {title:"Ekonom", desc:"Meneliti & memprediksi tren ekonomi.", salary:"Pemula: 7-12 jt, Berpengalaman: 12-20 jt", uni:"UI-FEB, UGM-FEB, UNPAD-FEB, UB-FEB, UNAIR-FEB"},
        {title:"Konsultan Bisnis", desc:"Membantu perusahaan mengembangkan strategi.", salary:"Pemula: 6-10 jt, Berpengalaman: 10-20 jt", uni:"UI-FEB, ITB-SBM, UGM-FEB, UNAIR-FEB, BINUS-FBM"},
        {title:"Investor / Analis Pasar Modal", desc:"Mengelola portofolio saham & risiko investasi.", salary:"Pemula: 7-12 jt, Berpengalaman: 12-25 jt", uni:"UI-FEB, UGM-FEB, ITB-SBM, UNDIP-FEB, UNAIR-FEB"},
        {title:"Auditor Internal", desc:"Memeriksa kepatuhan & risiko perusahaan.", salary:"Pemula: 6-10 jt, Berpengalaman: 10-15 jt", uni:"UI-FEB, UNDIP-FEB, UNAIR-FEB, UGM-FEB, UB-FEB"},
        {title:"Manajer Pemasaran", desc:"Mengembangkan strategi promosi & meningkatkan penjualan.", salary:"Pemula: 6-10 jt, Berpengalaman: 10-20 jt", uni:"UI-FEB, ITB-SBM, UGM-FEB, BINUS-FEB, UNDIP-FEB"}
    ],
    "Sastra Inggris": [
        {title:"Penulis / Editor", desc:"Membuat & menyunting teks.", salary:"Pemula: 4-8 jt, Berpengalaman: 8-12 jt", uni:"UI-FIB, UGM-FIB, UNAIR-FIB, UNDIP-FIB, UNPAD-FIB"},
        {title:"Penerjemah", desc:"Mengubah teks/percakapan bahasa Inggris ke Indonesia & sebaliknya.", salary:"Pemula: 5-9 jt, Berpengalaman: 9-15 jt", uni:"UI-FIB, UGM-FIB, UNAIR-FIB, UNPAD-FIB, UNDIP-FIB"},
        {title:"Public Relations (PR)", desc:"Membangun hubungan baik perusahaan & publik.", salary:"Pemula: 5-9 jt, Berpengalaman: 9-15 jt", uni:"UNPAD-Kom, UI-FISIP, BINUS-Kom, UGM-Kom, UNAIR-Kom"},
        {title:"Content Creator / Copywriter", desc:"Menciptakan konten menarik untuk media & iklan.", salary:"Pemula: 4-8 jt, Berpengalaman: 8-12 jt", uni:"UI-FIB, BINUS-Kom, UNPAD-Kom, UNAIR-FIB, UGM-FIB"},
        {title:"Guru Bahasa Inggris", desc:"Mengajar tata bahasa & keterampilan bahasa Inggris.", salary:"Pemula: 4-7 jt, Berpengalaman: 7-12 jt", uni:"UNJ-FBS, UNY-FBS, UI-FIB, UGM-FIB, UPI-FBS"},
        {title:"Tour Guide Internasional", desc:"Memandu wisatawan & informasi budaya.", salary:"Pemula: 4-8 jt, Berpengalaman: 8-12 jt", uni:"Udayana-FPar, UGM-FIB, UI-FIB, UNAIR-FIB, UNS-FIB"},
        {title:"Linguist", desc:"Meneliti struktur & sejarah bahasa.", salary:"Pemula: 6-10 jt, Berpengalaman: 10-15 jt", uni:"UI-FIB, UGM-FIB, UNAIR-FIB, UNDIP-FIB, UNHAS-FIB"}
    ]
};

// Mapel dominan (contoh, bisa diganti hasil quiz)
let dominantMapel = "Ekonomi";

// Tampilkan hasil quiz
showResultsBtn.addEventListener('click', () => {
    dominantMapelSpan.textContent = dominantMapel;
    resultsDiv.classList.remove('hidden');
    showResultsBtn.classList.add('hidden');

    displayJobs(dominantMapel, jobsList);
});

function displayJobs(mapel, container) {
    container.innerHTML = '';
    jobsData[mapel].forEach(job => {
        const li = document.createElement('li');
        li.textContent = job.title;
        li.addEventListener('click', () => {
            jobTitle.textContent = job.title;
            jobDesc.textContent = job.desc;
            jobSalary.textContent = job.salary;
            jobUni.textContent = "Rekomendasi Universitas: " + job.uni;
            jobDetailsDiv.classList.remove('hidden');
        });
        container.appendChild(li);
    });
}

// Tombol lihat semua mapel
showAllBtn.addEventListener('click', () => {
    allJobsDiv.classList.toggle('hidden');
    allJobsDiv.innerHTML = '';
    for (let mapel in jobsData) {
        const h4 = document.createElement('h4');
        h4.textContent = mapel;
        allJobsDiv.appendChild(h4);
        const ul = document.createElement('ul');
        displayJobs(mapel, ul);
        allJobsDiv.appendChild(ul);
    }
});

// Tombol ulangi quiz
retryBtn.addEventListener('click', () => {
    location.reload();
});
