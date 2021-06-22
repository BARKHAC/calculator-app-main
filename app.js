//document.getElementById("1").addEventListener("click",display=>document.getElementById("output").innerHTML=document.getElementById("1").value)
function displayy(objButton){
   document.getElementById("output").innerHTML = objButton.value;
}

const calC = document.querySelector('.calculator');
const keys = calC.querySelector('.main1');
const display = document.querySelector('#output');
const previousKeyType = calC.dataset.previousKeyType;

keys.addEventListener('click' , e=>{
     if(e.target.matches('button')){               //key is clicked
       const key= e.target;                      //where click has taken place
       const action = key.dataset.action;         //attribute
       const keyContent = key.textContent;           //need to know which key clicked
       const displayedNum = display.textContent;       //value displayed on output
       if(!action){
           if(displayedNum === '0' || previousKeyType === 'operator'){
               display.textContent = keyContent;
           }
           else{
               display.textContent = displayedNum + keyContent;
              
           }
       }   
       else if(
           action === 'add' ||
           action === 'subtract' ||
           action === 'multiply' ||
           action === 'divide'
        ){
            calC.dataset.previousKeyType = 'operator'
           }
    
    
        else if(
            action === 'delete' 
        ){
            console.log('here')
            var str = displayedNum;
            var newstr = str.substring(0,str.length-1)
            display.textContent = newstr;
            console.log(newstr)
        }
        else if(
             action === 'decimal'
        ){
            display.textContent = displayedNum + '.'
        }
        else if(
            action === 'reset'
        ){
            display.textContent = 0;
        }
        else if(
            action === 'calculate'
        ){
            console.log('equals to sign')
        }
     }
    }
)
