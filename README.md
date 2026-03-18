
# 📘 Portuguese A1 Test – Documentation

## 1. Overview
This project is a **web-based quiz application** designed for foreigners learning Portuguese at the **A1 level**.  
It provides **10 multiple-choice questions** with English prompts and Portuguese answers. After completing the quiz, learners receive a **score** and a **ranking evaluation message** such as:
- *“Excellent! You're ready for A2.”*
- *“Good job! You need to refresh your knowledge a little.”*
- *“I think you need to go back to basics.”*

The project is built using **HTML, CSS, and JavaScript**, with a clean separation of concerns:
- **HTML** → structure
- **CSS** → styling
- **JavaScript** → logic and dynamic quiz generation

---

## 2. Project Structure
```
/project-root
│── index.html   # Main page structure
│── style.css    # Styling for layout and design
│── script.js    # Quiz logic and evaluation
```

---

## 3. Features
- ✅ **Dynamic quiz generation**: Questions are stored in JavaScript and rendered automatically.
- ✅ **Multiple-choice format**: Each question has 3 possible answers.
- ✅ **Scoring system**: Counts correct answers.
- ✅ **Ranking evaluation**: Provides feedback messages based on performance.
- ✅ **Responsive design**: Works well on desktop and mobile.

---

## 4. File Details

### `index.html`
- Defines the page structure.
- Contains:
  - Title and heading.
  - Quiz container (`<div id="quiz">`) where questions are injected dynamically.
  - Button to submit answers.
  - Result display area.

### `style.css`
- Provides styling for:
  - Page layout (centered quiz box).
  - Typography and colors.
  - Buttons with hover effects.
  - Result message formatting.

### `script.js`
- Holds the **questions array** (10 objects with text, options, and correct answer index).
- Functions:
  - `loadQuiz()` → Dynamically generates HTML for questions and options.
  - `checkAnswers()` → Evaluates selected answers, calculates score, and shows ranking message.
- Ranking logic:
  - **100% correct** → “Excellent! You're ready for A2.”
  - **≥ 60% correct** → “Good job! You need to refresh your knowledge a little.”
  - **< 60% correct** → “I think you need to go back to basics.”

---

## 5. Example Question Object
```javascript
{
  text: "1. How do you say 'Good morning' in Portuguese?",
  options: ["Boa noite", "Bom dia", "Olá"],
  answer: 1
}
```
- `text`: The question in English.
- `options`: Array of possible answers in Portuguese.
- `answer`: Index of the correct option (0-based).

---

## 6. How to Run
1. Place all files (`index.html`, `style.css`, `script.js`) in the same folder.
2. Open `index.html` in any modern web browser.
3. Answer the questions and click **“See result”**.
4. View your score and ranking evaluation.

