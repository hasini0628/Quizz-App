const questions = [
    {
      question: "What is the full form of HTML?",
      options: ["Hyper Test Mark Language", "Hyper Text Maintainable Language", "Hyper Text Markup Language", "Heading Text Markup Language"],
      answer: 2
    },
    {
      question: "What is the full form of CSS?",
      options: ["Cascading Style Sheet", "Color Styling Sheet", "Cascading Styling Sheet", "Cascading Style Server"],
      answer: 0
    },
    {
      question: "How do you add an image in HTML?",
      options: ['<img src="" alt="">', '<image src="" alt="">', '<image source="" alt=">', '<img src="" alterante="">'],
      answer: 0
    },
    {
      question: "What is the correct method to add an css file in html file?",
      options: ['<link alt="" href="">', '<link alternate="" href="">', '<script alt="" href="">', '<link ref="" alterante="">'],
      answer: 0
    },
    {
      question: "What are the border properties?",
      options: ['width,radius,style,color', 'width,radius,style,color,solid', 'width,radius,style', 'width,radius,height,color'],
      answer: 0
    },
    {
      question: "Which of the following colors contain equal amounts of RBG?",
      options: ['white', 'gery', 'black', 'none of the above'],
      answer: 3
    },
    {
      question: "What is the method to create a function in JavaScript?",
      options: ['Function(){}', 'Function fun_name(){}', 'function fun_name(){}', 'fun_name(){}'],
      answer: 2
    },
    {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    answer: 0
    },
    {
    question: "Which tag is used to insert a line break in HTML?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    answer: 2
    },
    {
    question: "Which property is used to change text color in CSS?",
    options: ["text-color", "font-color", "color", "background-color"],
    answer: 2
    },
    {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-size", "text-style", "font-weight"],
    answer: 0
    },
    {
    question: "How do you select an element with id 'demo' in CSS?",
    options: [".demo", "#demo", "demo", "*demo"],
    answer: 1
    },
    {
    question: "Which property is used to set the background color in CSS?",
    options: ["color", "background", "bgcolor", "background-color"],
    answer: 3
    },
    {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: 3
    },
    {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: 0
    },
    {
    question: "How do you display an alert box in JavaScript?",
    options: ["alert('Hello');", "msg('Hello');", "popup('Hello');", "display('Hello');"],
    answer: 0
    },

  ];
let current = 0;
  let score = 0;
  let timerId;
  const totalTime = 15;

  const loginDiv = document.getElementById("login");
  const quizDiv = document.getElementById("quiz");
  const resultDiv = document.getElementById("result");
  const questionTitle = document.getElementById("questionTitle");
  const optionsContainer = document.getElementById("optionsContainer");
  const feedback = document.getElementById("feedback");
  const timerDisplay = document.getElementById("timer");
  const scoreText = document.getElementById("scoreText");
  const starsText = document.getElementById("starsText");
 function startQuiz() {
    loginDiv.style.display = "none";
    quizDiv.style.display = "block";
    loadQuestion(current);
  }
 function loadQuestion(index) {
    if (index >= questions.length) {
      showResult();
      return;
    }
const q = questions[index];
questionTitle.innerText = `Q${index + 1}: ${q.question}`;
feedback.innerHTML = "";
optionsContainer.innerHTML = "";
