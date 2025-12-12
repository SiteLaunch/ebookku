const ebooks = [
  {
    title: "Ebook Contoh 1",
    cover: "images/cover1.jpg"
  },
  {
    title: "Ebook Contoh 2",
    cover: "images/cover2.png"
  }
];

const list = document.getElementById("ebook-list");

ebooks.forEach(e => {
  const card = document.createElement("div");
  card.className = "ebook-card";

  card.innerHTML = `
    <img src="${e.cover}" alt="${e.title}">
    <h3>${e.title}</h3>
  `;

  list.appendChild(card);
});
