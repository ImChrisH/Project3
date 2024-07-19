// console.log("hi");

//

let counter=10;
let highscore=0;
let num=Math.trunc(Math.random()*100)+1;
let msg=document.querySelector('.msg');
let guess=document.querySelector('.guess');

let currentcounter=document.querySelector('.counter');
let hScore=document.querySelector('.hScore');
let gHist=document.querySelector('.gHist');
let gHistArray=[];

// Images
let winner=document.querySelector('.winner');
let thinking=document.querySelector('.thinking');
let gameover=document.querySelector('.gameover');

// Buttons
let cBtn=document.querySelector('.cBtn');
let gBtn=document.querySelector('.gBtn');
let rBtn=document.querySelector('.rBtn');


// Default Visual States for the buttons:

cBtn.hidden=true;
winner.hidden=true;
gameover.hidden=true;


//Guess Button
gBtn.addEventListener('click', guessing);

function guessing(){

        // Negates input less than 0 and greater than 100:

        if(guess.value>100 || guess.value<1){
            msg.textContent= "Only numbers from 1 to 100!";
            return;
            // needed 'return;' statement since directly accessing info.
        }

        if(guess.value > num){
            counter=counter-1;
            currentcounter.textContent=String(counter);
            msg.textContent= "Wrong! Too High!";
        
        }

        else if (guess.value < num){
            counter=counter-1;
            currentcounter.textContent=String(counter);
            msg.textContent= "Wrong! Too Low!";
            msg.style.color='red';
            msg.style.fontWeight='bold'; 
        }


        // Correct Guess Input:

        else if (guess.value==num){
            msg.textContent= "Congratulations, you guessed correctly!";
            gBtn.hidden = true;
            guess.hidden=true;
            highscore=highscore+1;
            hScore.textContent=String(highscore);
            cBtn.hidden=false;
            winner.hidden=false;
            thinking.hidden=true;
        }


        // Counter:

        if(counter<=0){
            thinking.hidden=true;
            guess.hidden=true;
            gBtn.hidden=true;
            gameover.hidden=false;
            document.body.style.filter="invert(100%)";
            // document.getElementsByClassName("container").style.filter="invert(100%)";
            msg.hidden=true;
        }

        // Array must be after conditionals:

        gHistArray.push(guess.value);
        gHist.textContent=gHistArray.join(', ');
        console.log(gHistArray);
    }        
       

// Continue Button:

cBtn.addEventListener('click', continuing);        
        function continuing(){
            cBtn.hidden=true;
            gBtn.hidden=false; 
            guess.hidden=false;
            num=Math.trunc(Math.random()*100)+1;
            console.log(num);
            winner.hidden=true;
            thinking.hidden=false;
            gameover.hidden=true;

        }


// Reset Button:

rBtn.addEventListener('click', resetting)
        function resetting(){
            highscore=0;
            counter=10;
            hScore.textContent=String(highscore);
            currentcounter.textContent=String(counter);
            num=Math.trunc(Math.random()*100)+1;
            console.log(num);
            winner.hidden=true;
            thinking.hidden=false;
            gameover.hidden=true;
            cBtn.hidden=true;
            gBtn.hidden=false; 
            guess.hidden=false;
            gHistArray.length=0;
            msg.hidden=false;
            msg.textContent= "Ready";
            msg.style.color="blue";
            document.body.style.filter="invert(0%)";
            // document.getElementsByClassName(container).style.filter="invert(0%)";
            // document.bodyback.style.filter="invert(0)";
        }



console.log(num);


