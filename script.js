let teamDumebiScore = (96 + 108 + 89) / 3;
let teamCiromaScore = (88 + 91 + 110) / 3;

console.log(teamDumebiScore, teamCiromaScore);

if (teamDumebiScore > teamCiromaScore && teamDumebiScore){
    console.log ("Team Dumebi won")
}
else if (teamCiromaScore > teamDumebiScore && teamCiromaScore ){
    console.log ("Team Ciroma won")
}
else if (teamDumebiScore === teamCiromaScore && teamDumebiScore  && teamCiromaScore ){
    console.log ("Both teams won")
} 

// BONUS 1

let teamDumebiBonus1 = (97 + 112 + 101) / 3;
let teamCiromaBonus1 = (109 + 95 + 110) / 3;

console.log(teamDumebiBonus1, teamCiromaBonus1);

if (teamDumebiBonus1 > teamCiromaBonus1 && teamDumebiBonus1 >= 100){
    console.log ("Team Dumebi won")
}
else if (teamCiromaBonus1 > teamDumebiBonus1 && teamCiromaBonus1 >=100){
    console.log ("Team Ciroma won")
}
else if (teamDumebiBonus1 === teamCiromaBonus1 && teamDumebiBonus1 >= 100 && teamCiromaBonus1 >= 100){
    console.log ("It was a draw")
} 


// BONUS 2


let teamDumebiBonus2 = (97 + 112 + 101) / 3;
let teamCiromaBonus2 = (109 + 95 + 110) / 3;

console.log(teamDumebiBonus2, teamCiromaBonus2);

if (teamDumebiBonus2 > teamCiromaBonus1 && teamDumebiBonus2 >= 100){
    console.log ("Team Dumebi won")
}
else if (teamCiromaBonus2 > teamDumebiBonus2 && teamCiromaBonus2 >=100){
    console.log ("Team Ciroma won")
}
else if (teamDumebiBonus2 === teamCiromaBonus2 && teamDumebiBonus2 >= 100 && teamCiromaBonus2 >= 100){
    console.log ("It was a draw")
}
else {
    console.log ("No winner")
}


// TASK 2

const score = prompt("Enter your score");
if (score >=81 && score <= 100) {
    console.log("You got an A!")
}
else if (score >= 60 && score < 81)
{
    console.log("You got a B!")
}
else if (score >= 50 && score < 60) {
    console.log ("You got a C! ")
}
else if (score >= 45 && score < 50 ) {
    console.log ("You got a D!")
}
else if (score >= 25 && score < 45) {
    console.log("You got an E!")
}

else if (score >= 0 && score < 25) {
    console.log("You got an F!")
}
else {
    console.log("Please input a valid score")
}