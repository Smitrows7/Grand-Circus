/* get the number */
//const howMany = document.getElementById("how-many").value;
//console.log("how-many:",howMany);
/* get the coin type */

/*for (let index = 0; index < number; index++) {

}*/

// get color

const formData = document.querySelector("#formInput");
const btn = document.getElementById("btn");
 
btn.addEventListener("click", function (e){
    e.preventDefault();
    const data = new FormData(formData); 
    const howMany = data.get('how-many');
    const whichCoin = data.get('which-coin');
    
    //get color
    var myselect = document.getElementById("which-coin"),
    coinColour = myselect.options[myselect.selectedIndex].className; 
    alert(coinColour);

    alert(whichCoin);
    alert(howMany);

    for (let index = 1; index <= howMany; index++){
      const coinDiv = document.createElement('div');
      coinDiv.className = 'circle';
      coinDiv.style.backgroundColor = coinColour;
      //coinDiv.className = 'circles'+index;
      coinDiv.innerHTML = whichCoin;
      //document.body.appendChild(coinDiv);
      document.getElementById("coin").appendChild(coinDiv);

    }
   
   let coinCount = document.getElementById("coin").childElementCount;
   document.getElementById("coinCnt").innerHTML = "Total Number of Coins :" + coinCount;
    

//clear form
formData.reset();
});
 


    


 


 

