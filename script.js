const ebooks = [
  {
    title: "Kuasa Bisnes Online",
    cover: "images/ebook1.png",
    desc: "Panduan lengkap membina bisnes online dari zero hingga stabil.",
    price: "RM29",
    bill: "https://toyyibpay.com/ABC123" // GANTI DENGAN BILL SEBENAR
  },
  {
    title: "Strategi Digital Laju",
    cover: "images/ebook2.png",
    desc: "Teknik pemasaran digital yang praktikal & terbukti.",
    price: "RM19",
    bill: "https://toyyibpay.com/DEF456"
  },
  {
    title: "Template Income Online",
    cover: "images/ebook3.png",
    desc: "Template & sistem siap guna untuk jana income.",
    price: "RM25",
    bill: "https://toyyibpay.com/GHI789"
  }
];

const list = document.getElementById("ebook-list");
const modal = document.getElementById("ebook-modal");
const mImg = document.getElementById("modal-img");
const mTitle = document.getElementById("modal-title");
const mDesc = document.getElementById("modal-desc");
const mPrice = document.getElementById("modal-price");
const buyBtn = document.getElementById("buy-btn");
const closeBtn = document.querySelector(".close");

ebooks.forEach(e => {
  const card = document.createElement("div");
  card.className = "ebook-card";
  card.innerHTML = `
    <img src="${e.cover}" alt="${e.title}">
    <h3>${e.title}</h3>
  `;
  card.onclick = () => {
    mImg.src = e.cover;
    mTitle.textContent = e.title;
    mDesc.textContent = e.desc;
    mPrice.textContent = e.price;
    buyBtn.href = e.bill;
    modal.style.display = "flex";
  };
  list.appendChild(card);
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (ev) => { if(ev.target === modal) modal.style.display = "none"; };
