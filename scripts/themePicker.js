//save the images locally in the directory and specify their path down here.
//do localStorage.clear(); to reset any uploaded pictures (also resets your temperatue)

var oneQuotePerDay = false; //change quote daily?

function pickBackground() {
    var background0 =  "./pics/0/0.jpg";
    var background1 =  "./pics/0/1.jpg";
    var background2 =  "./pics/0/2.jpg";
    var background3 =  "./pics/0/3.jpg";
    var background4 =  "./pics/0/4.jpg";
    var background5 =  "./pics/0/5.jpg";
    var background6 =  "./pics/0/6.jpg";
    var background7 =  "./pics/0/7.jpg";
    var background8 =  "./pics/0/8.jpg";

    var background = [background0, background1, background2, background3, background4, background5, background6, background7, background8];

    var N = background.length; // number of images
    console.log(N);
    var image = randomPicker(N);
    var opacity = getOpacity(image); //changes brightness for individual papes
    image = background[image];


    //document.getElementById("background").style.backgroundImage = "url(" + "'" + path + "'" +")";
    document.getElementById("background").src = image;
    document.getElementById("background").style.opacity = opacity;
}

function randomPicker(i) {
    return Math.floor(Math.random() * i);
}

//use this to control how bright each background is
function getOpacity(imageNumber) {
    var opacity;
    switch(imageNumber) {
        case 0:
            opacity = 0.7;
            break;
        case 1:
            opacity = 0.55;
            break;
        case 2:
            opacity = 0.9;
            break;
        case 3:
            opacity = 0.9;
            break;
        case 4:
            opacity = 0.9;
            break;
        case 5:
            opacity = 0.9;
            break;
        case 6:
            opacity = 0.9;
            break;
        case 7:
            opacity = 0.9;
            break;
        case 8:
            opacity = 0.9;
            break;
        default:
            opacity = 0.55;
    }
    return opacity;
}

//Picks a random quote per day
function pickQuote() {
    var today_expected = localStorage.today || 0; //default value of 0 for new users
    var today_actual = new Date().getDate(); //current day

    if(oneQuotePerDay) {
         if(today_expected != today_actual) {
            generateQuote();
            localStorage.today = today_actual;
        }
    } else {
        generateQuote();
    }
    setQuote();
    setAuthor();
}


function generateQuote() {
    var authors_id = ["To Travel For Evermore", "Far From the Madding Crowd", "Shadow Cabinet", "Salt"]; //insert ID's for wanted authors
    let quotes = new Map(); //map of quotes. Content changed according to author.
    let idToSong = new Map(); //map of quotes. Content changed according to author.
    var N = authors_id.length;

    var rnd = randomPicker(N);
    var author = authors_id[rnd];

    switch(author) {
        case "To Travel For Evermore":
            quotes.set("0",
            "Burned are those who once loved the sun");
            idToSong.set("0",
            "When The Jester Cries");
            quotes.set("1",
            "The true philosopher's stones never shall turn nothing into gold");
            idToSong.set("1",
            "The Nevershining Stones");
            quotes.set("2",
            "The wealth of mine is not like thine: Of gold shining");
            idToSong.set("2",
            "The Nevershining Stones");
            quotes.set("3",
            "Dancer in the light, won't you dance for me?");
            idToSong.set("3",
            "Dancer in the Light");
            quotes.set("4",
            "Let me be afraid of the dark. Let me evaporate in sunlight");
            idToSong.set("4",
            "Lost Realms");
            quotes.set("5",
            "Would take a thousand floods to wash off my mistakes");
            idToSong.set("5",
            "A Sinner's Confession");
            quotes.set("6",
            "There is more to my soul than to my eyes");
            idToSong.set("6",
            "Through Within to Beyond");
            quotes.set("7",
            "I will shape my own path to travel for evermore. Through within to beyond");
            idToSong.set("7",
            "Through Within to Beyond");
            break;
        case "Far From the Madding Crowd":
            quotes.set("0",
            "No, I'm not antisocial, I am of another kind. And my road goes on and on");
            idToSong.set("0",
            "The Road Goes Ever On");
            quotes.set("1",
            "From a buried seed a forest will be. You may destroy, but you cannot undo");
            idToSong.set("1",
            "Tree");
            quotes.set("2",
            "Now the wind calls a storm from the past. Night falls, and they're longing for the woods");
            idToSong.set("2",
            "Longing For The Woods");
            quotes.set("3",
            "Thinking this is a good place to die, but a better place to live");
            idToSong.set("3",
            "Highland Winds");
            quotes.set("4",
            "It all seemed so impermanent though I think that it never will change");
            idToSong.set("4",
            "The Bollard");
            quotes.set("5",
            "But it was long ago and it was far away");
            idToSong.set("5",
            "Longing For The Woods (Part 1)");
            quotes.set("6",
            "A mounting cost of dreamers lost and growing old");
            idToSong.set("6",
            "Land of Olden Glory");
            quotes.set("7",
            "A dream now gone, a name in a song. The garden of the Gods, faded and lost");
            idToSong.set("7",
            "Lament for Lorien");
            break;
        case "Shadow Cabinet":
            quotes.set("0",
            "I cannot fight my nature, the pleasant primitive");
            idToSong.set("0",
            "Demon Desire");
            quotes.set("1",
            "I hate the pity in your eyes. You know you'll always win the race, no matter how hard I try");
            idToSong.set("1",
            "Beatifool");
            quotes.set("2",
            "A black garment suits a black soul");
            idToSong.set("2",
            "The Raven");
            quotes.set("3",
            "O, apathy divine, forget it all in time");
            idToSong.set("3",
            "Apathy Divine: Faith");
            quotes.set("4",
            "But that envy is a safe ally is a lie");
            idToSong.set("4",
            "Envy");
            quotes.set("5",
            "When all is white no more red blood will flow");
            idToSong.set("5",
            "Apathy Divine: Snow");
            quotes.set("6",
            "I cannot trust in anyone, I know. To me my neighbour is my foe");
            idToSong.set("6",
            "I Shall Never Yield");
            quotes.set("7",
            "Wake up sleeping in soil covered in ice. Where will the roses grow?");
            idToSong.set("7",
            "Carpe Noctem");
            quotes.set("8",
            "If you cannot win the day, seize the night!");
            idToSong.set("8",
            "Carpe Noctem");
            quotes.set("9",
            "Shadow, for every light there be. Sorrow, not always dark is she");
            idToSong.set("9",
            "Midnight Song");
            break;
        case "Salt":
            quotes.set("0",
            "I would sing of the false ones who have taken up rule, and the true ones who were burned at the stake");
            idToSong.set("0",
            "The Desparate Poet");
            quotes.set("1",
            "A symphony of triumph for the day hope returns, or a soundtrack to insanity when all the world burns!");
            idToSong.set("1",
            "The Desparate Poet");
            quotes.set("2",
            "There's no way to cut the Gordian Knot of past webs entangled");
            idToSong.set("2",
            "Tears");
            quotes.set("3",
            "I will write no solemn epitaphs for a world that's gone insane");
            idToSong.set("3",
            "The Mad Sailor");
            quotes.set("4",
            "Lesser sons of greater sires bearing wood to their own pyres");
            idToSong.set("4",
            "The Last Tribe");
            quotes.set("5",
            "The weight of the world proved much too tough. Just dragging myself along was more than enough");
            idToSong.set("5",
            "The Mad Sailor");
            quotes.set("6",
            "Tears of sorrow make a man of me");
            idToSong.set("6",
            "Tears");
            quotes.set("7",
            "Cause together we'll weather the storm");
            idToSong.set("7",
            "Weather the Storm");
            quotes.set("8",
            "With you, I believe we are forever");
            idToSong.set("8",
            "Weather the Storm");
            quotes.set("9",
            "Bringing warmth to the cold, helps a human heart be bold");
            idToSong.set("9",
            "Water of Life");
            break;
    }

    var M = quotes.size;
    var rnd = randomPicker(M);
    rnd += ""; //convert to string
    var quote = quotes.get(rnd);
    var song = idToSong.get(rnd);
    
    console.log("no. quotes: " + M);
    console.log("random number: " + rnd);
    console.log("quote: " + quote);

    localStorage.quote = quote;
    localStorage.author = song + " (" + author + ")";

    setQuote();
    setAuthor();
}

function setQuote() {
    document.getElementById("quote").innerHTML = localStorage.quote;
}

function setAuthor() {
    document.getElementById("authorName").innerHTML = localStorage.author;
}