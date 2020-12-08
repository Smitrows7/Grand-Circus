(function(){
let direction = true;
let direction= "N";
let position = 0;
let position = 0;
let positionEast = E;

function moveForward(distance){
// increase position by distance
  if (facingForward === true){

    position = position + distance;
  }
  else{

    position = position - distance;
  }

}

function moveBackward(distance){
  //decrease position by distance
  if (facingForward === true) {

    position = position - distance;

  }
  else{

    position = position + distance;
  }

}
function turnRight(){
   if (facingForward === true)
   {
       direction = positionNorth;

   }

}

function turnAround(){
 //switch value of facing forward
 facingForward = !facingForward;

}

function printLocation (){
    console.log(position);

}
moveForward(5);
printLocation();
moveBackward(5);
printLocation();
turnAround();
printLocation();
}) ();