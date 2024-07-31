const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

let yesClickCount = 0;

function getRandomPosition() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    return { x: randomX, y: randomY };
}

yesBtn.addEventListener('click', () => {
    yesClickCount++;
    
    if (yesClickCount === 1) {
        question.textContent = 'Awesome! You want a partner!';
        question.style.backgroundImage = 'none'; 
    } else if (yesClickCount === 2) {
        question.textContent = 'I have a gift for you :)';
        question.style.backgroundImage = 'none'; 
    } else if (yesClickCount === 3) {
        question.textContent = 'SURPRISE MORE...';
        question.style.backgroundImage = 'none'; 
    } else if (yesClickCount === 4) {
        question.textContent = ''; 
        question.style.backgroundImage = 'url("monkey.jpg")'; 
    } else if (yesClickCount === 5) {
        question.textContent = ''; 
        question.style.backgroundImage = 'url("git_fun.gif")'; 
    }
});

noBtn.addEventListener('click', () => {
    const { x, y } = getRandomPosition();
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    question.textContent = ''; 
    question.style.backgroundImage = 'none'; 
});

noBtn.addEventListener('mouseover', () => {
    const { x, y } = getRandomPosition();
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
