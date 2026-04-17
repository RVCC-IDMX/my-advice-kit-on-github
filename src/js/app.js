import { data } from './data.js';
import { calculateMatchScore, getMovieMatchMessage } from './matching.js';
// Utility to get unique values for dropdowns
function getUniqueOptions(key) {
  const values = data.options.map((movie) => movie[key]);
  return Array.from(new Set(values));
}

// Populate dropdowns from data

function populateDropdown(id, key) {
  const select = document.querySelector(`#${id}`);
  const options = getUniqueOptions(key);
  options.forEach((value) => {
    const opt = document.createElement('option');
    opt.value = value;
    opt.textContent = value.charAt(0).toUpperCase() + value.slice(1);
    select.appendChild(opt);
  });
}

populateDropdown('mood', 'mood');
populateDropdown('category', 'category');
populateDropdown('energy', 'energy');
populateDropdown('era', 'era');

// Handle form submission

const form = document.querySelector('#preference-form');
const resultsDiv = document.querySelector('#results');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const preferences = {
      mood: form.mood.value,
      category: form.category.value,
      energy: form.energy.value,
      era: form.era.value,
      maxTime: form.time.value ? Number(form.time.value) : undefined,
    };

    // Filter and score movies
    const moviesWithScores = data.options
      .map((movie) => ({
        movie,
        score: calculateMatchScore(movie, preferences),
      }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score);

    // Render results
    renderResults(moviesWithScores);
  });
}

function renderResults(moviesWithScores) {
  resultsDiv.innerHTML = '';
  if (moviesWithScores.length === 0) {
    resultsDiv.textContent = 'No movies found. Try changing your preferences.';
    return;
  }
  moviesWithScores.forEach(({ movie, score }) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.tabIndex = 0;

    // Title
    const title = document.createElement('h3');
    title.textContent = movie.title;
    card.appendChild(title);

    // Details list
    const ul = document.createElement('ul');

    const genreLi = document.createElement('li');
    genreLi.innerHTML = '<strong>Genre:</strong> ' + movie.category;
    ul.appendChild(genreLi);

    const moodLi = document.createElement('li');
    moodLi.innerHTML = '<strong>Mood:</strong> ' + movie.mood;
    ul.appendChild(moodLi);

    const timeLi = document.createElement('li');
    timeLi.innerHTML = '<strong>Time:</strong> ' + movie.timeMinutes + ' min';
    ul.appendChild(timeLi);

    const energyLi = document.createElement('li');
    energyLi.innerHTML = '<strong>Energy:</strong> ' + movie.energy;
    ul.appendChild(energyLi);

    const eraLi = document.createElement('li');
    eraLi.innerHTML = '<strong>Era:</strong> ' + movie.era;
    ul.appendChild(eraLi);

    card.appendChild(ul);

    // Match message
    const matchMsg = document.createElement('p');
    matchMsg.className = 'match-msg';
    matchMsg.textContent = getMovieMatchMessage(score);
    card.appendChild(matchMsg);

    resultsDiv.appendChild(card);
  });
}
