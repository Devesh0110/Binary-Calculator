var x=document.getElementById("btn0");
var x2=document.getElementById("btn1");
var x3=document.getElementById("btnClr");
var x5=document.getElementById("btnSum");
var x6=document.getElementById("btnSub");
var x7=document.getElementById("btnMul");
var x8=document.getElementById("btnDiv");
var y=document.getElementById("res");
var s="";
x.addEventListener("click",function(){
    s+="0";
      y.innerHTML+=0;
  });
x2.addEventListener("click",function(){
      y.innerHTML+="1";
    s+="1";
  });
x3.addEventListener("click",function(){
    s="";
    y.innerHTML="";
});
x5.addEventListener("click",function(){
    s=s+"+";
    y.innerHTML=s;
});
x6.addEventListener("click",function(){
    s=s+"-";
    y.innerHTML=s;
});
x7.addEventListener("click",function(){
    s=s+"*";
    y.innerHTML=s;
});
x8.addEventListener("click",function(){
    s=s+"/";
    y.innerHTML=s;
});
var x4=document.getElementById("btnEql");
x4.addEventListener("click",function(){
    // s="";
    if (s.indexOf("+") != -1) { 
            // If + is present in the string 
            // String obtained from scr is split 
            var num = s.split("+");  
              
            // The splitted string stores in num array 
            var x = parseInt(num[0], 2);  
            
            // The num[0] and num[1] are the two binary  
            // numbers resp 
            var yy = parseInt(num[1], 2);  
            var sum = x + yy; 
            var ans = sum.toString(2); 
            y.innerHTML=ans;
        }
    
    else if (s.indexOf("-") != -1) { 
            // If + is present in the string 
            // String obtained from scr is split 
            var num = s.split("-");  
              
            // The splitted string stores in num array 
            var x = parseInt(num[0], 2);  
            
            // The num[0] and num[1] are the two binary  
            // numbers resp 
            var yy = parseInt(num[1], 2);  
            var sum = x - yy; 
            var ans = sum.toString(2); 
            y.innerHTML=ans;
        }
    
    else if (s.indexOf("*") != -1) { 
            // If + is present in the string 
            // String obtained from scr is split 
            var num = s.split("*");  
              
            // The splitted string stores in num array 
            var x = parseInt(num[0], 2);  
            
            // The num[0] and num[1] are the two binary  
            // numbers resp 
            var yy = parseInt(num[1], 2);  
            var sum = x * yy; 
            var ans = sum.toString(2); 
            y.innerHTML=ans;
        }
    
    else if (s.indexOf("/") != -1) { 
            // If + is present in the string 
            // String obtained from scr is split 
            var num = s.split("/");  
              
            // The splitted string stores in num array 
            var x = parseInt(num[0], 2);  
            
            // The num[0] and num[1] are the two binary  
            // numbers resp 
            var yy = parseInt(num[1], 2);  
            var sum = x / yy; 
            var ans = sum.toString(2); 
            y.innerHTML=ans;
        }
});
