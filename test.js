// console.log("hi");

let counter=10;
let highscore=0;
let num=Math.trunc(Math.random()*100)+1;
let msg=document.querySelector('.msg');
let guess=document.querySelector('.guess');
let gBtn=document.querySelector('.gBtn');
let currentcounter=document.querySelector('.counter');
// let imageshown= "gameover.jpg";
let hScore=document.querySelector('.hScore');


// Previous guess testing
// let prevGuessA=document.querySelector('.prevGuessA');
// let prevGuessArray=new Array[0];

gBtn.addEventListener('click', guessing);

function guessing(){
        if(guess.value > num){
            counter=counter-1;
            currentcounter.textContent=String(counter);
            msg.textContent= "Wrong! Too High!";
            // prevGuessArray.push(guess.value);
            // guess.value=''
            
           
        
    }
        else if (guess.value < num){
            counter=counter-1;
            currentcounter.textContent=String(counter);
            msg.textContent= "Wrong! Too Low!";
            msg.style.color='red';
            msg.style.fontWeight='bold'; 
            // prevGuessArray.push(guess.value);
            // previousGuessA.textContent=String(previousGuessArray);
            
           
        }

        else if (guess.value==num){
            msg.textContent= "Congratulations, you guessed correctly!";
            gBtn.disabled = true;
            highscore=highscore+1;
            hScore.textContent=String(highscore);

            // prevGuessArray.push(guess.value);
            // guess.value='';
        }

        // else if(guess.value>100){
        //     msg.textContent= "Only numbers from 1 to 100!";
        // }

        // else if(guess.value <1){
        //     msg.textContent= "Only numbers from 1 to 100!";
        // }

        if(counter<=0){
            msg.textContent="GAME OVER";
            msg.style.fontSize="x-large";
            gBtn.disabled = true;
        }
            
       



}

console.log(num);


