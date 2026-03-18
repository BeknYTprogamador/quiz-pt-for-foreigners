const questions = [
  {
    text: "1. How do you say 'Good morning' in Portuguese?",
    options: ["Boa noite", "Bom dia", "Olá"],
    answer: 1
  },
  {
    text: "2. How do you say 'Thank you' (male speaker)?",
    options: ["Obrigado", "Por favor", "De nada"],
    answer: 0
  },
  {
    text: "3. What is the plural of 'livro' (book)?",
    options: ["Livros", "Livroes", "Livro"],
    answer: 0
  },
  {
    text: "4. How do you say 'Goodbye' in Portuguese?",
    options: ["Tchau", "Oi", "Bom dia"],
    answer: 0
  },
  {
    text: "5. Which word means 'Yes'?",
    options: ["Não", "Sim", "Talvez"],
    answer: 1
  },
  {
    text: "6. How do you say 'One, two, three' in Portuguese?",
    options: ["Um, dois, três", "Uno, dos, tres", "Eins, zwei, drei"],
    answer: 0
  },
  {
    text: "7. What is 'Monday' in Portuguese?",
    options: ["Segunda-feira", "Terça-feira", "Domingo"],
    answer: 0
  },
  {
    text: "8. Complete: 'Eu ___ estudante.' (I am a student.)",
    options: ["sou", "está", "são"],
    answer: 0
  },
  {
    text: "9. What are the colors of the Brazilian flag?",
    options: ["Azul e branco", "Verde, amarelo, azul e branco", "Vermelho e preto"],
    answer: 1
  },
  {
    text: "10. How do you say 'My name is...' in Portuguese?",
    options: ["Eu sou...", "Meu nome é...", "Eu tenho..."],
    answer: 1
  }
];

function loadQuiz() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerText = q.text;

    const optionsList = document.createElement("ul");
    optionsList.classList.add("options");

    q.options.forEach((option, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<input type="radio" name="q${index}" value="${i}"> ${option}`;
      optionsList.appendChild(li);
    });

    quizContainer.appendChild(questionDiv);
    quizContainer.appendChild(optionsList);
  });
}

function checkAnswers() {
  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  const total = questions.length;
  let message = "";

  if (score === total) {
    message = "Excellent! You're ready for A2.";
  } else if (score >= total * 0.6) {
    message = "Good job! You need to refresh your knowledge a little.";
  } else {
    message = "I think you need to go back to basics.";
  }

  document.getElementById("result").innerText =
    `You got ${score} out of ${total} correct. ${message}`;
}

window.onload = loadQuiz;
