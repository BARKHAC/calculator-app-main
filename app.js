//document.getElementById("1").addEventListener("click",display=>document.getElementById("output").innerHTML=document.getElementById("1").value)
/*function displayy(objButton){
   document.getElementById("output").innerHTML = objButton.value;
}*/

const calC = document.querySelector('.calculator');
const keys = calC.querySelector('.main1');

const calculate = (n1,operator,n2)=>{
    let result = '';
    console.log('Before: ',n1,',',n2,',',operator)
    n1=n1.replace(/\s+/g, '');
    n2=n2.replace(/\s+/g, '');
    console.log('After: ',n1,',',n2,',',operator)

    if(operator==='add'){
        result = parseFloat(n1) + parseFloat(n2);
    }
    else if(operator==='subtract'){
        result = parseFloat(n1)- parseFloat(n2);
    }
    else if(operator==='multiply'){
        result = parseFloat(n1)*parseFloat(n2);
    }
    else if(operator==='divide'){
        result = parseFloat(n1)/parseFloat(n2);
    }
    return result;
}

var a =0;
keys.addEventListener('click' , e=>{
     if(e.target.matches('button')){
                       //key is clicked
       const key= e.target;                      //where click has taken place
       const action = key.dataset.action;         //attribute
       const keyContent = key.textContent; 
       const display = document.querySelector('#output');          //need to know which key clicked
       const displayedNum = display.textContent;  
       const previousKeyType = calC.dataset.previousKeyType;   
       var firstValue = calC.dataset.firstValue;
       var operator = calC.dataset.operator;  //value displayed on output
       if(!action){
           if(displayedNum === '0' || previousKeyType === 'operator'){
               display.textContent = keyContent
               console.log('display works')
           }
           else{
               display.textContent = displayedNum + keyContent;
              
           }
           calC.dataset.previousKeyType='number'                    //getting out of loop
       }   
       else if(
           action === 'add' ||
           action === 'subtract' ||
           action === 'multiply' ||
           action === 'divide'
        ){
            calC.dataset.previousKeyType = 'operator'
            calC.dataset.firstValue = displayedNum;
            calC.dataset.operator = action
            a=1;
           }
    
    
        else if(
            action === 'delete' 
        ){
            console.log('del')
            var str = displayedNum;
            var newstr = str.substring(0,str.length-1)
            display.textContent = newstr;
            console.log(newstr)
            calC.dataset.previousKeyType='delete'
        }
        else if(
             action === 'decimal'
        ){
          console.log(previousKeyType)
          console.log(a)
            if(!displayedNum.includes('.')){  
                display.textContent = displayedNum + '.'
                calC.dataset.previousKeyType='decimal'
            }
            else if(a===1){                  //currently doesn't work at all!
                console.log('here11')
                display.textContent = '0.'
            }
            calC.dataset.previousKeyType = 'decimal'
        }
        else if(
            action === 'reset'
        ){
            display.textContent = 0;
        }
        else if(
            action === 'calculate'
        ){
            firstValue = calC.dataset.firstValue;
            operator = calC.dataset.operator;
            var secondValue = displayedNum;
            display.textContent = calculate(firstValue, operator , secondValue)
            calC.dataset.previousKeyType='calculate'

        }
     }
    }
)

