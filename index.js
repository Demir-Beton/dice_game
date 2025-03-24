var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var array = ['dice1','dice2','dice3','dice4','dice5','dice6']
for (let index = 0; index < array.length; index++) {
    if(randomNumber1 == index + 1)
    {
        document.querySelectorAll("img")[0].setAttribute("src", "./images/" + array[index] + ".png");
    }
    
}

for (let index = 0; index < array.length; index++) {
    if(randomNumber2 == index + 1)
    {
        document.querySelectorAll("img")[1].setAttribute("src", "./images/" +  array[index] + ".png");
    }
    
}

if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML = "Draw!"
}

else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}

else{
    document.querySelector("h1").innerHTML = "Player 2 wins"
}