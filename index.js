var tab = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
  ];
 
  
  function generateRandomImg(img) {
    var resRounded = Math.floor(Math.random() * img.length);
    return img[resRounded];
  }
  var randomRes1 = generateRandomImg(tab) ;
  var randomRes2 = generateRandomImg(tab) ;

  var firstRandomImg = document.querySelector(".img1");
   firstRandomImg .setAttribute("src", randomRes1);

  var secondRandomImg = document.querySelector(".img2");
 secondRandomImg.setAttribute("src", randomRes2)
  
 var h1 = document.querySelector("h1")

var number1 = randomRes1.slice(11,12);
var number2 = randomRes2.slice(11,12);

if(number1 > number2){
    h1.innerHTML="Player 1 wins "
}else if ( number2> number1){
    h1.innerHTML="Player 2 wins "
}else{
    h1.innerHTML="Drawn "
}
