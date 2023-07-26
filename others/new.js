import { myFunction5 } from './functions.js'

document.getElementById("button1").addEventListener('click', function() {
    let tweet = prompt("Compose your tweet");
    myFunction5(tweet);
});