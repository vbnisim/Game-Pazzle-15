  $(document).ready(function(){ 



    var current = 0;
    var currentBoardCount = 16;

    var currentBoard = new Array();
    for(i=0; i<currentBoardCount; i++)  
      currentBoard[i] = ((currentBoardCount > (i+1) ) ? (i+1).toString() : ' ');
      
    shuffle();

      // Redraw puzzle board
      function repaint(){
        currentString = "";
        for(i=1;i<17;i++){
          currentString += "<input type='button'  id='" + i + "' value='" + currentBoard[i-1] + "' class='box'  />";
          if ( (i%4) == 0 ) currentString += "<br />";
        }
        $("#board").html(currentString);
        changeButtonColor();
      }



     
      function swapArrElems(index_a, index_b) {

          var temp = currentBoard[index_a];
          currentBoard[index_a] = currentBoard[index_b];
          currentBoard[index_b] = temp;

          repaint();
      }


      //move more only one tile
      $('#board').mousedown(function(event){
          current = $(event.target).attr("id")-1;
            for(i=0;i<currentBoardCount;i++) {
                if( currentBoard[i]==0 ){
                    if((i - current ) == 4 || (current - i) == 4 || (current - i) == 1 || (i - current) == 1 ) 
                      if( (i - current  != 1 || current != 11) ) 
                        if (i - current  != -1 || current != 12)
                          if (i - current  != 1 || current != 3)
                            if (i - current  != -1 || current != 4)
                              if (i - current  != -1 || current != 8)
                                  if (i - current  != 1 || current != 7)
                                      {
                                        zeroIndex = i; swapArrElems(current, zeroIndex);

                                       // document.getElementById(zeroIndex+1).style.backgroundColor = "silver";
                                      }
                      }
                }



                //move more than one tile
                for(var t = 0; t<15; t++){

                    try {


                        if(current==(0) && document.getElementById(("13")).value == ' '){
                          swapArrElems(current+4+4, current+4+4+4);
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }
                        if(current==(4) && document.getElementById("13").value == ' '){
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }
                        if(current==(0) && document.getElementById("9").value == ' '){
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }


                        if(current==(12) && document.getElementById("1").value == ' '){
                          swapArrElems(current-4-4, current-4-4-4);
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }
                        if(current==(8) && document.getElementById("1").value == ' '){
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }
                        if(current==(12) && document.getElementById("5").value == ' '){
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }






                        if(current==(0+1) && document.getElementById(("14")).value == ' '){
                          swapArrElems(current+4+4, current+4+4+4);
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }
                        if(current==(4+1) && document.getElementById("14").value == ' '){
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }
                        if(current==(0+1) && document.getElementById("10").value == ' '){
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }


                        if(current==(12+1) && document.getElementById("2").value == ' '){
                          swapArrElems(current-4-4, current-4-4-4);
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }
                        if(current==(8+1) && document.getElementById("2").value == ' '){
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }
                        if(current==(12+1) && document.getElementById("6").value == ' '){
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }





                        if(current==(0+2) && document.getElementById(("15")).value == ' '){
                          swapArrElems(current+4+4, current+4+4+4);
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }
                        if(current==(4+2) && document.getElementById("15").value == ' '){
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }
                        if(current==(0+2) && document.getElementById("11").value == ' '){
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }


                        if(current==(12+2) && document.getElementById("3").value == ' '){
                          swapArrElems(current-4-4, current-4-4-4);
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }
                        if(current==(8+2) && document.getElementById("3").value == ' '){
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }
                        if(current==(12+2) && document.getElementById("7").value == ' '){
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }




                        if(current==(0+3) && document.getElementById(("16")).value == ' '){
                          swapArrElems(current+4+4, current+4+4+4);
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }
                        if(current==(4+3) && document.getElementById("16").value == ' '){
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }
                        if(current==(0+3) && document.getElementById("12").value == ' '){
                          swapArrElems(current+4, current+4+4);
                          swapArrElems(current, current+4);
                        }

                        if(current==(12+3) && document.getElementById("4").value == ' '){
                          swapArrElems(current-4-4, current-4-4-4);
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }
                        if(current==(8+3) && document.getElementById("4").value == ' '){
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }
                        if(current==(12+3) && document.getElementById("8").value == ' '){
                          swapArrElems(current-4, current-4-4);
                          swapArrElems(current, current-4);
                        }






                        if(current==(0) && document.getElementById(("4")).value == ' '){
                          swapArrElems(current+1+1, current+1+1+1);
                          swapArrElems(current+1, current+1+1);
                          swapArrElems(current, current+1);
                        }
                        if(current==(1) && document.getElementById("4").value == ' '){
                          swapArrElems(current+1, current+1+1);
                          swapArrElems(current, current+1);
                        }
                         if(current==(0) && document.getElementById("3").value == ' '){
                           swapArrElems(current+1, current+1+1);
                           swapArrElems(current, current+1);
                         }

                        if(current==(3) && document.getElementById("1").value == ' '){
                          swapArrElems(current-1-1, current-1-1-1);
                          swapArrElems(current-1, current-1-1);
                          swapArrElems(current, current-1);
                        }

                        if(current==(3) && document.getElementById("2").value == ' '){
                          swapArrElems(current-1, current-1-1);
                          swapArrElems(current, current-1);
                        }

                         if(current==(2) && document.getElementById("1").value == ' '){
                           swapArrElems(current-1, current-1-1);
                           swapArrElems(current, current-1);
                         }


                         






                        if(current==(0+4) && document.getElementById(("8")).value == ' '){
                          swapArrElems(current+1+1, current+1+1+1);
                          swapArrElems(current+1, current+1+1);
                          swapArrElems(current, current+1);
                        }
                        if(current==(1+4) && document.getElementById("8").value == ' '){
                          swapArrElems(current+1, current+1+1);
                          swapArrElems(current, current+1);
                        }

                         if(current==(0+4) && document.getElementById("7").value == ' '){
                           swapArrElems(current+1, current+1+1);
                           swapArrElems(current, current+1);
                         }


                        if(current==(3+4) && document.getElementById("5").value == ' '){
                          swapArrElems(current-1-1, current-1-1-1);
                          swapArrElems(current-1, current-1-1);
                          swapArrElems(current, current-1);
                        }

                        if(current==(3+4) && document.getElementById("6").value == ' '){
                          swapArrElems(current-1, current-1-1);
                          swapArrElems(current, current-1);
                        }

                         if(current==(2+4) && document.getElementById("5").value == ' '){
                           swapArrElems(current-1, current-1-1);
                           swapArrElems(current, current-1);
                         }
                    






                       if(current==(0+4+4) && document.getElementById(("12")).value == ' '){
                          swapArrElems(current+1+1, current+1+1+1);
                          swapArrElems(current+1, current+1+1);
                          swapArrElems(current, current+1);
                        }
                        if(current==(1+4+4) && document.getElementById("12").value == ' '){
                          swapArrElems(current+1, current+1+1);
                          swapArrElems(current, current+1);
                        }

                         if(current==(0+4+4) && document.getElementById("11").value == ' '){
                           swapArrElems(current+1, current+1+1);
                           swapArrElems(current, current+1);
                         }


                        if(current==(3+4+4) && document.getElementById("9").value == ' '){
                          swapArrElems(current-1-1, current-1-1-1);
                          swapArrElems(current-1, current-1-1);
                          swapArrElems(current, current-1);
                        }

                        if(current==(3+4+4) && document.getElementById("10").value == ' '){
                          swapArrElems(current-1, current-1-1);
                          swapArrElems(current, current-1);
                        }

                         if(current==(2+4+4) && document.getElementById("9").value == ' '){
                           swapArrElems(current-1, current-1-1);
                           swapArrElems(current, current-1);
                         }
                    






                       if(current==(0+4+4+4) && document.getElementById(("16")).value == ' '){
                          swapArrElems(current+1+1, current+1+1+1);
                          swapArrElems(current+1, current+1+1);
                          swapArrElems(current, current+1);
                        }
                        if(current==(1+4+4+4) && document.getElementById("16").value == ' '){
                          swapArrElems(current+1, current+1+1);
                          swapArrElems(current, current+1);
                        }

                         if(current==(0+4+4+4) && document.getElementById("15").value == ' '){
                           swapArrElems(current+1, current+1+1);
                           swapArrElems(current, current+1);
                         }


                        if(current==(3+4+4+4) && document.getElementById("13").value == ' '){
                          swapArrElems(current-1-1, current-1-1-1);
                          swapArrElems(current-1, current-1-1);
                          swapArrElems(current, current-1);
                        }

                        if(current==(3+4+4+4) && document.getElementById("14").value == ' '){
                          swapArrElems(current-1, current-1-1);
                          swapArrElems(current, current-1);
                        }

                         if(current==(2+4+4+4) && document.getElementById("13").value == ' '){
                           swapArrElems(current-1, current-1-1);
                           swapArrElems(current, current-1);
                         }
                        }
                    catch(err) {
                      //document.getElementById("error").innerHTML = err.message;
                    }



              }
      });

          var cCheck4ShowedMessage=true;
          var cCheck8ShowedMessage=true;
          var cCheck12ShowedMessage=true;

          $('#board').mouseup(function(event){
            var matchSpot = new Array();
            while (matchSpot.length) { matchSpot.pop(); }
            for(var i = 0; i<16; i++){
                 if(document.getElementById((i+1).toString()).value == (i+1).toString()){
                    matchSpot[i] = true;
                  }
            } 

            var check = 0;
            for(var i = 0; i<16; i++){
              if(matchSpot[i] == true)
                  check++;
            }
              if(check==15)
              {
                alert('You Won!!!!'); //this is custom message
                setTimeout(function(){shuffle();},3000)
              }

          var cCheck4=false;
          var cCheck8=false;
          var cCheck12=false;
            if(document.getElementById("1").value == "1" &&
                document.getElementById("2").value == "2" &&
                document.getElementById("3").value == "3" &&
                document.getElementById("4").value == "4")
                cCheck4 = true;
              else
                cCheck4 = false;

            if(document.getElementById("5").value == "5" &&
                document.getElementById("6").value == "6" &&
                document.getElementById("7").value == "7" &&
                document.getElementById("8").value == "8")
                cCheck8 = true;
              else
                cCheck8 = false;

            if(document.getElementById("9").value == "9" &&
                document.getElementById("10").value == "10" &&
                document.getElementById("11").value == "11" &&
                document.getElementById("12").value == "12")
                cCheck12 = true;
              else
                cCheck12 = false;


              if(cCheck4 && cCheck4ShowedMessage){
                alert('You doing good 3 more rows '); 
                cCheck4ShowedMessage = false
              }
             if(cCheck8 && cCheck8ShowedMessage){
                alert('You doing great! 2 more rows ');
                cCheck8ShowedMessage = false
             }
             if(cCheck12 && cCheck12ShowedMessage){
                alert('Wow you are almost there! 1 row and you will win!'); 
                cCheck12ShowedMessage = false

             }

      });


      function shuffle(){
        for(i=0 ; i++<10 ; x = Math.floor(Math.random()*16), y = Math.floor(Math.random()*16), currentBoard[x] = currentBoard.splice(y, 1, currentBoard[x])[0]);
        repaint();
      }



     });






        function changeButtonColor()
        {
          var color = "rgb(69, 83, 83)";
          for(var i=1; i<17; i++){
            if(document.getElementById(i.toString()).value == ' '){
               document.getElementById(i.toString()).style.background = color;
            }
          }
          
        }



     var ALERT_TITLE = "Nice!";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
	window.alert = function(txt) {
		createCustomAlert(txt);
	}
}

function createCustomAlert(txt) {
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";
	
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
