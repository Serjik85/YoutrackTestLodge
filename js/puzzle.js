const synthesis = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance('Hello');
let isPlaying = false;

this.synthesis.speak(utterance);
isPlaying = true;

// somehow chrome stops after 14seconds, so resume from there
var synthesisInterval = setInterval(() => {
    if (!isPlaying) {
        clearInterval(synthesisInterval);
    } else {
        synthesis.resume();
    }
}, 14000);

utterance.onend = () => {
    isPlaying = false;
}