'use strict';

let score=1;
let username=prompt('hello whats your name ? ');
alert('hello '+username);

//Q1
function question1(){
  let myname=prompt('am i asma ?');
  //console.log(myname);
  myname=myname.toLowerCase();

  if(myname==='yes'|| myname==='y'){
    //console.log('correct');
    alert('correct');
    score++;
  }else if (myname==='no'|| myname==='n'){
    //console.log('false');
    alert('false');
  } else {
    alert('please only write yes/y or no/n');
  }
}
question1();


//Q2
function question2(){
  let alien=prompt('am i an alian ?').toLowerCase();
  //console.log(alien);
  alien=alien.toLowerCase();

  if(alien==='yes'||alien==='y'){
    //console.log('false');
    alert('false');
  }else if ((alien==='no'||alien==='n' )){
    //console.log('correct');
    alert('correct');
    score++;
  } else {
    alert('please only write yes/y or no/n');
  }
}
question2();

//Q3
function question3(){
  let food=prompt('do i eat cat food ?').toLowerCase();
  //console.log(food);
  food=food.toLowerCase();
  if(food==='yes'||food==='y'){
    //console.log('false');
    alert('false');
  }else if ((food==='no'||food==='n')){
    //console.log('correct');
    alert('correct');
    score++;
  }else{
    alert('please only write yes/y or no/n');
  }
}
question3();

//Q4
function question4(){
  let rich=prompt('am i going to be rich ?').toLowerCase();
  //console.log(rich);
  rich=rich.toLowerCase();
  if(rich==='yes' ||rich==='y'){
    //console.log('correct');
    alert('correct');
    score++;
  }else if(rich==='no' ||rich==='n'){
    //console.log('false');
    alert('false');
  }else{
    alert('please only write yes/y or no/n');
  }
}
question4();

//Q5
function question5(){
  let fly=prompt('can i fly?').toLowerCase();
  // console.log(fly);
  fly=fly.toLowerCase();
  if(fly==='yes'||fly==='y'){
    //console.log('false');
    alert('false');
  }else if ((fly==='no'||fly==='n')){
    //console.log('correct');
    alert('correct');
    score++;
  } else {
    alert('please only write yes/y or no/n');
  }
}
question5;
//Q6
function question6(){
  let number=prompt('Please guess any number between 1 and 10');

  for (let i = 0; i < 4; i++) {
    console.log(i);
    if (number==5) {
      alert('Yea Good job ');
      score++;
      break;
    }

    else if (i==3){
      alert('wrong answer , the correct answer is 5');
      break;
    }

    else if(number<5) {
      alert('Your number is too low ');

      number=prompt('Please try  guessing any number between 1 and 10 again');
    }
    else if(number>5){

      alert('Your number is too high ');
      number=prompt('Please try  guessing any number between 1 and 10 again');
    }

    else {
      alert('please type number ');
      number=prompt('Please try  guessing any number between 1 and 10 again');
    }

  }
}
question6();
//Q7
function question7(){
  let color1=['pink','red','black','white' ];
  let response=prompt('Guess My favourite color please!');
  let flag=false;
  for (let i = 0; i < 7; i++) {

    for (let j = 0; j < color1.length; j++) {
      if (response===color1[j]) {
        alert('Correct color');
        score++;
        flag=true;
        break;
      }


    }
    if(flag===true){
      break;


    }

    else if (i==6){
      alert('the correct answer is'+color1);
    }


    else{

      response=prompt('please try Guess My favourite color again');
    }

  }
}
question7();

alert('your score is '+ score + 'out of 7');
alert ('Bye bye ' +username);
