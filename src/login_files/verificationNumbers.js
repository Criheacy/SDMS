function showCheck(a){
	var c = document.getElementById("myCanvas");
  c.width = c.width;
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,1000,1000);
  
  var r = Math.random() * 3;
  if (r <= 1) ctx.font = "100px 'Comic Sans MS'";
  else if (r <= 2) ctx.font = "80px 'Lucida Handwriting'";
  else if (r <= 3) ctx.font = "100px 'Ink Free'";

	ctx.fillStyle = "white";
  ctx.fillText(a,0,100);
}

function drawLines(){
	var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var r1 = Math.random() * 60 + 30;
  var r2 = Math.random() * 60 + 30;
  var r3 = Math.random() * 5 + 5;
  ctx.lineWidth = r3;
  ctx.strokeStyle = "white";//"#16A085";
  ctx.moveTo(0,r1)
  ctx.lineTo(250,r2)
  ctx.stroke()
}

var code ;    
function createCode(){       
    code = "";      
    var codeLength = 4;
    var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
    for(var i = 0;i < codeLength;i++) {
       var charIndex = Math.floor(Math.random()*60);
      code +=selectChar[charIndex];
    }      
    if(code.length != codeLength){      
      createCode();      
      return;
    }
    showCheck(code);
    drawLines();
    drawLines();
}
          
function validate () {
    var inputCode = document.getElementById("J_codetext").value.toUpperCase();
    var codeToUp=code.toUpperCase();
    if(inputCode.length <=0) {
      document.getElementById("J_codetext").setAttribute("placeholder","输入验证码");
      createCode();
      return false;
    }
    else if(inputCode != codeToUp ){
      document.getElementById("J_codetext").value="";
      document.getElementById("J_codetext").setAttribute("placeholder","验证码错误");
      createCode();
      return false;
    }
    else {
//      window.open(document.getElementById("J_down").getAttribute("data-link"));
      document.getElementById("J_codetext").value="";
      createCode();
      return true;
    }

}