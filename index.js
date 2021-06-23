function Roll()
{
    var randomNumber1=Math.floor(Math.random()*6)+1;

    var User1="images/dice"+randomNumber1+".png";

    document.querySelector(".img1").setAttribute("src",User1);


    var randomNumber2=Math.floor(Math.random()*6)+1;

    var User2="images/dice"+randomNumber2+".png";

    document.querySelector(".img2").setAttribute("src",User2);

    if(User1>User2)
    {
        document.querySelector("h1").innerHTML="🎉 Player 1 Wins 🎉";
    }else if(User2>User1){
        document.querySelector("h1").innerHTML="🎉 Player 2 Wins 🎉";
    }else if(User1===User2){
        document.querySelector("h1").innerHTML="Match Tie Please Roll Again!";
    }

}