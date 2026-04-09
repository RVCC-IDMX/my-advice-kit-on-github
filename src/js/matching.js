// Matching logic for What Should I Watch?
/**
 * Checks if a movie matches the desired mood
 */
function matchesMood(movie, desiredMood) {
  if (!desiredMood) return true;
  return movie.mood === desiredMood;
}

/**
 * Checks if a movie matches the desired category/genre
 */
function matchesCategory(movie, desiredCategory) {
  if (!desiredCategory) return true;
  return movie.category === desiredCategory;
}

/**
 * Checks if a movie matches the desired energy level
 */
function matchesEnergy(movie, desiredEnergy) {
  if (!desiredEnergy) return true;
  return movie.energy === desiredEnergy;
}

/**
 * Checks if a movie matches the desired era
 */
function matchesEra(movie, desiredEra) {
  if (!desiredEra) return true;
  return movie.era === desiredEra;
}

/**
 * Checks if a movie fits within the user's available time
 */
function fitsTimeRange(movie, minMinutes, maxMinutes) {
  if (!maxMinutes) return true;
  if (maxMinutes === 999) return movie.timeMinutes > 120;
  return movie.timeMinutes <= maxMinutes;
}

/**
 * Checks if a movie meets all user criteria
 */
function meetsAllMovieCriteria(movie, preferences) {
  return (
    matchesMood(movie, preferences.mood) &&
    matchesCategory(movie, preferences.category) &&
    matchesEnergy(movie, preferences.energy) &&
    matchesEra(movie, preferences.era) &&
    fitsTimeRange(movie, 0, preferences.maxTime)
  );
}

/**
 * Calculates a match score for sorting
 */
function calculateMatchScore(movie, preferences) {
  let score = 0;
  if (matchesMood(movie, preferences.mood)) score++;
  if (matchesCategory(movie, preferences.category)) score++;
  if (matchesEnergy(movie, preferences.energy)) score++;
  if (matchesEra(movie, preferences.era)) score++;
  if (fitsTimeRange(movie, 0, preferences.maxTime)) score++;
  return score;
}

/**
 * Returns a message based on match score
 */
function getMovieMatchMessage(score) {
  if (score === 5) return 'Perfect match!';
  if (score >= 3) return 'Great option';
  if (score >= 1) return 'Worth considering';
  return 'Might work';
}

export {
  matchesMood,
  matchesCategory,
  matchesEnergy,
  matchesEra,
  fitsTimeRange,
  meetsAllMovieCriteria,
  calculateMatchScore,
  getMovieMatchMessage,
};
