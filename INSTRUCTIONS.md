# What Should I...? Project instructions

Build a personalized recommendation tool in a domain you choose.

---

## Part 1: Choose your domain

Pick a "What should I...?" question that interests you:

| Domain     | Question                 | Example criteria          |
| ---------- | ------------------------ | ------------------------- |
| Movies     | What should I watch?     | mood, length, genre       |
| Food       | Where should I eat?      | cuisine, price, distance  |
| Music      | What should I listen to? | mood, energy, genre       |
| Games      | What should I play?      | time, players, difficulty |
| Activities | What should I do?        | weather, energy, cost     |
| Books      | What should I read?      | length, genre, mood       |

You can pick one of these or create your own!

**Deliverable:** Update the `domain` and `description` fields in `data.js`.

---

## Part 2: Design your data

Create your recommendation data in `data.js`.

### Step 1: Brainstorm with Copilot

Ask your AI assistant:

> "What properties should each [your domain item] have for a recommendation system?"

Think about what information helps you make a good recommendation.

### Step 2: Define your schema

Decide on 4-6 properties for each item. Include:

- A title or name
- At least one category-type property
- At least one mood/vibe property
- At least one numeric property (time, cost, rating, etc.)

### Step 3: Generate sample data

Ask Copilot to generate 10-15 items matching your schema. Then:

1. Review the data for accuracy
2. Fix any syntax errors (watch for VS Code squiggles!)
3. Add your personal favorites
4. Aim for 15-25 total items

### The 4 D's reminder

When working with AI-generated data:

- **Delegation**: Decide what AI does vs. what you verify
- **Description**: Be specific about your schema requirements
- **Discernment**: Check if values are accurate or guessed
- **Diligence**: Take responsibility for the final result

**Deliverable:** `data.js` with 15-25 options following your schema.

---

## Part 3: Write matching functions

Create functions in `matching.js` that filter your data based on preferences.

### Required functions (4 minimum)

| Function type     | JS concepts used         | Example                               |
| ----------------- | ------------------------ | ------------------------------------- |
| Single criteria   | Conditionals, comparison | `matchesMood(item, mood)`             |
| Range check       | Conditionals, operators  | `fitsTimeAvailable(item, maxMinutes)` |
| Multiple criteria | Logical operators (&&)   | `meetsAllCriteria(item, prefs)`       |
| Classification    | if/else chains           | `getMatchMessage(score)`              |

### Tips

- Use `if (!value)` to handle "any" or empty selections
- Return `true` or `false` from matching functions
- Add JSDoc comments to each function (see [JSDoc basics](tutorials/jsdoc-basics.md))
- Test your functions in the browser console

**Deliverable:** `matching.js` with 4+ working functions.

---

## Part 4: Connect the UI

Wire up your matching functions in `app.js`.

### What's already set up

- Form submission handler
- `findRecommendations()` function that loops through data
- `displayRecommendations()` function that shows results

### What you need to customize

1. Update `findRecommendations()` to use your matching functions
2. Update `createRecommendationCard()` to display your item properties
3. Update the category dropdown in `index.html` with your categories

### Testing

1. Open `index.html` in a browser
2. Try different preference combinations
3. Check the browser console for errors

**Deliverable:** Working recommendation system in the browser.

---

## Part 5: Document, deploy, and reflect

### Update your README

Edit `README.md` to describe:

- What domain you chose and why
- How your recommendation logic works
- Any interesting data you included

### Customize Copilot instructions

Edit `.github/copilot-instructions.md` with:

- Your domain context
- Naming conventions you're using
- Any rules specific to your project

### Deploy to Netlify

Put your project on the web! Follow the guide in `docs/guides/deploying-to-netlify.md`:

1. Create a Netlify account (sign up with GitHub)
2. Import your repository
3. Deploy with default settings
4. Test your live site
5. Add your Netlify URL to your README

### Complete AI collaboration summary

Fill out `ai-collaboration-summary-template.md`:

- What AI helped you create
- How you verified the results
- What you learned about AI collaboration

**Deliverables:** Updated README, copilot-instructions, AI summary, and live Netlify URL.

---

## Getting help

- Use `/explain` on code you don't understand
- Use `@workspace` to find where things are used
- Use inline chat (`Cmd+I` / `Ctrl+I`) for quick questions
- Check the guides in `docs/guides/` for detailed help
