var scores, roundscores, activeplayer, playing,twiceSix,twice;
init();

document.querySelector(".btn-roll").addEventListener('click',function(){
	if(playing)
	{
		//Random Num
		var dice=Math.floor( (Math.random() * 6 )+1);

		//Display
		var diceDom= document.querySelector(".dice");
		diceDom.style.display ='block';
		diceDom.src = "dice-" + dice +".png";

		//Update Score
		//Count For Six
		twiceSix[activeplayer]=dice;
		if(twiceSix[activeplayer] === 6 ) twice++;
		
		

		if (dice !==1 )
			{
			if (twiceSix[activeplayer] === 6 && twice===2) {
			scores[activeplayer]=0;
			document.querySelector("#score-" + activeplayer).textContent=scores[activeplayer];
			Next();
		}
			//Add Score
			roundscores+=dice;
			document.querySelector("#current-" + activeplayer).textContent=roundscores;
			}
		else	
			{//Next Player
				Next();
			}	
	}

});

document.querySelector(".btn-hold").addEventListener("click", function(){

	if(playing)
	{
		//Update Scores 
		scores[activeplayer]+=roundscores;

		//Update UI
		document.querySelector("#score-" + activeplayer).textContent=scores[activeplayer];

		var input=document.querySelector(".btn-challenge").value;
		var finalScore;
		console.log(input);
		if (input) {finalScore=input} else {finalScore=100}
		console.log(finalScore);
	

		//Who Win...........!!
		if(scores[activeplayer] >= finalScore)
		{ 
		document.querySelector("#name-"+activeplayer).textContent="Winner!"; 
		document.querySelector(".dice").style.display="none";
		document.querySelector(".player-"+activeplayer+"-panel").classList.add("winner");
		document.querySelector(".player-"+activeplayer+"-panel").classList.remove("active");
		playing=false;
		}
		else Next();
	}
});

document.querySelector(".btn-new").addEventListener("click",init);

function Next()
{
		activeplayer === 0 ? activeplayer = 1 : activeplayer=0;
		roundscores =0;
		twice=0;
		document.getElementById("current-0" ).textContent="0";
		document.getElementById("current-1" ).textContent="0";

		document.querySelector(".player-0-panel").classList.toggle("active");
		document.querySelector(".player-1-panel").classList.toggle("active");

		document.querySelector(".dice").style.display="none";
}
function init()
{
	scores =[0,0];
	roundscores=0;
	activeplayer=0;
	playing=true;
	twiceSix=[0,0];
	twice=0;
	
	    


    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}