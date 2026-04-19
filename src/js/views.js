// views.js — View functions for movie recommender

// Show results: builds cards for each movie
export function showResults(moviesWithScores, container, getMovieMatchMessage) {
  container.innerHTML = '';
  if (moviesWithScores.length === 0) {
    showNoResults(container);
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

    container.appendChild(card);
  });
}

// Show no results message
export function showNoResults(container) {
  container.innerHTML = 'No movies found. Try changing your preferences.';
}

// Show detail view for a single movie
export function showDetail(movie, container, onBack) {
  container.innerHTML = '';
  const card = document.createElement('div');
  card.className = 'movie-card';

  const title = document.createElement('h3');
  title.textContent = movie.title;
  card.appendChild(title);

  const ul = document.createElement('ul');
  ul.innerHTML = `
    <li><strong>Genre:</strong> ${movie.category}</li>
    <li><strong>Mood:</strong> ${movie.mood}</li>
    <li><strong>Time:</strong> ${movie.timeMinutes} min</li>
    <li><strong>Energy:</strong> ${movie.energy}</li>
    <li><strong>Era:</strong> ${movie.era}</li>
  `;
  card.appendChild(ul);

  // Back button
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back to results';
  backBtn.className = 'btn-back';
  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (onBack) onBack();
  });
  card.appendChild(backBtn);

  container.appendChild(card);
}
