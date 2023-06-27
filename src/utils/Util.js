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