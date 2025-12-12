const ebooks = [
  { title: "Kuasa Bisnes Online", cover: "images/ebook1.png" },
  { title: "Ebook Contoh 2", cover: "images/ebook2.png" },
  { title: "Ebook Contoh 3", cover: "images/ebook3.png" }
];

const list = document.getElementById("ebook-list");

list.innerHTML = ""; // clear cache render

ebooks.forEach(e => {
  const card = document.createElement("div");
  card.className = "ebook-card";
  card.innerHTML = `
    <img src="${e.cover}" alt="${e.title}">
    <h3>${e.title}</h3>
  `;
  list.appendChild(card);
});
