const evil = document.getElementById('evil');
const safe = document.getElementById('safe');
const result = document.getElementById('result');

const OFFSET = 10;
let clickCount = 0;

// Place the evil button at its starting spot (next to the safe button) on load
window.addEventListener('load', () => {
    const safeBox = safe.getBoundingClientRect();
    evil.style.left = `${safeBox.right + 16}px`;
    evil.style.top = `${safeBox.top}px`;
});

// The "safe" button behaves like a normal button
safe.addEventListener('click', () => {
    result.textContent = "Sahi jawab 7 croreeeeeee";
});

// Every click on the evil button just moves it somewhere new instead of "working"
evil.addEventListener('click', () => {
    clickCount++;
    result.textContent = `Nice try (attempt #${clickCount}). It moved again.`;
    moveButtonRandomly();
});

function moveButtonRandomly() {
    const buttonBox = evil.getBoundingClientRect();
    const maxLeft = window.innerWidth - buttonBox.width - OFFSET;
    const maxTop = window.innerHeight - buttonBox.height - OFFSET;

    const randomLeft = OFFSET + Math.random() * (maxLeft - OFFSET);
    const randomTop = OFFSET + Math.random() * (maxTop - OFFSET);

    evil.style.left = `${randomLeft}px`;
    evil.style.top = `${randomTop}px`;
}
