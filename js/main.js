let currentLevelIndex = localStorage.getItem('currentLevelIndex') ? parseInt(localStorage.getItem('currentLevelIndex')) : 0;

document.getElementById('run-code').addEventListener('click', function () {
    const level = levels[currentLevelIndex];
    runCode(level);
});

function startGame() {
    loadLevel(levels[currentLevelIndex]);
}
