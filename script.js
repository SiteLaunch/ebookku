const ebooks = [
  {
    title: "Kuasa Bisnes Online",
    cover: "images/ebook1.png",
    desc: "Panduan lengkap membina bisnes online dari zero hingga stabil."
  },
  {
    title: "Ebook Contoh 2",
    cover: "images/ebook2.png",
    desc: "Strategi bisnes digital terkini untuk beginner & intermediate."
  },
  {
    title: "Ebook Contoh 3",
    cover: "images/ebook3.png",
    desc: "Idea, template dan sistem untuk jana income online."
  }
];

const list = document.getElementById("ebook-list");
const modal = document.getElementById("ebook-modal");
const mImg = document.getElementById("modal-img");
const mTitle = document.getElementById("modal-title");
const mDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

ebooks.forEach(e => {
  const card = document.createElement("div");
  card.className = "ebook-card";

  card.innerHTML = `
    <img src="${e.cover}">
    <h3>${e.title}</h3>
  `;

  card.onclick = () => {
    mImg.src = e.cover;
    mTitle.textContent = e.title;
    mDesc.textContent = e.desc;
    modal.style.display = "flex";
  };

  list.appendChild(card);
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
};
