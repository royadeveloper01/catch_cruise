// 
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Passing Jokes to VoiceRSS
function tellMe(joke) {
    VoiceRSS.speech({
        key: 'efcc5ae260c64af1bd1ccb82920bab38',
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Enable/Disable Button 
function toggleButton() {
    button.disabled = !button.disabled
}

// Get jokes from Joke API
async function getJokes() {
    // const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    const apiUrl = 'https://api.chucknorris.io/jokes/random';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        let joke = data.value;

        // Text to Speech
        tellMe(joke);
        // Toggle Button
        toggleButton();
    } catch (error) {
        // Catching Errors
        console.log("Whoops!!!", error);
    }   
}

getJokes();

// Adding Event Listeners 
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);