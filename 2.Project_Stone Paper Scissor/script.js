const choices = document.querySelectorAll('.choice'); 
const msg=document.querySelector('#msg');
let user=document.querySelector('#userScore');
let comp=document.querySelector('#compScore');


let userSocre=0;    //Initialization the score of user and computer
let compSocre=0;
let userWin;        //To check who wins the game

//To let the user choose the option by creating an event listener
choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>
    {
        let userChoice=choice.getAttribute("id");   //To get the the choice
        playGame(userChoice);                       //To play the game
    });
    });

//To let the computer choose the option randomly
const random=()=>{
    let options=['rock','paper','scissors'];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};

//To show the winner of the game
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        console.log("You win!");
        msg.innerText=`You win. Your ${userChoice} beats ${compChoice}!`;
        userSocre++;
        user.innerText=userSocre;
        msg.style.backgroundColor="green";
    }
    else
    {
        console.log("You lose!");
        msg.innerText=`You lost. Your ${userChoice} loses to ${compChoice}!`;
        compSocre++;
        comp.innerText=compSocre;
        msg.style.backgroundColor="red";
    }
};

//To play the game
const playGame=(userChoice)=>{
    console.log("user choice :",userChoice);
    let compChoice=random();
    console.log("computer choice: ",compChoice);
    
    //For the condition of draw
    if(userChoice===compChoice)
    {
        console.log("The game is draw!");
        msg.innerText=`The game is draw, ${userChoice} equals ${compChoice}`;
        msg.style.backgroundColor="#081b31";
    }
    else
    {
        let userWin;
        if(userChoice==='rock')
        {
            //computer is left with choice of paper and scissors. If computer chooses paper then user looses otherwise user wins 
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==='paper')
        {
            //computer is left with choice of rock and scissors. If computer chooses scissor then user looses otherwise user wins 
            userWin=compChoice==="scissors"?false:true;
        }
        else if(userChoice==='scissors')
        {
            //computer is left with choice of rock and paper. If computer chooses rock then user looses otherwise user wins 
            userWin=compChoice==="rock"?false:true;
        }
        //calls mehod to show the winner!!!
        showWinner(userWin,userChoice,compChoice);
    }
}