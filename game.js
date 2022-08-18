
function getComputerChoice()
{
let choice = parseInt(Math.random()*(4-1))+1;

if(choice===1)
{
    console.log("ROCK!");

}
else if(choice===2)
{
    console.log("PAPER!");
}
else
{
    console.log("SCISSORS!");
}
return choice;
}


function singleRound()
{
    let playerSelection = prompt("Please select rock, paper, or scissors");
    playerSelection = playerSelection.toLowerCase();
    choice = getComputerChoice();
    let userscore =0;
    let computerscore=0;
    let tie=0;
    if((choice===1)&&(playerSelection==="rock"))
    {
        console.log("rock ties with rock!")
        return "tie";
    }
    else if((choice===1)&&(playerSelection==="paper"))
    {
        console.log("Paper beats rock, you win!")
        return "win";
    }
    else if((choice===1)&&(playerSelection==="scissors"))
    {
        console.log("Rock beats scissors, you lose!")
        return "lose";
    }
    else if((choice===2)&&(playerSelection==="paper"))
    {
        console.log("paper ties with paper!")
        return "tie";
    }
    else if((choice===2)&&(playerSelection==="rock"))
    {
        console.log("Paper beats rock, you lose!")
        return "lose";
    }
    else if((choice===2)&&(playerSelection==="scissors"))
    {
        console.log("Scissors beats paper, you win!")
        return "win";
    }
    else if((choice===3)&&(playerSelection==="scissors"))
    {
        console.log("scissors ties with scissors")
        return "tie";
    }
    else if((choice===3)&&(playerSelection==="rock"))
    {
        console.log("Rock beats scissors, you win!")
        return "win";
    }
    else
    {
        console.log("Scissors beats paper, you lose!")
        return "lose";
    }
}
function game()
{
    let computerscore=0;
    let userscore=0
    for(let i=0; i<5;i++)
    {
        let result=singleRound()
        if(result==="lose")
        {
            computerscore++;
            console.log("ComputerScore:"+computerscore);
            console.log("UserScore:"+userscore);
        }
        else if(result==="win")
        {
            userscore++
            console.log("ComputerScore:"+computerscore);
            console.log("UserScore:"+userscore);

        }
        else if(result==="tie")
        {
            console.log("ComputerScore:"+computerscore);
            console.log("UserScore:"+userscore);

        }
        else{
            console.log("there was an error");
        }
        
    }
    if(computerscore>userscore)
    {
        console.log("Computer wins!!!");
    }
    else if(userscore>computerscore)
    {
        console.log("User Wins!!!")

    }
    else
    {
        console.log("Its a tie!!")
    }
}

