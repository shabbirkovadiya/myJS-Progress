// Triangle 1 
function printr1(){
var star= "";
for(let i=1;i<=5;i++){
 for(let j=1; j<=i;j++){
    star += " * ";
 }
 star += "\n";
}
return star;
}
document.getElementById("ex1").innerText = printr1();


// Decreasing Triangle

function printr2(){
    var star2= "";
    for(let i=5;i>0;i--){
     for(let j=1; j<=i;j++){
        star2 += " * ";
     }
     star2 += "\n";
    }
    return star2;
    }
    document.getElementById("ex2").innerText = printr2();
    


    // Square Pattern

function printr3(){
   var hash= "";
   for(let i=1;i<=5;i++){
    for(let j=1; j<=5;j++){
       hash += " # ";
    }
    hash += "\n";
   }
   return hash;
}

   document.getElementById("ex3").innerText = printr3();
  

       //Hill Pattern

function printr4(){
   var hash2= "";
   for(let i=1;i<=5;i++){

    for(let j=i; j<=5;j++){
       hash2+="\u00A0"
    }
    for(k=1;k<=i;k++){
      hash2+= "* ";
    }
    hash2 += "\n";
   }
   return hash2;
}

   document.getElementById("ex4").innerText = printr4();
  

       //Reverse Hill Pattern

       function printr5(){
         var star3= "";
         for(let i=1;i<=5;i++){
      
          for(let j=1; j<=i;j++){
             star3+="\u00A0"
          }
          for(k=5;k>=i;k--){
            star3+= "* ";
          }
          star3 += "\n";
         }
         return star3;
      }
      
         document.getElementById("ex5").innerText = printr5();
        
       //Double Hill Pattern

         function printr6(){
            var star4= "";
            for(let i=1;i<=5;i++){
         
             for(let j=i; j<=5;j++){
                star4+="\u00A0"
             }
             for(k=1;k<=i;k++){
               star4+= "* ";
             }
             for(let j=i; j<=5;j++){
               star4+="\u00A0\u00A0 "
            }
            for(k=1;k<=i;k++){
              star4+= " *";
            }
             star4 += "\n";
            }
            return star4;
         }
         
            document.getElementById("ex6").innerText = printr6();
           

          //Diamond Pattern

function printr7(){
   var star5= "";
   for(let i=1;i<=5;i++){

    for(let j=i; j<=5;j++){
       star5+="\u00A0"
    }
    for(k=1;k<=i;k++){
      star5+= "* ";
    }
    star5 += "\n";
   }
   for(let i=1;i<=5;i++){
      
      for(let j=1; j<=i;j++){
         if(j==1){
            star5+="\u00A0\u00A0";
         
         }else{
         star5+="\u00A0"
         }
      }
      for(k=5;k>=i;k--){
         if(k==5){
            continue;
         }else{
        star5+= "* ";
         }
      }
      star5 += "\n";
     }
     
   return star5;
}

   document.getElementById("ex7").innerText = printr7();
  

      // Square Hollow Pattern

function printr8(){
   var star6= "";
   for(let i=1;i<=5;i++){
    for(let j=1; j<=5;j++){
      if(i==1 || i==5 || j==1 || j==5){

         star6 += " * ";
      }else{
         star6 += "\u00A0\u00A0";
      }
    }
    star6 += "\n";
   }
   return star6;
}

   document.getElementById("ex8").innerText = printr8();
  
   // Number Triangle
function printr9(){
   var star7= "";
   for(let i=1;i<=5;i++){
      for(let j=i; j<=5;j++){
         star7+="\u00A0"
      }
    for(let k=1; k<=i;k++){
       star7 += i;
    }
    star7 += "\n";
   }
   return star7;
   }
   document.getElementById("ex9").innerText = printr9();
   
   
   // Number Increasing Triangle
function printr10(){
   var star8= "";
   for(let i=1;i<=5;i++){
    for(let j=1; j<=i;j++){
       star8 += j;
    }
    star8 += "\n";
   }
   return star8;
   }
   document.getElementById("ex10").innerText = printr10();
   
// Number Decreasing Triangle

function printr11(){
   var star9= "";
   for(let i=5;i>0;i--){
    for(let j=1; j<=i;j++){
       star9 += j;
    }
    star9 += "\n";
   }
   return star9;
   }
   document.getElementById("ex11").innerText = printr11();
   
 // Number Changing Triangle
 function printr12(){
   var star10= "";
   var n=1;
   for(let i=1;i<=5;i++){
    for(let j=1; j<=i;j++){
       star10 += n +"\u00A0";
       n++;
    }
    star10 += "\n";
   }
   return star10;
   }
   document.getElementById("ex12").innerText = printr12();
   
   // Zero One Triangle
 function printr13(){
   var star13= "";
   for(let i=1;i<=5;i++){
    for(let j=0; j<i;j++){
      if(j % 2 ==0){
       star13 += 0;
      }else{
       star13 += 1;

      }
    }
    star13 += "\n";
   }
   return star13;
   }
   document.getElementById("ex13").innerText = printr13();
   