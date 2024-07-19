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
let scorearray=[];
// let background=document.querySelector('.bodymod');

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

        // to avoid multiple occurancee of same numbers
        for (let i = 0; i < gHistArray.length; i++) { 
            if (gHistArray[i] === guess.value) {
                msg.textContent = "You have already guessed that number. Please try a different number.";
                return;
            }
        }

        if(guess.value > num){
            counter=counter-1;
            currentcounter.textContent=String(counter);
            msg.textContent= "Wrong! Too High!";
            msg.style.color='red';
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
            // msg.textContent= "Congratulations, you guessed correctly!";
            gBtn.hidden = true;
            guess.hidden=true;
            // highscore=highscore+1;
            highscore=10-(counter-1);  //change
            hScore.textContent=String(highscore);
            cBtn.hidden=false;
            winner.hidden=false;
            thinking.hidden=true;
            // scorearray.push(highscore); 
            scorearray.push(highscore); //change
            msg.textContent = `Congratulations!
            Your guess was correct: ${guess.value} is my secret number`;
            msg.style.color='gold';
            document.body.style.backgroundImage="url(images/background/trophy.jpg)";

        }


        // Counter and Game Over:

        if(counter<=0){
            thinking.hidden=true;
            guess.hidden=true;
            gBtn.hidden=true;
            gameover.hidden=false;
            document.body.style.filter="invert(100%)";
            msg.hidden=true;
            document.body.style.backgroundImage="url(images/background/glitch.jpg)";
        }

        // Array must be after conditionals:

        gHistArray.push(guess.value);
        gHist.textContent=gHistArray.join(', ');
        console.log(gHistArray);
        updateHistory();
    }        


 //to update the high score after each game(change)
        if (counter>0){
            function updatehighscore() {
                for (let i = 0; i < scorearray.length; i++) {
                      if(scorearray[i]<scorearray[i+1]){
                        highscore=scorearray[i];
                        console.log('inside update score');
                      }
                      else{
                        highscore=scorearray[i+1];
                      }}}
         }
    }   

 // to clear the history table each time we reset the game(change)
    function updateHistory() {
        gHist.innerHTML = ''; // Clear current list
        for (let i = 0; i < gHistArray.length; i++) {
             const listItem = document.createElement('li');
             listItem.textContent = `${i+1}: ${gHistArray[i]}`;
             gHist.appendChild(listItem);
         }
    }
       

// Continue Button:

cBtn.addEventListener('click', continuing);        
        function continuing(){
            cBtn.hidden=true;
            gBtn.hidden=false; 
            guess.hidden=false;
            counter=10;
            hScore.textContent=String(highscore);
            num=Math.trunc(Math.random()*100)+1;
            console.log(num);
            winner.hidden=true;
            thinking.hidden=false;
            gameover.hidden=true;
            msg.textContent='Ready';
            msg.style.color="";
            gHistArray.length=0;
            document.body.style.backgroundImage="url(images/background/numbersdrawing.jpg)";
            updateHistory();//clearing the history table //change
            guess.value='';//clearing the input field  //change
        }


// Reset Button:

rBtn.addEventListener('click', resetting)
        function resetting(){
            //highscore=0; change
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
            msg.style.color="";
            document.body.style.filter="invert(0%)";
            document.body.style.backgroundImage="url(images/background/numbersdrawing.jpg)";
            updateHistory();//clearing the history table //change
            guess.value='';//clearing the input field  //change
        }



console.log(num);


