(function () {
     "use strict";
     console.log("reading js");
     // your code starts here

    const myForm = document.querySelector('form');
    
    const answer = document.querySelector("#answer");
    const result = document.querySelector("#answer .result");
    const box = document.querySelector(".box");
    

    myForm.addEventListener('submit', function(event){

        event.preventDefault();


    
       
        const name = document.querySelector('#name').value;
        const accessory = document.querySelector('#accessorySelect').value;
        const adjective = document.querySelector('#adjective').value;
        const verb = document.querySelector('#verb').value;
        const tool = document.querySelector('#tool').value;
        const color = document.querySelector('#color').value;

        
        const finalText = `Meet the adventurous otter named, ${name}, famous for wearing a lucky ${accessory} while exploring the sea! One day, feeling especially ${adjective}, the otter set off ${verb} through the waters near the reef in search of a legendary treasure. After a long search, and using a trusty ${tool}, ${name} finally uncovered a glowing ${color} pearl hidden beneath the sand. Excited, ${name} swam home to show his treasure to all his friends!`;
          
        
        
        
        result.textContent = finalText;
        box.classList.add('hidden');
        answer.classList.remove("hidden");
      

    });

    

})();