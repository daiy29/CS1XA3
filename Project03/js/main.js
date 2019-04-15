window.onload = init;

var time = 2;
var bonusTime = 1;
var points = 0;
var inGame = 1;

var input = document.querySelector('#');
var current = document.querySelector('#');
var score = document.querySelector('#');
var countDown = document.querySelector('#');
var msg = document.querySelector('#');
var seconds = document.querySelector('#');
var maxScore = 0;

var list1 = [
'Curtis',
'Doug',
'Ember',
'Pig'
];

var list2 = [
'Dog'
];

var list3 = [
'Cat'
];

var list4 = [
'Pee'
];

var list5 = ['Jack'];

var list6 = ['LMAO'];

var currentList = list1;

function init()
{
  seconds.innerHTML = bonusTime;
  showList(currentList);
  input.addEventListener('input', play);
  setInterval(timer, 1000);
  setInterval(play, 100);
}

function play()
{
	if(inGame == 1)
	{
		checkWin();
		score.innerHTML = points;
		diffAdjust();
	}
	else{
		reset()
		if (input.value === current.innerHTML){
			inGame = 1;
			time = 2;
		}
	}

}
function showList(wordList)
{
	var item = Math.floor(Math.random()*wordList.length);
	current.innerHTML = wordList[item];
}

function reset()
{
	bonusTime = 1;
	points = 0;
	currentList = list1;
	msg.innerHTML = 'Game Over';
}

function diffAdjust()
{

	if(points >= 10 && points < 20){
		currentList = list2;
	}
	else if (points >= 20 && points < 30){
		currentList = list3;
	}
	else if (points >= 30 && points < 40){
		currentList = list4;
		bonusTime = 2;
	}
	else if (points >= 40 && points < 60){
		currentList = list5;
		bonusTime = 2;
	}
	else if (points >= 60){
		currentList = list6;
		bonusTime = 6;
	}	
}

function updateMessage(){

		if ((points == 10) || (points == 20) || (points == 30) || (points == 40) || (points == 60))
		{
			msg.innerHTML = 'Difficulty increased!';
		}
		else{
			msg.innerHTML = 'Noice';
		}

}

function timer()
{
	if (time > 0 && inGame == 1){
		time--;
	}
	else if (time == 0){
		inGame = 0;
		if (score > maxScore){
			maxScore = score;
		}
	}

	countDown.innerHTML = time;
}

function checkWin()
{
	if (input.value === current.innerHTML) {
		points++;
		time += bonusTime;
		input.value = '';
		showList(currentList);
		seconds.innerHTML = bonusTime;
		updateMessage();
	}

}



