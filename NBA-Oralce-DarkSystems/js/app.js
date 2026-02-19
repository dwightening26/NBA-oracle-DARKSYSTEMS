// All 30 NBA Teams with placeholder playoff probabilities
const teams = [
  // Eastern Conference
  { team: "Atlanta Hawks", probability: 58 },
  { team: "Boston Celtics", probability: 92 },
  { team: "Brooklyn Nets", probability: 41 },
  { team: "Charlotte Hornets", probability: 29 },
  { team: "Chicago Bulls", probability: 47 },
  { team: "Cleveland Cavaliers", probability: 81 },
  { team: "Detroit Pistons", probability: 22 },
  { team: "Indiana Pacers", probability: 63 },
  { team: "Miami Heat", probability: 66 },
  { team: "Milwaukee Bucks", probability: 88 },
  { team: "New York Knicks", probability: 74 },
  { team: "Orlando Magic", probability: 52 },
  { team: "Philadelphia 76ers", probability: 79 },
  { team: "Toronto Raptors", probability: 36 },
  { team: "Washington Wizards", probability: 18 },

  // Western Conference
  { team: "Dallas Mavericks", probability: 77 },
  { team: "Denver Nuggets", probability: 86 },
  { team: "Golden State Warriors", probability: 71 },
  { team: "Houston Rockets", probability: 34 },
  { team: "LA Clippers", probability: 69 },
  { team: "Los Angeles Lakers", probability: 73 },
  { team: "Memphis Grizzlies", probability: 68 },
  { team: "Minnesota Timberwolves", probability: 72 },
  { team: "New Orleans Pelicans", probability: 61 },
  { team: "Oklahoma City Thunder", probability: 83 },
  { team: "Phoenix Suns", probability: 75 },
  { team: "Portland Trail Blazers", probability: 26 },
  { team: "Sacramento Kings", probability: 67 },
  { team: "San Antonio Spurs", probability: 31 },
  { team: "Utah Jazz", probability: 39 }
];

const container = document.querySelector(".team-grid");

// Sort highest probability first (looks more professional)
teams.sort((a, b) => b.probability - a.probability);

teams.forEach(team => {
  const card = document.createElement("div");
  card.classList.add("team-card");

  card.innerHTML = `
    <h3>${team.team}</h3>
    <p>Playoff Probability</p>
    <h2>${team.probability}%</h2>
  `;

  container.appendChild(card);
});
