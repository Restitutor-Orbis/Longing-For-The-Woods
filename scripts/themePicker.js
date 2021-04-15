//save the images locally in the directory and specify their path down here.
//do localStorage.clear(); to reset any uploaded pictures (also resets your temperatue)

var standardBackground1 =  "./pics/0/0.png";
var standardBackground2 =  "./pics/0/1.png";
var standardBackground3 =  "./pics/0/2.png";
var standardBackground4 =  "./pics/0/3.png";
var standardBackground5 =  "./pics/0/4.png";

function pickBackground() {
    var background1 = localStorage.bg1 || standardBackground1;
    var background2 = localStorage.bg2 || standardBackground2;
    var background3 = localStorage.bg3 || standardBackground3;
    var background4 = localStorage.bg4 || standardBackground4;
    var background5 = localStorage.bg5 || standardBackground5;

    var background = [background1, background2, background3, background4, background5];

    var N = 5; // number of images
    var image = randomPicker(N);
    image = background[image];

    //document.getElementById("background").style.backgroundImage = "url(" + "'" + path + "'" +")";
    document.getElementById("background").src = image;

    document.getElementById("image1").src = background1;
    document.getElementById("image2").src = background2;
    document.getElementById("image3").src = background3;
    document.getElementById("image4").src = background4;
    document.getElementById("image5").src = background5;
}

function randomPicker(i) {
    return Math.floor(Math.random() * i);
}


//Picks a random quote per day
function pickQuote() {
    var today_expected = localStorage.today || 0; //default value of 0 for new users
    var today_actual = new Date().getDate(); //current day

    if(today_expected != today_actual) {
        generateQuote();
        localStorage.today = today_actual;
    } else {
        setQuote();
        setAuthor();
    }
}

function generateQuote() {
    var authors_id = ["Albert Camus"]; //insert ID's for wanted authors
    let quotes = new Map(); //map of quotes. Content changed according to author.
    var N = authors_id.length;

    var rnd = randomPicker(N);
    var author = authors_id[rnd];

    switch(author) {
        case "Albert Camus":
            quotes.set("0",
            "In the midst of winter, I found there was, within me, an invincible summer.");
            quotes.set("1",
            "A man without ethics is a wild beast loosed upon this world.");
            quotes.set("2",
            "Those who lack the courage will always find a philosophy to justify it.");
            quotes.set("3",
            "Absolute virtue is impossible and the republic of forgiveness leads, with implacable logic, to the republic of the guillotine.");
            quotes.set("4",
            "Man is an idea, and a precious small idea once he turns his back on love.");
            quotes.set("5",
            "Seeking what is true is not seeking what is desirable.");
            quotes.set("6",
            "I know simply that the sky will last longer than I.");
            quotes.set("7",
            "He who despairs of the human condition is a coward, but he who has hope for it is a fool.");
            break;
        
    }

    var M = quotes.size;
    var rnd = randomPicker(M);
    rnd += ""; //convert to string
    var quote = quotes.get(rnd);
    
    console.log("no. quotes: " + M);
    console.log("random number: " + rnd);
    console.log("quote: " + quote);

    localStorage.quote = quote;
    localStorage.author = author;

    setQuote();
    setAuthor();
}

function setQuote() {
    document.getElementById("quote").innerHTML = localStorage.quote;
}

function setAuthor() {
    document.getElementById("authorName").innerHTML = localStorage.author;
}