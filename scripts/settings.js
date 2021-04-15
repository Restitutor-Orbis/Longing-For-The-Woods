var selectedImage;

function initSettings() {
    var background1 = localStorage.bg1 || standardBackground1;
    var background2 = localStorage.bg2 || standardBackground2;
    var background3 = localStorage.bg3 || standardBackground3;
    var background4 = localStorage.bg4 || standardBackground4;
    var background5 = localStorage.bg5 || standardBackground5;

    document.getElementById("image1").style.backgroundImage = background1;
    document.getElementById("image2").style.backgroundImage = background2;
    document.getElementById("image3").style.backgroundImage = background3;
    document.getElementById("image4").style.backgroundImage = background4;
    document.getElementById("image5").style.backgroundImage = background5;
}

function changeImage(number) {
    selectedImage = number;
    document.getElementById('file-input').click();
}

function loadFile(event) {
    var src = URL.createObjectURL(event.target.files[0]);
    var imageWrapper = getImageWrapper();
    var background = document.getElementById("background");

    imageWrapper.src = src;
    imageWrapper.style.backgroundSize = "cover";

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onloadend = function() {
        var base64data = reader.result;                
        base64data += "";
        saveImage(base64data);
    }
    
    //background.style.backgroundImage = temp_url;
}

function saveImage(base64) {
    switch(selectedImage) {
        case 1: 
            localStorage.bg1 = base64;
            break;
        case 2: 
            //localStorage.bg2 = url
            localStorage.bg2 = base64;
            break;
        case 3: 
            //localStorage.bg3 = url
            localStorage.bg3 = base64;
            break;
        case 4: 
            //localStorage.bg4 = url
            localStorage.bg4 = base64;
            break;
        case 5: 
            //localStorage.bg5 = url
            localStorage.bg5 = base64;
            break;
    }
}

function getImageWrapper(url) {
    switch(selectedImage) {
        case 1: 
            //localStorage.bg1 = url;
            return document.getElementById("image1");
            break;
        case 2: 
            //localStorage.bg2 = url
            return document.getElementById("image2");
            break;
        case 3: 
            //localStorage.bg3 = url
            return document.getElementById("image3");
            break;
        case 4: 
            //localStorage.bg4 = url
            return document.getElementById("image4");
            break;
        case 5: 
            //localStorage.bg5 = url
            return document.getElementById("image5");
            break;
    }
}