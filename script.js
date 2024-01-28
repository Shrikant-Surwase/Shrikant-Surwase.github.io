function getRandomPosition() {
    const offset = 50; // Adjust this value based on your preference
    const randomX = Math.random() * (window.innerWidth - offset * 2) + offset;
    const randomY = Math.random() * (window.innerHeight - offset * 2) + offset;
    return { x: randomX, y: randomY };
}

function moveNoButton() {
    const newPosition = getRandomPosition();
    document.getElementById('noButton').style.left = newPosition.x + 'px';
    document.getElementById('noButton').style.top = newPosition.y + 'px';
}

function selectOption(option) {
    if (option === 'yes') {
       window.location.href = 'cool.html';
        // Adjust the delay (in milliseconds) based on your preference
    } else if (option === 'no') {
        document.getElementById("data").classList.remove('hidden')
        document.getElementById('noButton').classList.add('move');
        document.getElementById('yesButton').classList.add('selected');
    }
}
