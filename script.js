//your JS code here. If required.
// Array of sound filenames
const sounds = ['sound1.mp3', 'sound2.mp3', 'sound3.mp3']; // Add your sound file names

// Function to create buttons
function createButtons() {
  const buttonsContainer = document.getElementById('buttons');

  // Create buttons for each sound
  sounds.forEach((sound, index) => {
    const button = document.createElement('button');
    button.textContent = `Sound ${index + 1}`;
    button.className = 'btn';
    button.addEventListener('click', () => playSound(sound));
    buttonsContainer.appendChild(button);
  });

  // Create stop button
  const stopButton = document.createElement('button');
  stopButton.textContent = 'Stop';
  stopButton.className = 'stop';
  stopButton.addEventListener('click', stopAllSounds);
  buttonsContainer.appendChild(stopButton);
}

// Function to play a sound
function playSound(sound) {
  const audio = new Audio(`sounds/${sound}`);
  audio.play();
}

// Function to stop all sounds
function stopAllSounds() {
  const allSounds = document.querySelectorAll('audio');
  allSounds.forEach((sound) => sound.pause());
}

// Call the function to create buttons
createButtons();
