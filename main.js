document.getElementById("YesButton").addEventListener("click", function() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});

const noButton = document.getElementById('NoButton');

function moveButtonAway() {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

// Move when mouse gets close
noButton.addEventListener('mouseenter', moveButtonAway);

// Optional: move again if clicked
noButton.addEventListener('click', moveButtonAway);

