const ebooks = [
  {
    title: "Kuasa Bisnes Online",
    cover: "images/ebook1.png"
  },
  {
    title: "Ebook Contoh 2",
    cover: "images/ebook2.png"
  },
  {
    title: "Ebook Contoh 3",
    cover: "images/ebook3.png"
  }
];

const list = document.getElementById("ebook-list");

ebooks.forEach(e => {
  const card = document.createElement("div");
  card.style.textAlign = "center";
  card.style.marginBottom = "20px";

  card.innerHTML = `
    <img src="${e.cover}" style="width:220px;border-radius:14px">
    <p>${e.title}</p>
  `;

  list.appendChild(card);
});
