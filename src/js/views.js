// views.js — View functions for movie recommender

// Show results: builds cards for each movie
export function showResults(moviesWithScores, container, getMovieMatchMessage) {
  // Remove all children
  while (container.firstChild) {
    container.firstChild.remove();
  }
  if (moviesWithScores.length === 0) {
    showNoResults(container);
    return;
  }
  for (const { movie, score } of moviesWithScores) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.tabIndex = 0;

    // Poster image (TMDB)
    if (movie.poster) {
      const img = document.createElement('img');
      img.src = movie.poster;
      img.alt = `${movie.title} poster`;
      img.className = 'movie-poster';
      card.append(img);
    }

    // Title
    const title = document.createElement('h3');
    title.textContent = movie.title;
    card.append(title);

    // Details list
    const ul = document.createElement('ul');

    // Genre
    const genreLi = document.createElement('li');
    const genreStrong = document.createElement('strong');
    genreStrong.textContent = 'Genre:';
    genreLi.append(genreStrong, ' ', movie.category);
    ul.append(genreLi);

    // Mood
    const moodLi = document.createElement('li');
    const moodStrong = document.createElement('strong');
    moodStrong.textContent = 'Mood:';
    moodLi.append(moodStrong, ' ', movie.mood);
    ul.append(moodLi);

    // Time
    const timeLi = document.createElement('li');
    const timeStrong = document.createElement('strong');
    timeStrong.textContent = 'Time:';
    timeLi.append(timeStrong, ' ', `${movie.timeMinutes} min`);
    ul.append(timeLi);

    // Energy
    const energyLi = document.createElement('li');
    const energyStrong = document.createElement('strong');
    energyStrong.textContent = 'Energy:';
    energyLi.append(energyStrong, ' ', movie.energy);
    ul.append(energyLi);

    // Era
    const eraLi = document.createElement('li');
    const eraStrong = document.createElement('strong');
    eraStrong.textContent = 'Era:';
    eraLi.append(eraStrong, ' ', movie.era);
    ul.append(eraLi);

    card.append(ul);

    // Overview (TMDB)
    if (movie.overview) {
      const overview = document.createElement('p');
      overview.className = 'movie-overview';
      overview.textContent = movie.overview;
      card.append(overview);
    }

    // Match message
    const matchMsg = document.createElement('p');
    matchMsg.className = 'match-msg';
    matchMsg.textContent = getMovieMatchMessage(score);
    card.append(matchMsg);

    container.append(card);
  }
}

// Show no results message
export function showNoResults(container) {
  // Remove all children
  while (container.firstChild) {
    container.firstChild.remove();
  }
  const msg = document.createElement('p');
  msg.textContent = 'No movies found. Try changing your preferences.';
  container.append(msg);
}

// Show detail view for a single movie
export function showDetail(movie, container, onBack) {
  // Remove all children
  while (container.firstChild) {
    container.firstChild.remove();
  }
  const card = document.createElement('div');
  card.className = 'movie-card';

  // Poster image (TMDB)
  if (movie.poster) {
    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = `${movie.title} poster`;
    img.className = 'movie-poster';
    card.append(img);
  }

  const title = document.createElement('h3');
  title.textContent = movie.title;
  card.append(title);
  // Overview (TMDB)
  if (movie.overview) {
    const overview = document.createElement('p');
    overview.className = 'movie-overview';
    overview.textContent = movie.overview;
    card.append(overview);
  }

  const ul = document.createElement('ul');

  // Genre
  const genreLi = document.createElement('li');
  const genreStrong = document.createElement('strong');
  genreStrong.textContent = 'Genre:';
  genreLi.append(genreStrong, ' ', movie.category);
  ul.append(genreLi);

  // Mood
  const moodLi = document.createElement('li');
  const moodStrong = document.createElement('strong');
  moodStrong.textContent = 'Mood:';
  moodLi.append(moodStrong, ' ', movie.mood);
  ul.append(moodLi);

  // Time
  const timeLi = document.createElement('li');
  const timeStrong = document.createElement('strong');
  timeStrong.textContent = 'Time:';
  timeLi.append(timeStrong, ' ', `${movie.timeMinutes} min`);
  ul.append(timeLi);

  // Energy
  const energyLi = document.createElement('li');
  const energyStrong = document.createElement('strong');
  energyStrong.textContent = 'Energy:';
  energyLi.append(energyStrong, ' ', movie.energy);
  ul.append(energyLi);

  // Era
  const eraLi = document.createElement('li');
  const eraStrong = document.createElement('strong');
  eraStrong.textContent = 'Era:';
  eraLi.append(eraStrong, ' ', movie.era);
  ul.append(eraLi);

  card.append(ul);

  // Back button
  const backBtn = document.createElement('button');
  backBtn.textContent = 'Back to results';
  backBtn.className = 'btn-back';
  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (onBack) onBack();
  });
  card.append(backBtn);

  container.append(card);
}
