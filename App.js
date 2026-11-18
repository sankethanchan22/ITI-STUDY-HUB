
const translations = {
  en: {
    welcome: "WELCOME TO YOUR LEARNING SPACE",
    heading: "Learn Skills.",
    future: "Build Your Future.",
    subtitle: "Your new world of ITI learning!",
    explore: "Explore Learning",
    search: "Search your trade...",
    trades: "ITI Trades",
    notes: "Study Notes",
    mcq: "MCQ Practice",
    mock: "Mock Tests",
    practical: "Practical Guide",
    formula: "Formula Book"
  },

  kn: {
    welcome: "ನಿಮ್ಮ ಕಲಿಕಾ ಪ್ರಪಂಚಕ್ಕೆ ಸ್ವಾಗತ",
    heading: "ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಯಿರಿ.",
    future: "ನಿಮ್ಮ ಭವಿಷ್ಯ ರೂಪಿಸಿಕೊಳ್ಳಿ.",
    subtitle: "ನಿಮ್ಮ ITI ಕಲಿಕೆಯ ಹೊಸ ಪ್ರಪಂಚ!",
    explore: "ಕಲಿಕೆಯನ್ನು ಅನ್ವೇಷಿಸಿ",
    search: "ನಿಮ್ಮ ಟ್ರೇಡ್ ಹುಡುಕಿ...",
    trades: "ITI ಟ್ರೇಡ್‌ಗಳು",
    notes: "ಅಧ್ಯಯನ ಟಿಪ್ಪಣಿಗಳು",
    mcq: "ಪ್ರಶ್ನೋತ್ತರ ಅಭ್ಯಾಸ",
    mock: "ಅಭ್ಯಾಸ ಪರೀಕ್ಷೆಗಳು",
    practical: "ಪ್ರಾಯೋಗಿಕ ಮಾರ್ಗದರ್ಶಿ",
    formula: "ಸೂತ್ರಗಳ ಪುಸ್ತಕ"
  }
};

let currentLang = "en";

const allTrades = [
  "Electrician",
  "Fitter",
  "Welder",
  "COPA",
  "Mechanic Diesel",
  "Electronics Mechanic",
  "Turner",
  "Machinist",
  "Plumber",
  "Wireman",
  "Draughtsman Civil",
  "Draughtsman Mechanical",
  "Refrigeration & AC Technician"
];

const tradesList = document.getElementById("tradesList");

allTrades.forEach(trade => {
  const card = document.createElement("div");
  card.className = "card trade-item-card";
  card.onclick = () => openTradeDetails(trade);
  card.innerHTML = `<span>🔧</span><h3>${trade}</h3><p>Explore this trade</p>`;
  tradesList.appendChild(card);
});

document.getElementById("langBtn")
.addEventListener("click", function() {

  currentLang = currentLang === "en" ? "kn" : "en";

  const t = translations[currentLang];

  document.querySelector(".welcome > p").textContent = t.welcome;

  document.querySelector(".welcome h1").innerHTML =
    `${t.heading}<br><span>${t.future}</span>`;

  document.querySelector(".welcome h1 + p").textContent = t.subtitle;

  document.querySelector("h2").textContent = t.explore;

  document.getElementById("searchInput").placeholder = t.search;

  const names = [
    t.trades, t.notes, t.mcq,
    t.mock, t.practical, t.formula
  ];

  document.querySelectorAll(".card:not(.trade-item-card) h3").forEach((el, i) => {
    el.textContent = names[i];
  });

  this.textContent = currentLang === "en" ? "ಕನ್ನಡ" : "English";
});
function openTradeDetails(trade) {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("tradeDetails").style.display = "block";
  document.getElementById("tradeTitle").textContent = trade;
}

function closeTradeDetails() {
  document.getElementById("tradeDetails").style.display = "none";
  document.getElementById("homePage").style.display = "block";
}
function openCourseDetails() {
  document.getElementById("tradeDetails").style.display = "none";
  document.getElementById("courseDetails").style.display = "block";
}

function closeCourseDetails() {
  document.getElementById("courseDetails").style.display = "none";
  document.getElementById("tradeDetails").style.display = "block";
}
function openYearDetails(year) {
  document.getElementById("tradeDetails").style.display = "none";
  document.getElementById("yearDetails").style.display = "block";
  document.getElementById("yearTitle").textContent = year;
}

function closeYearDetails() {
  document.getElementById("yearDetails").style.display = "none";
  document.getElementById("tradeDetails").style.display = "block";
    }
