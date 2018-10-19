// For-loop functions

function possitiveIntSum(limit){
      let sum= 0;
      for(let i=1; i<=limit;i++){
            sum=sum+i;
      }
      return sum;
}


function additionPatternSum(start, diff, limit){
      let sum= start;
      for(let k= 0;k<= limit; k++){
            sum= sum+diff*k;
      }
      return sum;
}




// While-loop function

function multiplicationPatternSum(start,factor,max){
      let sum= start;
      let i= start;
      while(i<=max){
            sum=sum + i*factor;
            i= i*factor;
      } 
      return sum;
}



console.log("q1: "+possitiveIntSum(1500));
console.log("q2: "+possitiveIntSum(2000000))
