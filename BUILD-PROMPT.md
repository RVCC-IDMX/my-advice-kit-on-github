# BUILD-PROMPT.md

## Project: What Should I Watch?

A personalized movie recommendation tool that helps users find the perfect movie based on mood, available time, genre, energy level, and era preference.

---

### Design Decisions
- **Domain:** Movies
- **Purpose:** Help users discover movies tailored to their mood, time, genre, energy, and era preferences.
- **UI:**
  - Main form with dropdowns for mood, time, genre, energy, and era.
  - Results section displays recommendations as cards.
  - Styled with a modern, clean look using CSS variables and responsive layout.
- **Data:**
  - Movie options are stored in a JavaScript object with properties: title, category, mood, timeMinutes, energy, era.
- **Matching Logic:**
  - Functions check for matches on each preference, handle empty preferences, and score results for best matches.
- **No source files travel between repos.** All data and logic are included below.

---

## Data Structure
```js
const data = {
  domain: "Movies",
  description: "Find the perfect movie for any mood or occasion!",
  options: [
    { title: "The Grand Budapest Hotel", category: "comedy", mood: "happy", timeMinutes: 99, energy: "medium", era: "modern" },
    { title: "Paddington 2", category: "family", mood: "happy", timeMinutes: 103, energy: "low", era: "modern" },
    { title: "The Pursuit of Happyness", category: "drama", mood: "sad", timeMinutes: 117, energy: "low", era: "modern" },
    { title: "Good Will Hunting", category: "drama", mood: "sad", timeMinutes: 126, energy: "low", era: "classic" },
    { title: "Mad Max: Fury Road", category: "action", mood: "adventurous", timeMinutes: 120, energy: "high", era: "modern" },
    { title: "Indiana Jones: Raiders of the Lost Ark", category: "adventure", mood: "adventurous", timeMinutes: 115, energy: "high", era: "classic" },
    { title: "The Notebook", category: "romance", mood: "romantic", timeMinutes: 123, energy: "low", era: "modern" },
    { title: "Pride & Prejudice", category: "romance", mood: "romantic", timeMinutes: 129, energy: "low", era: "classic" },
    { title: "Get Out", category: "horror", mood: "scared", timeMinutes: 104, energy: "medium", era: "modern" },
    { title: "The Conjuring", category: "horror", mood: "scared", timeMinutes: 112, energy: "high", era: "modern" }
    // ...add more movies as needed
  ]
};
```

---

## Matching Functions
```js
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
  if (score === 5) return "Perfect match!";
  if (score >= 3) return "Great option";
  if (score >= 1) return "Worth considering";
  return "Might work";
}
```

---

## UI/UX Summary
- Form fields: mood, time, category, energy, era (all allow "Any"/empty value)
- Results: Recommendations sorted by match score, shown as cards
- Styling: Modern, accessible, responsive

---

## Instructions for the next agent
Build a site that implements the above data, matching logic, and UI/UX. Do not copy any source files—use only this prompt.
