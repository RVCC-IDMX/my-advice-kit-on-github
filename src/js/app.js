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
  // Read the free-text input for Pattern A
  const queryInput = form.querySelector('input[name="movie-query"]');
  const userQuery = queryInput ? queryInput.value.trim() : '';
  if (!userQuery) {
    resultsDiv.textContent = 'Please describe the kind of movie you want.';
    return;
  }
  // Use the query as the cache key
  const cacheKey = `movies:query=${userQuery.toLowerCase()}`;
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
      `/.netlify/functions/api?q=${encodeURIComponent(userQuery)}`
    );
    const data = await response.json();

    // Helper to clear and append a message safely
    function showMessage(className, icon, message, detail) {
      while (resultsDiv.firstChild) resultsDiv.firstChild.remove();
      const div = document.createElement('div');
      div.className = className;
      div.setAttribute('role', 'alert');
      div.tabIndex = 0;
      const iconSpan = document.createElement('span');
      iconSpan.textContent = `${icon} `;
      div.append(iconSpan);
      const msgSpan = document.createElement('span');
      msgSpan.textContent = message;
      div.append(msgSpan);
      if (detail) {
        const detailSpan = document.createElement('span');
        detailSpan.className = 'error-detail';
        detailSpan.textContent = detail;
        div.append(document.createElement('br'));
        div.append(detailSpan);
      }
      resultsDiv.append(div);
    }

    // Show refusal message if refused flag is set
    if (data.refused && data.refusal_reason) {
      showMessage('refusal-message', '⚠️', data.refusal_reason);
      return;
    }
    // Show input validation errors
    if (
      data.error &&
      (data.error === 'Missing input' || data.error === 'Input too long')
    ) {
      showMessage('refusal-message', '⚠️', data.error);
      return;
    }
    // Show Groq API error
    if (data.error && data.error.includes('Groq API error')) {
      showMessage(
        'ai-error-message',
        '🤖',
        'Sorry, there was a problem with the AI service. Please try again later.',
        data.error
      );
      return;
    }
    // Show network/server error
    if (data.error && data.error.includes('Network/server error')) {
      showMessage(
        'network-error-message',
        '❌',
        'Network error. Please check your connection and try again.'
      );
      return;
    }

    if (!response.ok) {
      throw new Error('API request failed');
    }
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
