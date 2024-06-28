document.addEventListener('DOMContentLoaded', (event) => {
    var audio = document.getElementById('song');
    var playButton = document.querySelector('.play-button');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.currentTime = 0; // Reset the song to start from the beginning
            audio.play();
            playButton.innerHTML = '&#10074;&#10074;'; // Pause icon
            playButton.classList.add('playing'); // Add class to indicate playing state
        } else {
            audio.pause();
            playButton.innerHTML = '&#9658;'; // Play icon
            playButton.classList.remove('playing'); // Remove class to indicate paused state
        }
    });

    // Add an event listener for when the audio playback ends
    audio.addEventListener('ended', function() {
        playButton.innerHTML = '&#9658;'; // Reset to play icon
        playButton.classList.remove('playing'); // Remove playing class
    });
});
