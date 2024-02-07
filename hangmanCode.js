const TOTAL_LIVES = 10;
let lives = TOTAL_LIVES;
let word = '';
let guessedWord = '';
let guessedLetters = [];
let isGameOver = false;
let isGameWon = false;
let isGameLost = false;
let isGameStarted = false;

let letters = 'abcdefghijklmnopqrstuvwxyz';
for (let letter of letters) {
    let button = document.getElementById(letter);
    if (button) {
        button.disabled = true;
    }
}

function startGame() {
    isGameStarted = true;
    lives = TOTAL_LIVES;
    guessedLetters = [];
    isGameOver = false;
    isGameWon = false;
    isGameLost = false;
    word = getWord();
    guessedWord = getGuessedWord(word, guessedLetters);
    updateDisplay();
    document.getElementById('play').innerText = "Restart";
    // Reset button colors
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of letters) {
        let button = document.getElementById(letter);
        if (button) {
            button.style.backgroundColor = ""; // Reset to original color
            button.disabled = false; // Enable button
        }
    }
}


function getWord() {
    //List of words to choose from that are all programming languages and tools
    const words = [
        'javascript', 'python', 'java', 'kotlin', 'swift', 'dart', 'typescript',
        'html', 'css', 'php', 'ruby', 'c', 'c++', 'c#', 'go', 'rust', 'scala', 'perl',
        'r', 'matlab', 'lua', 'groovy', 'shell', 'powershell', 'bash', 'objective-c',
        'assembly', 'fortran', 'cobol', 'haskell', 'erlang', 'elixir', 'clojure',
        'sql', 'mysql', 'postgresql', 'mongodb', 'oracle', 'sqlite', 'redis', 'firebase',
        'django', 'flask', 'laravel', 'express', 'spring', 'ruby on rails', 'angular',
        'react', 'vue', 'ember', 'backbone', 'jquery', 'bootstrap', 'tailwind', 'bulma',
        'webpack', 'babel', 'gulp', 'grunt', 'npm', 'yarn', 'docker', 'kubernetes',
        'jenkins', 'travis', 'git', 'github', 'bitbucket', 'svn', 'mercurial', 'jira',
        'trello', 'slack', 'vscode', 'intellij', 'eclipse', 'sublime', 'vim', 'atom',
        'netbeans', 'xcode', 'android studio', 'visual studio', 'unity', 'unreal engine',
        'tensorflow', 'pytorch', 'keras', 'scikit-learn', 'numpy', 'pandas', 'matplotlib',
        'opencv', 'flask', 'django', 'node.js', 'express.js', 'mongodb', 'mysql', 'postgresql',
        'redis', 'graphql', 'rest', 'soap', 'json', 'xml', 'api', 'http', 'tcp', 'udp',
        'dns', 'ssl', 'ssh', 'oauth', 'jwt', 'encryption', 'decryption', 'hashing', 'sorting',
        'searching', 'recursion', 'iteration', 'data structures', 'algorithms', 'machine learning',
        'artificial intelligence', 'neural networks', 'deep learning', 'reinforcement learning',
        'natural language processing', 'computer vision', 'big data', 'cloud computing',
        'microservices', 'serverless', 'agile', 'scrum', 'kanban', 'devops', 'continuous integration',
        'continuous delivery', 'test-driven development', 'behavior-driven development'
    ].filter(word => word.length >= 3 && !word.match(/[^a-zA-Z]/));

    //Randomly chooses a word from the list of words
    return words[Math.floor(Math.random() * words.length)];
}

function getGuessedWord(word, guessedLetters) {
    let guessedWord = '';
    for (let letter of word) {
        if (guessedLetters.includes(letter)) {
            guessedWord += letter;
        } else {
            guessedWord += ' _ ';
        }
    }
    return guessedWord;
}

function guessLetter(letter) {
    if (isGameOver) return;
    let button = document.getElementById(letter);
    if (!word.includes(letter)) {
        lives--;
        button.style.backgroundColor = "red";
    }
    else {
        button.style.backgroundColor = "green";
    }
    button.disabled = true;
    guessedLetters.push(letter);
    guessedWord = getGuessedWord(word, guessedLetters);
    checkGameStatus();
    updateDisplay();
}

function checkGameStatus() {
    if (guessedWord === word) {
        isGameOver = true;
        isGameWon = true;
        document.getElementById('play').innerText = "Play Again?";
    } else if (lives <= 0) {
        isGameOver = true;
        isGameLost = true;
        document.getElementById('play').innerText = "Play Again?";
    }
}

function updateDisplay() {
    //document.getElementById('hangmanPic').src = `./images/${lives}.png`;
    document.getElementById('guessedWord').innerText = guessedWord;
    document.getElementById('lives').innerText = "Guesses Remaining: " + lives;
    document.getElementById('message').innerText = getMessage();
}

function getMessage() {
    if (!isGameStarted) {
        return "Press Start to play!";
    }
    if (isGameOver) {
        if (isGameWon) {
            return "You win!";
        } else if (isGameLost) {
            return "You lose!\n The word was: " + word;
        }
    } else {
        return "Good luck!";
    }
}

document.getElementById('play').addEventListener('click', startGame);
document.getElementById('a').addEventListener('click', function () {
    guessLetter('a');
});
document.getElementById('b').addEventListener('click', function () {
    guessLetter('b');
});
document.getElementById('c').addEventListener('click', function () {
    guessLetter('c');
});
document.getElementById('d').addEventListener('click', function () {
    guessLetter('d');
});
document.getElementById('e').addEventListener('click', function () {
    guessLetter('e');
});
document.getElementById('f').addEventListener('click', function () {
    guessLetter('f');
});
document.getElementById('g').addEventListener('click', function () {
    guessLetter('g');
});
document.getElementById('h').addEventListener('click', function () {
    guessLetter('h');
});
document.getElementById('i').addEventListener('click', function () {
    guessLetter('i');
});
document.getElementById('j').addEventListener('click', function () {
    guessLetter('j');
});
document.getElementById('k').addEventListener('click', function () {
    guessLetter('k');
});
document.getElementById('l').addEventListener('click', function () {
    guessLetter('l');
});
document.getElementById('m').addEventListener('click', function () {
    guessLetter('m');
});
document.getElementById('n').addEventListener('click', function () {
    guessLetter('n');
});
document.getElementById('o').addEventListener('click', function () {
    guessLetter('o');
});
document.getElementById('p').addEventListener('click', function () {
    guessLetter('p');
});
document.getElementById('q').addEventListener('click', function () {
    guessLetter('q');
});
document.getElementById('r').addEventListener('click', function () {
    guessLetter('r');
});
document.getElementById('s').addEventListener('click', function () {
    guessLetter('s');
});
document.getElementById('t').addEventListener('click', function () {
    guessLetter('t');
});
document.getElementById('u').addEventListener('click', function () {
    guessLetter('u');
});
document.getElementById('v').addEventListener('click', function () {
    guessLetter('v');
});
document.getElementById('w').addEventListener('click', function () {
    guessLetter('w');
});
document.getElementById('x').addEventListener('click', function () {
    guessLetter('x');
});
document.getElementById('y').addEventListener('click', function () {
    guessLetter('y');
});
document.getElementById('z').addEventListener('click', function () {
    guessLetter('z');
});

// startGame();
