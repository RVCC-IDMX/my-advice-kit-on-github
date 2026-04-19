// Store last results for detail view navigation
let lastMoviesWithScores = [];

import { data } from './data.js';
import { calculateMatchScore, getMovieMatchMessage } from './matching.js';
import { showResults, showDetail } from './views.js';
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
  form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const preferences = {
    mood: form.mood.value,
    category: form.category.value,
    energy: form.energy.value,
    era: form.era.value,
    maxTime: form.time.value ? Number(form.time.value) : undefined,
  };

  // Filter and score movies
  lastMoviesWithScores = data.options
    .map((movie) => ({
      movie,
      score: calculateMatchScore(movie, preferences),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  showResults(lastMoviesWithScores, resultsDiv, getMovieMatchMessage);
}

// Event delegation for card clicks
resultsDiv.addEventListener('click', handleCardClick);

function handleCardClick(e) {
  const card = e.target.closest('.movie-card');
  if (!card || !resultsDiv.contains(card)) return;

  // Find the movie by title (assuming titles are unique)
  const title = card.querySelector('h3')?.textContent;
  const found = lastMoviesWithScores.find(({ movie }) => movie.title === title);
  if (found) {
    showDetail(found.movie, resultsDiv, () => {
      showResults(lastMoviesWithScores, resultsDiv, getMovieMatchMessage);
    });
  }
}

// View functions now live in views.js
