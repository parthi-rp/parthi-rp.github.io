               
let questions = {

   1: 'உயிர் எழுத்துகள் மொத்தம் எத்தனை?',
   2: 'ஆயுத எழுத்துகள் மொத்தம் எத்தனை?',
   3: 'வல்லின எழுத்துகள் எத்தனை?',
   4: 'உயிர் குறில் எழுத்து என்ன?',
   5: 'உயிர்மெய் நெடில் எழுத்துகள் என்ன?'
  



}
let answers = {
   
   1: [],
   2: [],
   3: [],
   4: [],
   5: []


}



for(let i=1; i<=20; i++){

  var[choice1, choice2, choice3, choice4] = answers[i];
  document.write(`${i}. ${questions[i]} <br /><br /> a. ${choice1} <br /> b. ${choice2} <br /> c. ${choice3} <br /> d. ${choice4}`);
  document.write('<br />');
  document.write('<br />');
  
};

