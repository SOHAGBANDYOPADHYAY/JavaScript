// Function to generate a random color
const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

// Function to start changing the background color every second
const startChangingColor = function() {
    intervalId = setInterval(changeBgColor, 1000);
};

// Function to stop changing the background color
const stopChangingColor = function() {
    clearInterval(intervalId);
    // Reset background color to its initial state
    document.body.style.backgroundColor = '#212121';
};

// Function to change the background color
function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
}

// Event listener for the Start button
document.getElementById('start').addEventListener('click', startChangingColor);

// Event listener for the Stop button
document.getElementById('stop').addEventListener('click', stopChangingColor);
