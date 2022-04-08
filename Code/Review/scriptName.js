data = [{}]


var Data ='';




function reviewResult() {
for(i = 0 ; i < 20 ; i++){
 
  string = localStorage.getItem("questions" + (i+1));
  data[i] = JSON.parse(string);
  Data += '<div class="cards appear">'  + '<div class="cardsquestion">' + '<p>' + data[i].question  + '</p>' + "</div>" +  '<div class="cardsanswer">' + '<p id="answer0' + i + '"' + '>' + data[i].choices[0]  + '</p>' + '<p id="answer1' + i + '"' + '>' + data[i].choices[1]  + '</p>' + '<p id="answer2' + i + '"' + '>' + data[i].choices[2]  + '</p>'+'<p id="answer3' + i + '"' + '>' + data[i].choices[3]  +'</div>' +  '<div class="answer">' +'<p>' +'Your answer: '+ data[i].choice + '</p>' +'</div>' +'</div>';

}}

reviewResult();
document.getElementById("container").insertAdjacentHTML('beforeend' , Data);


for(i = 0; i < 20 ; i++){
  string = localStorage.getItem("questions" + (i+1));
  data[i] = JSON.parse(string);

  index = data[i].choices.indexOf(data[i].correct);

  str_id = "answer" + index + i;
  document.getElementById(str_id).style.background = "#BBF085";
 

if(data[i].choice != data[i].correct){
  index = data[i].choices.indexOf(data[i].choice)
  if(index != -1){
    str_id = "answer" + index + i;
    document.getElementById(str_id).style.background = "#F24726";

  }

}
}




