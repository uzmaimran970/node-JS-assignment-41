"use strict";
//41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["harry", "black writer", "Criss Angel"];
showMagicians(magicianNames);
