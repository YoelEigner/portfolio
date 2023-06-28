import aboutData from '../data/about.json'

export const gradientStyle = (cursorPosition) => {
    return {
        background: `radial-gradient(500px at ${cursorPosition.x}px ${cursorPosition.y}px, #334c55, transparent 90%)`,
    }
};



export const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export const handleDivClick = (url) => {
    window.open(url, '_blank');
};

export const animateText = (setShow, document) => {

    const text = document.querySelector('.bouncing-text');
    const words = aboutData.about.split(' ');
    text.textContent = '';
    words.forEach((word, wordIndex) => {
        word.split('').forEach((letter, letterIndex) => {
            const span = document.createElement('span');
            span.classList.add('bounce-letter');
            span.textContent = letter;
            span.style.animationDelay = `${wordIndex * 0.05 + letterIndex * 0.1}s`;
            text.appendChild(span);

            if (wordIndex === words.length - 1 && letterIndex === word.length - 1) {
                span.addEventListener('animationend', () => {
                    setShow(true);
                });
            }
        });

        const space = document.createTextNode(' ');
        text.appendChild(space);
    });
}