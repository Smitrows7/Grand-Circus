function main(){

    /*Add the "big" class to the "grow-me" paragraph. */

    var a = document.getElementById("grow-me");
    a.className = "big";

    /*Remove the "big" class to the "shrink-me" paragraph.*/

    var element = document.getElementById("shrink-me");
     element.classList.remove("big");

    /* Find all the <li>s and log their text content to the console.*/

    const listItems = document.querySelectorAll('li');
     for (let i = 0; i < listItems.length; i++) {
       console.log(listItems[i].textContent);
      }

    /* Set the href of the link to "https://www.example.com" and update the text to say
        "somewhere" instead of "nowhere".*/
    const updateText= document.querySelector(".link");
    updateText.setAttribute("href","https://www.example.com");
    updateText.innerText = "somewhere";

    /* Set the "display" CSS property of the "hide-me" paragraph to "none". */
    const hideMe = document.querySelector('#hide-me');
    hideMe.style.display = "none";

    /*Set the "display" CSS property of the "show-me" paragraph to "block". */
    const showMe = document.querySelector('#show-me');
    showMe.style.display = "block";

    /*Get the text that the user enters into the "name" input box and use it to set a welcome
    message in the <h1>, e.g., "Hello Grant!". */
    const enterName = document.getElementById("name");
    const txt = enterName.value;
    document.querySelector("h1").innerHTML = "Welcome "+ txt; 
    
     
    
}