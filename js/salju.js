   // Create snowflakes
   function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.width = `${Math.random() * 4 + 2}px`;
    snowflake.style.height = `${Math.random() * 4 + 2}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 4 + 2}s`;
    document.body.appendChild(snowflake);

    // Remove snowflake after animation ends
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        createSnowflake();
    });
}

// Create initial snowflakes
const numberOfSnowflakes = 50;
for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
}
