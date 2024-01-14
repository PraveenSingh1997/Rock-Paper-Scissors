let score = 
                JSON.parse(localStorage.getItem('score')) ||  {
                wins : 0 ,
                losses : 0 ,
                ties : 0  
                };
            
            // !score = (score === null) 
            // this code set the default values 
            // if (!score) 
            // { 
            //     score =  {
            //     wins : 0 ,
            //     losses : 0 ,
            //     ties : 0  
            //     };
            // } 

            // fetching data from the localStorage 
            //console.log(JSON.parse(localStorage.getItem('score'))) ; 
            
            document.querySelector('.js-score')
            .innerHTML = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties} ` ; 
            let isAutoPlaying = false ; 
            let intervalId 
           function autoPlay(){
                if(!isAutoPlaying){
                    intervalId = setInterval(function(){
                    const playerMove = pickComputerMove()
                    playGame(playerMove) ; 

                },1000); 
                isAutoPlaying = true ; 
            }
            else {
                clearInterval(intervalId) ; 
                isAutoPlaying = false ; 

            }
        }



            function playGame(playerMove){  
            let result = '' ; 
            const computerMove = pickComputerMove()
            if (  playerMove === 'rock'){
                
                if(computerMove === 'rock'){
                result = 'Tie.' ; 
            }
                else if(computerMove === 'paper'){
                result = 'You Win.' ; 
            }
                else if(computerMove === 'scissors'){
                result = 'You Lose.'
            }

                


            }
            else if(playerMove === 'paper'){
                
                if(computerMove === 'rock'){
                    result = 'You Win.' ; 
                }
                else if(computerMove === 'paper'){
                    result = 'Tie.' ; 
                }
                else if(computerMove === 'scissors'){
                    result = 'You Lose.'
                }

                

            }
            else if(playerMove === 'scissors'){
                
                if(computerMove === 'rock'){
                    result = 'You Lose.' ; 
                }
                else if(computerMove === 'paper'){
                    result = 'You Win.' ; 
                }
                else if(computerMove === 'scissors'){
                    result = 'Tie.'
                }

            }
            
            if (result === 'You Win.'){
                score.wins += 1 ; 
            }
            else if(result === 'You Lose.'){
                score.losses +=  1 ; 
            
            }
            else if(result === 'Tie.'){
                score.ties += 1 ; 
            }

            // Saving data on the localStorage .
            //localStorage save the data as the form of string 
            localStorage.setItem('score' , JSON.stringify(score)) ;  

            document.querySelector('.js-score')
            .innerHTML = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties} ` ; 
            
            document.querySelector('.js-computerMove')
            .innerHTML = `You picked ${playerMove}.
             Computer Picked ${computerMove}.`
//                 alert(`You picked ${playerMove}. Computer Picked ${computerMove}. ${result}
// Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties} 
//                 `) ; 


                


            }
            function pickComputerMove(){

                const randomNumber = Math.random() ; 
                let computerMove = '' ; 
                if (randomNumber >= 0 && randomNumber < 1/3){
                    computerMove = 'rock' ; 
                    
                } else if (randomNumber > 1/3 && randomNumber < 2/3){
                    computerMove = 'paper' ; 
                    
                } else if (randomNumber > 2/3 && randomNumber < 1 ){
                    computerMove = 'scissors' ; 
                    }
                return computerMove ; 
            }
            
            

                