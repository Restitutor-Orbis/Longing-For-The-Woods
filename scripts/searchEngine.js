function search(event) {
    var x = event.key;
    if (x == "Enter") {
        event.preventDefault()
        let text = document.getElementById("searchbar").value; //creates a string of the query
        let firstSymbol = text.substring(0,1);  //saves the first symbol
        let containSpace = Boolean(text.includes(" ")); //checks if the query holds a space
        let commandEnd; //declares commandEnd

        if(firstSymbol == ".") {
            if(containSpace) {
            	commandEnd = text.indexOf(" "); //finds the index of the function's end
            } else {
            	commandEnd = text.length;
            }

            let commandName = text.substring(1,commandEnd); //saves the name of the function
            let queryScope = text.length; //finds the index of the query's end
            let query = text.substring(commandEnd + 1,queryScope); //saves the query

            switch(commandName) {
            	case "img":
            		url = "https://www.google.com/search?tbm=isch&q=" + query;
            		break;
				case "wiki":
					url = "https://en.wikipedia.org/wiki/" + query;
					break;
            	default:
					url = "index.html";
					break;
            }

        } else { 
			//default search
			//You can change the search engine you prefer here
         	url = 'https://www.google.com/search?q=' + text;
        }

    window.open(url, '_self');

    }
}
