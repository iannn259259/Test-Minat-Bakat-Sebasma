// ===== Data pekerjaan =====
const jobsData = {
    "Biologi": [
        { title: "Ahli Bioteknologi", desc: "Meneliti & mengembangkan teknologi berbasis organisme hidup.", salary: "Pemula: Rp6-10J, Berpengalaman: Rp10-15J, S2: Rp15-25J, S3: Rp25-40J", universities: "UI-FMIPA, ITB-SITH, UGM-Fak. Biologi, UNAIR-FST, UNPAD-FMIPA" },
        { title: "Ahli Ekologi", desc: "Mempelajari hubungan antar makhluk hidup & lingkungannya.", salary: "Pemula: Rp5-8J, Berpengalaman: Rp8-12J, S2: Rp12-20J, S3: Rp20-30J", universities: "IPB-Fak. Kehutanan, UGM-Fak. Biologi, UI-FMIPA, UNAIR-FST, UNS-Fak. Biologi" }
    ],
    "Ekonomi": [
        { title: "Akuntan", desc: "Mengelola & menganalisis data keuangan organisasi atau individu.", salary: "Pemula: Rp5-10J, Berpengalaman: Rp10-15J, S2: Rp15-20J, S3: Rp20-30J", universities: "UNAIR-FEB, UI-FEB, UGM-FEB, UNDIP-FEB, UB-FEB" },
        { title: "Analis Keuangan", desc: "Menganalisis kondisi keuangan perusahaan & tren pasar.", salary: "Pemula: Rp6-12J, Berpengalaman: Rp12-18J, S2: Rp18-25J, S3: Rp25-35J", universities: "UI-FEB, UGM-FEB, ITB-SBM, UNDIP-FEB, UNAIR-FEB" }
    ],
    "Sastra Inggris": [
        { title: "Penulis atau Editor", desc: "Membuat & menyunting teks, artikel, novel, atau konten media.", salary: "Pemula: Rp4-8J, Berpengalaman: Rp8-12J, S2: Rp12-18J, S3: Rp18-25J", universities: "UI-FIB, UGM-FIB, UNAIR-FIB, UNDIP-FIB, UNPAD-FIB" },
        { title: "Penerjemah", desc: "Mengubah teks/percakapan dari bahasa Inggris ke Indonesia atau sebaliknya.", salary: "Pemula: Rp5-9J, Berpengalaman: Rp9-15J, S2: Rp15-20J, S3: Rp20-30J", universities: "UI-FIB, UGM-FIB, UNAIR-FIB, UNPAD-FIB, UNDIP-FIB" }
    ]
};

// ===== Elemen DOM =====
const dominantSubject = document.getElementById("dominant-subject");
const recommendedFaculty = document.getElementById("recommended-faculty");
const recommendedUniversities = document.getElementById("recommended-universities");
const showJobsBtn = document.getElementById("show-jobs-btn");
const jobsArea = document.getElementById("jobs-area");
const jobAccordions = document.getElementById("job-accordions");
const showAllJobsBtn = document.getElementById("show-all-jobs-btn");
const quizActions = document.getElementById("quiz-actions");
const retryQuizBtn = document.getElementById("retry-quiz-btn");

// ===== Simulasi Hasil Quiz =====
let dominant = ["Ekonomi"];
let recommendedFac = ["FEB"];
let recommendedUni = ["UI, UGM, ITB, UNDIP, UNAIR"];

dominantSubject.textContent = "Mapel Dominan: " + dominant.join(", ");
recommendedFaculty.textContent = "Fakultas yang cocok: " + recommendedFac.join(", ");
recommendedUniversities.textContent = "Rekomendasi Kampus: " + recommendedUni.join(", ");

// ===== Render Accordion =====
function renderJobs(subjects){
    jobAccordions.innerHTML = "";
    subjects.forEach(subj=>{
        if(jobsData[subj]){
            const acc = document.createElement("div");
            acc.classList.add("accordion");

            const header = document.createElement("div");
            header.classList.add("accordion-header");
            header.textContent = subj;
            acc.appendChild(header);

            const content = document.createElement("div");
            content.classList.add("accordion-content");

            jobsData[subj].forEach(job=>{
                const jobBtn = document.createElement("button");
                jobBtn.textContent = job.title;
                jobBtn.addEventListener("click", ()=>{
                    showJobDetail(content, job);
                });
                content.appendChild(jobBtn);
            });

            acc.appendChild(content);
            header.addEventListener("click", ()=>{
                content.classList.toggle("show");
                content.style.maxHeight = content.classList.contains("show") ? content.scrollHeight + "px" : 0;
            });

            jobAccordions.appendChild(acc);
        }
    });
}

// ===== Show job detail =====
function showJobDetail(container, job){
    // Remove existing detail
    const existing = container.querySelector(".job-detail");
    if(existing) existing.remove();

    const detail = document.createElement("div");
    detail.classList.add("job-detail");
    detail.innerHTML = `<strong>${job.title}</strong><br>
                      Deskripsi: ${job.desc}<br>
                      Gaji: ${job.salary}<br>
                      Universitas: ${job.universities}`;
    container.appendChild(detail);
}

// ===== Event Listeners =====
showJobsBtn.addEventListener("click", ()=>{
    jobsArea.classList.remove("hidden");
    renderJobs(dominant);
    quizActions.classList.remove("hidden");
});

showAllJobsBtn.addEventListener("click", ()=>{
    renderJobs(Object.keys(jobsData));
});

retryQuizBtn.addEventListener("click", ()=>{
    location.reload();
});
