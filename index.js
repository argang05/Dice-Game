
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomImage1Name = "dice"+randomNumber1+".png";
var randomImage2Name = "dice"+randomNumber2+".png";

var randomImage1Source = "./images/"+randomImage1Name;
var randomImage2Source = "./images/"+randomImage2Name;

document.querySelector(".img1").setAttribute("src",randomImage1Source);
document.querySelector(".img2").setAttribute("src",randomImage2Source);

if(randomNumber1 == randomNumber2){
    document.querySelector(".Winner").innerHTML = "Draw!";
}else if(randomNumber1 > randomNumber2){
    document.querySelector(".Winner").innerHTML = "&#128681;Player 1 Wins!";
}else{
    document.querySelector(".Winner").innerHTML = "Player 2 Wins!&#128681;";
}
/*
if(randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if(randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if(randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

if(randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if(randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if(randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if(randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if(randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
*/