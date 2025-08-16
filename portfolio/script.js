let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
// Your JavaScript file (e.g., script.js)

document.addEventListener("DOMContentLoaded", function () {
    // Words to cycle through, based on your video
    const words = ["Python Developer", "Web Scraping Expert", "Data Analyst"];

    // Get the element where the text will be typed
    const typingTextElement = document.getElementById('typing-text');

    // Initial state variables
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        // Get the full word for the current index
        const currentWord = words[wordIndex];

        // Get the portion of the word to display
        const displayedText = currentWord.substring(0, charIndex);
        typingTextElement.textContent = displayedText;

        // If we are deleting, decrement charIndex. If typing, increment.
        if (!isDeleting) {
            charIndex++;
        } else {
            charIndex--;
        }

        // Logic to switch states
        if (charIndex === currentWord.length + 1) {
            // Finished typing the word, wait, then start deleting
            isDeleting = true;
            setTimeout(type, 2000); // Pause at the end of the word
            return;
        }

        if (charIndex === 0) {
            // Finished deleting, move to the next word
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Loop back to the start
            setTimeout(type, 500); // Pause before typing the next word
            return;
        }

        // Set the speed of typing/deleting
        const typingSpeed = isDeleting ? 75 : 150;
        setTimeout(type, typingSpeed);
    }

    // Start the animation when the page loads
    type();
});