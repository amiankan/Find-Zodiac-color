const zodiac = document.getElementById("zodiac");

const body = document.body;


const changeBackground = () =>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "#fc0303";
            break;
        case "tarus":
            body.style.backgroundColor = "#03fc6f";
            break;
        case "gemini":
            body.style.backgroundColor = "#fce514";
            break;
        case "cancer":
            body.style.backgroundColor = "#fffcf7";
            break;
        case "leo":
            body.style.backgroundColor = "#ffd700" ;
            break;
        case "virgo":
            body.style.backgroundColor = "#a52a2a";
            break;
        case "libra":
            body.style.backgroundColor = "#add8e6";
            break;
        case "scorpio":
            body.style.backgroundColor = "#2f4f4f";
            break;
        case "sagittarius":
            body.style.backgroundColor = "#994ead";
            break;
        case "aquarius":
            body.style.backgroundColor = "#579eeb";
            break;
        case "capricorn":
            body.style.backgroundColor = "#eb8d57";
            break;
        case "pisces":
            body.style.backgroundColor = "#fc88d8";
            break;
    
        default:
            break;
    }
};