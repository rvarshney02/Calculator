let screen=document.getElementById("screen");
let screenValue="";
for(var i=0;i<document.querySelectorAll("button").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var Text=this.innerHTML;
    operation(Text);
    makeSound(Text);
  });
}
function operation(buttonText){
  if(buttonText == "X"){
    buttonText="*";
    screenValue+=buttonText;
    screen.value=screenValue;
  }
  else if(buttonText == "C"){
    screenValue="";
    screen.value=screenValue;
  }
  else if(buttonText == "sin"){
    screenValue=Math.sin(screenValue);
    screen.value=screenValue;
  }
  else if(buttonText == "cos"){
    screenValue=Math.cos(screenValue);
    screen.value=screenValue;
  }
  else if(buttonText == "="){
    screen.value=eval(screenValue);
  }
  else if(buttonText == "Del"){
    screenValue=screenValue.slice(0 ,-1);
    screen.value=screenValue;
  }
  else{
    screenValue+=buttonText;
    screen.value=screenValue;
  }
}
function makeSound(key){
  var s=new Audio("sounds/mixkit-select-click-1109.wav");
  s.play();
}
