// Glitch effect for page load
window.addEventListener('load', () => {
    document.body.classList.add('glitch');
    setTimeout(() => {
        document.body.classList.remove('glitch');
    }, 1500);
});

/* Add glitch effect in CSS */
const style = document.createElement('style');
style.innerHTML = `
    @keyframes glitch {
        0% { transform: skew(0.01deg, 0.01deg); }
        
        60% { transform: skew(0.01deg, 0.01deg); }
        100% { transform: skew(0, 0); }
    }

    body.glitch {
        animation: glitch 0.1s 8;
    }
`;
document.head.appendChild(style);