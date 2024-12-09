$("#ending1").hide();
$("#ending2").hide();

const questions = [
    {
        text: "What's your vibe?",
        options: [
            
            { text: "Exploring the outdoors", points: [2, 1, 0, 0] },
            { text: "Relaxing with friends", points: [0, 2, 1, 0] },
            { text: "Attending a party", points: [0, 0, 2, 1] },
            { text: "Chilling at home", points: [1, 0, 0, 2] }
        ] 
    },
    {
        text: "What's your favorite munch?",
        options: [
            { text: "Doritos", points: [2, 0, 0, 1] },
            { text: "Lays", points: [0, 2, 1, 0] },
            { text: "Takis", points: [0, 0, 2, 1] },
            { text: "Cheetos", points: [1, 0, 0, 2] }
        ]
    },
    {
        text: "What's your favourite music genre'?",
        options: [
            { text: "Dupstep", points: [1, 0, 0, 2] },
            { text: "Hiphop", points: [0, 2, 1, 0] },
            { text: "Rock n Roll", points: [0, 0, 2, 1] },
            { text: "Indie", points: [2, 1, 0, 0] }
        ]
    },
    {
        text: "How do you handle stressful situations?",
        options: [
            { text: "Stay calm", points: [1, 0, 0, 2] },
            { text: "Crashout", points: [0, 2, 1, 0] },
            { text: "Theorize", points: [0, 0, 2, 1] },
            { text: "Avoid it", points: [2, 1, 0, 0] }
        ]
    },
    {
        text: "What's your favorite season?",
        options: [
            { text: "Spring", points: [2, 0, 0, 1] },
            { text: "Summer", points: [0, 2, 1, 0] },
            { text: "Fall", points: [1, 0, 0, 2] },
            { text: "Winter", points: [0, 0, 2, 1] }
        ]
    },
    {
        text: "How do you usually spend your mornings?",
        options: [
            { text: "Exercising or going for a walk", points: [2, 0, 0, 1] },
            { text: "Relaxing with coffee", points: [1, 0, 0, 2] },
            { text: "Rushing to start the day", points: [0, 0, 2, 1] },
            { text: "Catching up on social media", points: [0, 2, 1, 0] }
        ]
    },
    {
        text: "Which pet would you prefer?",
        options: [
            { text: "Scooby", points: [2, 1, 0, 0] },
            { text: "Scrappy doo", points: [1, 0, 0, 2] },
            { text: "Clifford", points: [0, 2, 1, 0] },
            { text: "Jake the dog", points: [0, 0, 2, 1] }
        ]
    },
    {
        text: "What kind of vacation do you prefer?",
        options: [
            { text: "Camping in nature", points: [2, 1, 0, 0] },
            { text: "A beach getaway", points: [0, 2, 1, 0] },
            { text: "A big city adventure", points: [0, 0, 2, 1] },
            { text: "A quiet retreat", points: [1, 0, 0, 2] }
        ]
    },
    {
        text: "What's your dream car?",
        options: [
            { text: "A sturdy SUV", points: [2, 1, 0, 0] },
            { text: "A sleek sports car", points: [0, 0, 2, 1] },
            { text: "A family-friendly van", points: [0, 2, 1, 0] },
            { text: "A vintage classic", points: [1, 0, 0, 2] }
        ]
    },
    {
        text: "How do you like your drinks?",
        options: [
            { text: "Chilled and refreshing", points: [2, 1, 0, 0] },
            { text: "Sweet and fizzy", points: [0, 2, 1, 0] },
            { text: "Strong and bold", points: [0, 0, 2, 1] },
            { text: "Smooth and creamy", points: [1, 0, 0, 2] }
        ]
    }
];


const results = [
    "You're a Radical Coca-Cola Dude!!!",
    "You're a Brodashis Sour Sprite Honey!!!",
    "You're a Dope Bold Pepsi!!!",
    "You're a Jiggy Pulp Fanta!!!"
];

let currentQuestion = 0;
let scores = [0, 0, 0, 0]; 

const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results');
const resultText = document.getElementById('result-text');

function loadQuestion() {
    questionContainer.innerHTML = "";  
    const question = questions[currentQuestion];
    const questionElement = document.createElement('h2');
    questionElement.textContent = question.text;
    questionContainer.appendChild(questionElement);

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => selectOption(index);
        questionContainer.appendChild(button);
    });
}

function selectOption(optionIndex) {
    const selectedPoints = questions[currentQuestion].options[optionIndex].points;
    for (let i = 0; i < scores.length; i++) {
        scores[i] += selectedPoints[i];
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    

    const highestScore = Math.max(...scores);
    const resultIndex = scores.indexOf(highestScore);
    if (resultIndex < 20){
       $("#ending1").show(); 
    }
    if (resultIndex < 20){
       $("#ending2").show(); 
    }
      if (resultIndex < 20){
       $("#ending3").show(); 
    }
      if (resultIndex < 20){
       $("#ending4").show(); 
    }
    
    resultText.textContent = results[resultIndex];
}

function restartQuiz() {
    currentQuestion = 0;
    scores = [0, 0, 0, 0];
    resultsContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    loadQuestion();
}

loadQuestion();
