// Function to toggle the responsive navigation bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Function to filter the game list based on search input
function filterGames() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        const gameName = card.querySelector('p').textContent.toLowerCase();
        if (gameName.includes(searchQuery)) {
            card.style.display = 'block'; // Show game card
        } else {
            card.style.display = 'none'; // Hide game card
        }
    });
}

// Function to open the game in the iframe
function openGame(gameUrl) {
    const gameFrame = document.getElementById('gameFrame');
    const gameFrameContainer = document.getElementById('gamestuff');

    // Set the source of the iframe to the clicked game's URL
    gameFrame.src = gameUrl;
    
    // Show the iframe container
    gameFrameContainer.style.display = 'block';
}

// Function to toggle fullscreen mode
function toggleFullscreen() {
    const iframe = document.getElementById('gameFrame');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
}

// Attach click event listeners to each game card
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', function () {
        const gameUrl = card.getAttribute('data-url');
        
        // Open the game in the iframe
        openGame(gameUrl);
    });
});
