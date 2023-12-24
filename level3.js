let name = document.getElementById('names')
let answer = Math.round((Math.random() * 170))
let score = 0;
let nextbtn = document.getElementById('next')
let correct = document.getElementById('correct')
let wrong= document.getElementById('wrong')
function getinput(){
   console.log(Number(names.value));
     console.log(answer)
 
    if(names.value==answer){
      document.getElementById('score').innerText = score+=10;
     console.log(  document.getElementById('score').innerText = score)
     document.getElementById('correct').style.opacity = '1';
      document.getElementById('next').style.opacity = '1';
      document.getElementById('wrong').style.opacity = '0'
    }
    else{
      document.getElementById('wrong').style.opacity = '1'
      document.getElementById('correct').style.opacity = '0'
      document.getElementById('next').style.opacity = '0'
    }
  }