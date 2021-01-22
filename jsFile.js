var colors = generateRandomColors(6);
var pickedColor = pickAns();
var noOfSquares = 6;

var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var tryAgainMessage = document.getElementById("tryAgainMessage");
var h1 = document.getElementsByTagName("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init()  /*zabardasti ka func taaki cheezein organized dikhe*/

function init(){
    setUPModeButtons();
    setUpSquares();
    reset();
}
function setUPModeButtons(){
    for (var i=0 ; i< modeButtons.length ; i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selectedButton");
        modeButtons[1].classList.remove("selectedButton");
//        dono se remove karke selected button mein add kardiya
        this.classList.add("selectedButton");
        this.textContent === "Easy" ? noOfSquares = 3 : noOfSquares = 6;
         
        reset();
    });
}
}
function setUpSquares(){
    for (var i =0; i<squares.length ; i++ ){
     squares[i].style.background = colors[i]; 
     squares[i].addEventListener("click",function(){
         var clickedColor = this.style.background;
      if (clickedColor === pickedColor){
       tryAgainMessage.textContent = " Correct !!!"  ;
          resetButton.textContent="Play Again?";
          for (var i =0; i<squares.length ; i++ ){
              squares[i].style.background = clickedColor; 
          }          
h1[0].style.background = clickedColor;
      }
      else{
             this.style.background = "#232323";
            tryAgainMessage.textContent = " Try Again :)"    
      } 
     });    
}
}    

function reset(){
    
    colors = generateRandomColors(noOfSquares);
    pickedColor = pickAns();
colorDisplay.textContent = pickedColor;
    for (var i =0; i<squares.length ; i++ ){
        if(colors[i]){
            squares[i].style.display = "block";
//            vapis laane ke liye colors
           squares[i].style.background = colors[i]; 
           }
        else{
            squares[i].style.background = "none"; 
            squares[i].style.display = "none";
        }
     
        
}h1[0].style.background = "steelblue";
   resetButton.textContent="New Colors"; //yahan pe 'this' keyword nahi use kar skta tha vo reset waale event listner mein use hoskta hai
    tryAgainMessage.textContent = " "  ;
};

//easyBtn.addEventListener("click",function() {
//    noOfSquares = 3;
//    easyBtn.classList.add("selectedButton");
//    hardBtn.classList.remove("selectedButton");
//    colors = generateRandomColors(noOfSquares);
//    pickedColor = pickAns();
//    colorDisplay.textContent = pickedColor;
//    for (var i =0; i<6 ; i++ ){
//      if (i<3){
//        squares[i].style.background = colors[i];  
//      }
//        else{
//         squares[i].style.display = "none"; 
//        }
//    }
//    
//
//});
//hardBtn.addEventListener("click", function(){
//    noOfSquares = 6;
//     easyBtn.classList.remove("selectedButton");
//        hardBtn.classList.add("selectedButton");
//    colors = generateRandomColors(noOfSquares);
//    pickedColor = pickAns();
//    colorDisplay.textContent = pickedColor;
//    for (var i =0; i<6 ; i++ ){
//        squares[i].style.background = colors[i];      
//        squares[i].style.display = "block"; 
//        
//    }
//});

resetButton.addEventListener("click",function(){
    reset();
});
//    colors = generateRandomColors(noOfSquares);
//    pickedColor = pickAns();
//colorDisplay.textContent = pickedColor;
//    for (var i =0; i<squares.length ; i++ ){
//     squares[i].style.background = colors[i]; 
//        
//}h1[0].style.background = "steelblue";
//   resetButton.textContent="New Colors"; //yahan pe 'this' keyword use kar skta tha
//    tryAgainMessage.textContent = " "  ;
//});

//colorDisplay.textContent = pickedColor;





function pickAns(){
    var randomNo = Math.floor(Math.random() * colors.length );
    return colors[randomNo];
}
function generateRandomColors(num){
var arr = []; 
    for( var i=0 ; i< num ; i++ ){
        arr[i] = randomColor();
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256  );
    var g = Math.floor(Math.random() * 256  );
    var b = Math.floor(Math.random() * 256  );
    return "rgb(" + r + ", " + g + ", " + b +")";
}
