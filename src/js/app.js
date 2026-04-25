// Store last results for detail view navigation
let lastMoviesWithScores = [];

// --- Safe localStorage cache helpers ---
function loadCache(key) {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return null;
    return parsed;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}

function saveCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    /* quota exceeded or private browsing — safe to ignore */
  }
}

import { getMovieMatchMessage } from './matching.js';
import { showResults, showDetail, showNoResults } from './views.js';

// (Optional) Populate dropdowns with static values or fetch genres from API if needed

// Handle form submission

const form = document.querySelector('#preference-form');
const resultsDiv = document.querySelector('#results');

if (form) {
  form.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(e) {
  e.preventDefault();
  const search =
    form.querySelector('input[name="search"]')?.value ||
    form.mood.value ||
    'movie';
  const cacheKey = `movies:${search.toLowerCase()}`;
  resultsDiv.textContent = 'Loading...';

  // 1. Try cache first
  const cached = loadCache(cacheKey);
  if (cached && cached.length > 0) {
    lastMoviesWithScores = cached;
    showResults(lastMoviesWithScores, resultsDiv, getMovieMatchMessage);
    return;
  }

  // 2. Fetch from API if not cached
  try {
    const response = await fetch(
      `/.netlify/functions/api?query=${encodeURIComponent(search)}`
    );
    if (!response.ok) {
      throw new Error('API request failed');
    }
    const data = await response.json();
    if (!data.movies || data.movies.length === 0) {
      showNoResults(resultsDiv);
      lastMoviesWithScores = [];
      return;
    }
    // No scoring, just pass movies as-is for now
    lastMoviesWithScores = data.movies.map((movie) => ({ movie, score: 1 }));
    // 3. Save to cache
    saveCache(cacheKey, lastMoviesWithScores);
    showResults(lastMoviesWithScores, resultsDiv, getMovieMatchMessage);
  } catch {
    resultsDiv.textContent = 'Error loading movies. Please try again.';
  }
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
