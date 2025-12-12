// data ebooks (edit mudah)
const ebooks = [
  {
    id: "ebook1",
    title: "Kuasa Bisnes Online",
    desc: "Rahsia mudah mula bisnes dari zero sampai stabil.",
    link: "/ebook1/",
    cover: "covers/ebook1.jpg"
  },
  {
    id: "ebook2",
    title: "Teknik Closing 3X Ganda",
    desc: "Strategi dan skrip closing yang terbukti berkesan.",
    link: "/ebook2/",
    cover: "covers/ebook2.jpg"
  },
  {
    id: "ebook3",
    title: "Marketing Booster 2025",
    desc: "Taktik marketing terbaru untuk tingkatkan jualan.",
    link: "/ebook3/",
    cover: "covers/ebook3.jpg"
  }
];

const list = document.getElementById("ebookList");

function buildCard(e){
  const card = document.createElement("div");
  card.className = "ebook-card";
  card.innerHTML = `
    <img class="ebook-thumb" src="${e.cover}" alt="${e.title}">
    <div class="card-body">
      <h3>${e.title}</h3>
      <p>${e.desc}</p>
      <div class="card-actions">
        <a class="btn" href="${e.link}">Baca Sekarang</a>
      </div>
    </div>
  `;
  return card;
}

// render all
ebooks.forEach(e => list.appendChild(buildCard(e)));


// optional: improve tapping UX on mobile - highlight ripple-ish
document.addEventListener('touchstart', function(){}, {passive: true});

// If you want quick track click for analytics (example)
list.addEventListener('click', function(ev){
  const a = ev.target.closest('a');
  if(!a) return;
  // data-layer or fetch to analytics endpoint can go here
  // console.log('user clicked', a.href);
});

