//Uses feednami
//https://toolkit.sekando.com/docs/en/feednami

//TO DO
//add parser to the history facts feeds - the date is unnecesarry and crude

function getRssFeed() {
    var links = [];
    //NEWS
    //links.push("https://www.dr.dk/nyheder/service/feeds/udland");
    //links.push("https://www.dr.dk/nyheder/service/feeds/indland");
    //links.push("https://www.dr.dk/nyheder/service/feeds/vejret");

    //HISTORY FACTS
    links.push("https://feeds.feedburner.com/historicalevents");
    links.push("https://feeds.feedburner.com/famousdeaths");

    links.forEach(fetchFeed); //fetches every link added
}

function fetchFeed(url) {
    const textarea = document.querySelector('#feed-textarea > ul');
  
    feednami.load(url)
    .then(feed => {
        textarea.value = ''
        console.log(feed);
        var i = 0;
        for(let entry of feed.entries){
            //create a list element
            let li = document.createElement('li');
            //add HTML content to list items
            li.innerHTML = `<h5><a href="${entry.link}">${entry.title}</a></h5>`;
            //append HTML content to list 
            //create a list element
            let li2 = document.createElement('li');
            //add HTML content to list items
            li2.innerHTML = `<h6><p>${entry.summary}</p></h6>`;
            //append HTML content to list 
            textarea.appendChild(li);
            textarea.appendChild(li2);

            //only load the first 5 feeds
            i++;
            if(i == 5) {
                break;
            }
        }
    });
}

function expand(event) {
    document.getElementById("sidepanel").style.marginLeft = "360px";
}

function collapse(event) {
    document.getElementById("sidepanel").style.marginLeft = "0px";
}

