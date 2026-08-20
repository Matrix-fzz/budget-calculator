# Budget Calculator

A simple front-end web application that calculates a cumulative daily budget total based on a starting amount and number of days.

## Features

- **Budget Calculation** — Enter a starting amount (DH) and number of days to compute a cumulative total
- **Daily Increment** — Each day adds `(startAmount + dayIndex)` to the running total
- **Reset Functionality** — Reset form to default values (Starting Amount: 1, Days: 10)
- **Styled Result Display** — Shows the final total in a styled result box

## Technologies

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and form elements |
| CSS3 | Flexbox layout, transitions, shadows, rounded corners |
| JavaScript (ES6+) | Arrow functions, template literals, DOM manipulation |

## How to Use

1. Open `index.html` in any browser
2. Enter a starting amount in Moroccan Dirhams (DH)
3. Enter the number of days
4. Click **"Calculate Total"** to see the result
5. Click **"Reset"** to restore defaults

## Example

Starting Amount: 5, Days: 5
- Day 0: 5, Day 1: 6, Day 2: 7, Day 3: 8, Day 4: 9
- **Total: 35 DH**
