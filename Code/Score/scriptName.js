data = [{}]
score = 0;
var Data ='';




function reviewScore() {
for(i = 0 ; i < 20 ; i++){
    string = localStorage.getItem("questions" + (i+1));
    data[i] = JSON.parse(string);
    if(data[i].correct == data[i].choice){
        score++;
    }
  }

  localStorage.setItem("score",score);
}






  reviewScore();

// if(score<10){
// document.getElementById("result").innerHTML= score ;
// document.getElementById("d").style.background="#F24726";
// document.getElementsByClassName("result")[0].style.background="#F24726";
// document.getElementById("d").style.color="#F24726"; 
// document.getElementById("massage").innerHTML="Unfortunately  ";
// document.getElementById("cmassage").innerHTML=" You did not fulfill our requirements , Good Luck . ";
// document.getElementById("emoji").src="https://acegif.com/wp-content/uploads/2022/4hv9xm/crying-emoji-9.gif"

// }
// else
// {
//     document.getElementById("result").innerHTML= score ;
//     document.getElementById("d").style.background="#3F8800";
//     document.getElementsByClassName("result")[0].style.background="#3F8800";
//     document.getElementById("d").style.color="#3F8800" ;
//     document.getElementById("massage").innerHTML= "Congratulation";
//     document.getElementById("cmassage").innerHTML= " we will arrange with you the second interview . ";
//     document.getElementById("emoji").src="https://media3.giphy.com/media/LOnt6uqjD9OexmQJRB/giphy.gif?cid=46562bd156ad276e3a4ee097c7491fefbdd2cb018dd511bd&rid=giphy.gif&ct=s?w=138"
   
// }
    
var r =localStorage.getItem('score');



if(r<10){
document.getElementById("result").innerHTML= r ;
document.getElementById("d").style.background="#F24726";
document.getElementsByClassName("result")[0].style.background="#F24726";
document.getElementById("d").style.color="#F24726"; 
document.getElementById("massage").innerHTML="Unfortunately  ";
document.getElementById("cmassage").innerHTML=" You did not fulfill our requirements , Good Luck . ";
document.getElementById("emoji").src="https://acegif.com/wp-content/uploads/2022/4hv9xm/crying-emoji-9.gif"

}
else
{
    document.getElementById("result").innerHTML= r ;
    document.getElementById("d").style.background="#3F8800";
    document.getElementsByClassName("result")[0].style.background="#3F8800";
    document.getElementById("d").style.color="#3F8800" ;
    document.getElementById("massage").innerHTML= "Congratulation";
    document.getElementById("cmassage").innerHTML= " we will arrange with you the second interview . ";
    document.getElementById("emoji").src="https://media3.giphy.com/media/LOnt6uqjD9OexmQJRB/giphy.gif?cid=46562bd156ad276e3a4ee097c7491fefbdd2cb018dd511bd&rid=giphy.gif&ct=s?w=138"
   
}
    

