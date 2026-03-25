import data from "./data.js";
import {
  calculateMatchScore,
  getMovieMatchMessage
} from "./matching.js";

// Utility to get unique values for dropdowns
function getUniqueOptions(key) {
  const values = data.options.map((movie) => movie[key]);
  return Array.from(new Set(values));
}

// Populate dropdowns from data
function populateDropdown(id, key) {
  const select = document.getElementById(id);
  const options = getUniqueOptions(key);
  options.forEach((value) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value.charAt(0).toUpperCase() + value.slice(1);
    select.appendChild(opt);
  });
}

populateDropdown("mood", "mood");
populateDropdown("category", "category");
populateDropdown("energy", "energy");
populateDropdown("era", "era");

// Handle form submission
const form = document.getElementById("movie-form");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const preferences = {
    mood: form.mood.value,
    category: form.category.value,
    energy: form.energy.value,
    era: form.era.value,
    maxTime: form.time.value ? Number(form.time.value) : undefined
  };

  // Filter and score movies
  const moviesWithScores = data.options
    .map((movie) => ({
      movie,
      score: calculateMatchScore(movie, preferences)
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  // Render results
  renderResults(moviesWithScores);
});

function renderResults(moviesWithScores) {
  resultsDiv.innerHTML = "";
  if (moviesWithScores.length === 0) {
    resultsDiv.textContent = "No movies found. Try changing your preferences.";
    return;
  }
  moviesWithScores.forEach(({ movie, score }) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <h3>${movie.title}</h3>
      <ul>
        <li><strong>Genre:</strong> ${movie.category}</li>
        <li><strong>Mood:</strong> ${movie.mood}</li>
        <li><strong>Time:</strong> ${movie.timeMinutes} min</li>
        <li><strong>Energy:</strong> ${movie.energy}</li>
        <li><strong>Era:</strong> ${movie.era}</li>
      </ul>
      <p class="match-msg">${getMovieMatchMessage(score)}</p>
    `;
    resultsDiv.appendChild(card);
  });
}
