//save the images locally in the directory and specify their path down here.
//do localStorage.clear(); to reset any uploaded pictures (also resets your temperatue)

var oneQuotePerDay = false; //change quote daily?

function pickBackground() {
    var background0  =  "./pics/0/0.jpg";
    var background1  =  "./pics/0/1.jpg";
    var background2  =  "./pics/0/2.jpg";
    var background3  =  "./pics/0/3.jpg";
    var background4  =  "./pics/0/4.jpg";
    var background5  =  "./pics/0/5.jpg";
    var background6  =  "./pics/0/6.jpg";
    var background7  =  "./pics/0/7.jpg";
    var background8  =  "./pics/0/8.jpg";
    var background9  =  "./pics/0/9.jpg";
    var background10 =  "./pics/0/10.jpg";
    var background11 =  "./pics/0/11.jpg";
    var background12 =  "./pics/0/12.jpg";

    var background = [background0, background1, background2, background3, background4,
                      background5, background6, background7, background8, background9,
                      background10, background11, background12];

    var N = background.length; // number of images
    var image = randomPicker(N);
    //image = 6; //for viewing spcific image 
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
            opacity = 0.65;
            break;
        case 2:
            opacity = 0.9;
            break;
        case 3:
            opacity = 0.9;
            break;
        case 4:
            opacity = 0.7;
            break;
        case 5:
            opacity = 0.9;
            break;
        case 6:
            opacity = 0.65;
            break;
        case 7:
            opacity = 0.7;
            break;
        case 8:
            opacity = 0.55;
            break;
        case 9:
            opacity = 0.45;
            break;
        case 10:
            opacity = 0.75;
            break;
        case 11:
            opacity = 0.9;
            break;
        case 12:
            opacity = 0.8;
            break;
        default:
            opacity = 0.55;
    }
    return opacity;
}