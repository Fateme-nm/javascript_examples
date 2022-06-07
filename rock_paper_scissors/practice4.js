/* Write a function that takes two strings in the input that specify the selection of the first player and the selection of the second player
And return a string to determine the winner of the scissor paper stone game.
* Each string can be one of three values: "" scissors "," paper "," rock.
* The terms of the game are as follows:
** Cuts the scissors stone
** Cuts the paper scissors
** Removes rock paper

rps("Rock", "Paper") ➞ "The winner is p2"
rps("Scissors", "Paper") ➞ "The winner is p1"
rps("Paper", "Paper") ➞ "It's a draw"
*/

function rps(p1,p2){
    const choice={
        Rock: { 
            Scissors: 1, Paper: 2
        },
        Scissors: {
            Rock: 2, Paper: 1
        },
        Paper: {
            Rock: 1, Scissors: 2,
        }
    }
    if(p1===p2) return "It's a draw"
    return `The winner is p${choice[p1][p2]}`
}

console.log(rps("Rock", "Paper"))
console.log(rps("Scissors", "Paper"))
console.log(rps("Paper", "Paper") )