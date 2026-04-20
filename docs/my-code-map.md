# My code map

Fill out each section below by reading your actual code. Do not guess — open each file and look. This map is your reference for the rest of the assignment. When instructions say "your results container" or "your card class," they mean what you write here.

---

## Files and their purposes

For each file, write one sentence about what it does.

| File                    | What it does |
| ----------------------- | ------------ |
| `src/js/app.js`         | Main app logic: handles form, event delegation, and view wiring |
| `src/js/matching.js`    | Matching/filtering logic for recommendations |
| `src/js/data.js`        | Movie dataset and options |
| `src/js/experiments.js` | (Deleted; was for experiments, now removed) |
| `src/css/style.css`     | All CSS styles for layout, colors, and cards |
| `index.html`            | Main HTML structure, form, and containers |

---

## Form


Look at your `index.html` and find the form element.

- Form ID: `#preference-form`
- Select element ID: `#mood`, `#category`, `#energy`, `#era`, `#time`

- What moods/options are in the select?

  - Any mood
  - Happy
  - Sad
  - Inspiring
  - Tense
  - Romantic
  - Adventurous

---

## Results container


Where do results appear on the page?

- Container ID or class: `#results` (section), `.results` (class)
- What element type is it? (`div`, `section`, etc.): `section` (with a child div for cards)

---

## Card structure


Look at how your app.js builds each result card. What elements make up one card?

- Card element type: `div`
- Card class name: `movie-card`

- What is inside each card? (list the child elements and what data they show)
  - h3: Movie title
  - ul > li: Genre, Mood, Time, Energy, Era
  - p.match-msg: Match message

---

## Existing event listeners


Look through your app.js for any `addEventListener` calls. List each one.

  - form (`#preference-form`): 'submit' event, handled by handleFormSubmit
  - resultsDiv (`#results`): 'click' event, handled by handleCardClick (event delegation for .movie-card)

| Where in the code | Event type | What it does |
| ----------------- | ---------- | ------------ |
|                   |            |              |

If you do not see any `addEventListener` calls, write "none found" — and then look again, because the form handler uses one.

---

## Data shape

Open `src/js/data.js` and look at one item in your dataset.

- How many items total? `___`

- Properties on each item

  -
  -
  -

---

## CSS classes for show/hide

Do you have a `.hidden` class or similar in your CSS? If so, what does it do?

- Class name: `___________`
- What CSS rule does it apply? `___________`

If you do not have one, you will create one this week.
