import displayScore from "./displayScore";

socrePlayer1 = localStorage.getItem("Score1");
scorePlayer2 = localStorage.getItem("Score2");

if (socrePlayer1 > scorePlayer2)
{
    console.log("Player1 Wins!!!")
}

if (scorePlayer2 > socrePlayer1)
{
    console.log("Player2 Wins!!!");
}



