const information =[]

// heart section function
function addOne(){
     
    const redHeart = document.getElementById('red-heart')
    const redHeartValue = parseInt(redHeart.innerText)
    const totalRedHeart = redHeartValue + 1;
    
   redHeart.innerText = totalRedHeart;

    return redHeart;
}

// call section function
function cost(){
 const coins = document.getElementById('coin')
   
    
  

    const coinValue = parseInt(coins.innerText)
     if(coinValue < 20){
alert("You have insufficient coin")
return false;
    }
    const totalCoinsValue = coinValue - 20;
    coins.innerText = totalCoinsValue;
   
   
    return true;
}



 function updateCallHistory(data){
    
   const callHistory = document.getElementById('call-history')
   
    const div = document.createElement('div')
    div.innerHTML = `<div class="bg-[#fafaf7] rounded-xl w-full flex justify-between items-center
mt-[1rem]">
<div><h1>${data.name}</h1>
<p>${data.number}</p></div>
<div>${data.date}</div>


</div>
    `
    callHistory.appendChild(div)
    return callHistory;
    }

document.getElementById('call1').addEventListener('click',function(
){
     alert("service name :Emergency Number  Number:999")
     const data ={
        name:'Emergency Number',
        number: 999, 
        date: new Date().toLocaleString()
    }
    if(cost()){
    information.push(data)
    updateCallHistory(data);
  
    }
    
})
document.getElementById('call2').addEventListener('click',function(
){
     alert("service name : Police helpline Number  Number:999")
   const data ={
        name:'Police Helpline', 
        number:999,
        date: new Date().toLocaleString()
    }
     if(cost()){
    information.push(data)
    updateCallHistory(data);
  
    }
   

})
document.getElementById('call3').addEventListener('click',function(
){
    
        
alert("service name : Fire Service   Number:999")
 const data ={
        name:'Fire Service', 
        number:999,
        date: new Date().toLocaleString()
    }
   if(cost()){
    information.push(data)
    updateCallHistory(data);
  
    }

})
document.getElementById('call4').addEventListener('click',function(
){
     
   
    alert("service name : Ambulance Service   Number:1994-999999")
     const data ={
        name:'Ambulance service', 
        number:1994-999999,
        date: new Date().toLocaleString()
    }
      if(cost()){
    information.push(data)
    updateCallHistory(data);
  
    }

})
document.getElementById('call5').addEventListener('click',function(
){
     
   
   alert("service name :Women and Child Helpline Number:109")
    const data ={
        name:'Women and Child Helpline', 
        number:109,
        date: new Date().toLocaleString()
    }
    if(cost()){
    information.push(data)
    updateCallHistory(data);
  
    }
   
})
document.getElementById('call6').addEventListener('click',function(
){
     
 
    alert("service name :Anti Corruption Service   Number:109")
     const data ={
        name:'Anti-corruption Helpline', 
        number:106,
        date: new Date().toLocaleString()
    }
      if(cost()){
    information.push(data)
    updateCallHistory(data);
  
    }
})
document.getElementById('call7').addEventListener('click',function(
){
     
  
    alert("service name :Electricity Helpline  Number:16216")
     const data ={
        name:'Electricity Helpline', 
        number:16216,
        date: new Date().toLocaleString()
    }
     if(cost()){
    information.push(data)
    updateCallHistory(data);
  
    }
})
document.getElementById('call8').addEventListener('click',function(
){
     
  
    alert("service name :Brac Helpline   Number:16445")
     const data ={
        name:'Brac Helpline', 
        number:16445,
        date: new Date().toLocaleString()
    }
      if(cost()){
    information.push(data)
    updateCallHistory(data);
  
    }
})
document.getElementById('call9').addEventListener('click',function(
){
     
   
    alert("service name :Bangladesh Railway Service   Number:163")
     const data ={
        name:'Bangladesh Railway Helpline', 
        number:163,
        date: new Date().toLocaleString()
    }
  if(cost()){
    information.push(data)
    updateCallHistory(data);
  
    }
})
document.getElementById('heart1').addEventListener('click',function(
){
    addOne();
})
document.getElementById('heart2').addEventListener('click',function(
){
    addOne();
})
document.getElementById('heart3').addEventListener('click',function(
){
    addOne();
})
document.getElementById('heart4').addEventListener('click',function(
){
    addOne();
})
document.getElementById('heart5').addEventListener('click',function(
){
    addOne();
})
document.getElementById('heart6').addEventListener('click',function(
){
    addOne();
})
document.getElementById('heart7').addEventListener('click',function(
){
    addOne();
})
document.getElementById('heart8').addEventListener('click',function(
){
    addOne();
})
document.getElementById('heart9').addEventListener('click',function(
){
    addOne();
})

document.getElementById('clear').addEventListener('click',function(){
    const divs = document.getElementById('call-history')
    divs.innerHTML = '';
    return divs;
})


//  const button = document.getElementById("copy-btn");
//     const textElement = document.getElementById("text-to-copy");

//     // 2. Add a click event to the button
//     button.addEventListener("click", async () => {
//       // 3. Get the text inside the <p>
//       const text = textElement.textContent;

//       try {
//         // 4. Use the modern Clipboard API to copy
//         await navigator.clipboard.writeText(text);

//         // 5. Give feedback (change button text)
//         button.textContent = "Copied!";
        
//         // 6. Reset the button after 1.5 seconds
//         setTimeout(() => {
//           button.textContent = "Copy text";
//         }, 1500);

//       } catch (err) {
//         console.error("Failed to copy: ", err);
//       }
//     });
let copyTime =0;
function reuse(copy,num){
const button = document.getElementById(copy);
 const textElement = document.getElementById(num);

 button.addEventListener('click',async() =>{

    
const text = textElement.textContent

try {
        
        await navigator.clipboard.writeText(text);
copyTime++;
      

        button.textContent = "Copied!";
            alert(`Copied text: "${text}" copy times: ${copyTime}`);
       
        setTimeout(() => {
          button.textContent = "Copy";
        }, 1500);

      }
    catch (err) {
        console.error("Failed to copy: ", err);
       }});
       }

         reuse("copy1", "num1");

         reuse("copy2", "num2");

         reuse("copy3", "num3");

         reuse("copy4", "num4");

         reuse("copy5", "num5");

         reuse("copy6", "num6");

         reuse("copy7", "num7");

         reuse("copy8", "num8");

         reuse("copy9", "num9");