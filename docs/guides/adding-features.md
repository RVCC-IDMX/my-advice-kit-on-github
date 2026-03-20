# Adding features

Once your site is running and linting passes, try one of these tiers to push your skills further.

---

## Comfortable

**Add a second Vitest test for an existing function.**

Your `src/js/matching.js` file has logic functions that filter or match data. Write a test that imports one of those functions and checks that it returns the correct result for a specific input.

Create a file called `src/js/matching.test.js`:

```js
import { describe, it, expect } from "vitest";
import { yourFunction } from "./matching.js";

describe("yourFunction", () => {
  it("should return the expected result for a known input", () => {
    const result = yourFunction(/* your test input */);
    expect(result).toEqual(/* your expected output */);
  });
});
```

Run it with `npm run test`. Vitest starts in watch mode — it will keep running and re-test when you save changes. Press `q` to quit when you are done. Replace `yourFunction` with an actual function from your matching logic.

---

## Stretching

**Add a "no results" state.**

Right now, if your matching logic returns an empty array, the results area probably just goes blank. That is confusing for users — they do not know if something broke or if nothing matched.

Add a check in `src/js/app.js`: after you run your matching function, if the results array is empty, show a friendly message instead of rendering cards. Something like "No matches found — try different options."

Things to think about:

- Where does the message go? Use the same container your results render into.
- Use `textContent` to set the message, not `innerHTML` — there is no HTML to parse.
- What happens when the user tries again and does get results? Make sure the "no results" message disappears.
- Style the message so it is visually distinct from result cards — a different color, centered text, or a subtle border.

---

## Adventurous

**Write a Vitest test that mocks the DOM.**

Test that `app.js` displays the right number of results when given specific data. This requires setting up a minimal DOM in your test.

```js
import { describe, it, expect } from "vitest";

describe("results display", () => {
  it("should show the correct number of result cards", () => {
    // Set up a minimal DOM
    document.body.innerHTML = '<div id="results"></div>';

    // Import and run your display function
    // Check that the right number of elements were created
    const cards = document.querySelectorAll("#results .card");
    expect(cards.length).toBe(/* expected count */);
  });
});
```

This is advanced. The `jsdom` environment in Vitest makes it possible — your test file runs with a simulated browser DOM. If you get stuck, that is normal. Ask your agent for help and pay attention to how it explains the DOM testing pattern.
