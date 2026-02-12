(function () {
     "use strict";
     console.log("reading js");
     // your code starts here

    const myForm = document.querySelector('form');
    
    const answer = document.querySelector("#answer");
    const result = document.querySelector("#answer .result");
    const box = document.querySelector(".box");
    const exitBtn = document.querySelector("#resubmit")

    

    myForm.addEventListener('submit', function(event){

        event.preventDefault();


    
       
        const name = document.querySelector('#name').value;
        const accessory = document.querySelector('#accessorySelect').value;
        const adjective = document.querySelector('#adjective').value;
        const verb = document.querySelector('#verb').value;
        const tool = document.querySelector('#tool').value;
        const color = document.querySelector('#color').value;

        
        const finalText = `Meet the adventurous otter named, ${name}, famous for wearing a lucky ${accessory} while exploring the sea! One day, feeling especially ${adjective}, the otter set off ${verb} through the waters near the reef in search of a legendary treasure. After a long search, and using a trusty ${tool}, ${name} finally uncovered a glowing ${color} pearl hidden beneath the sand. Excited, ${name} swam home to show his treasure to all his friends!`;
          

        
        result.innerHTML = `Meet the adventurous otter named, <span class="highlight">${name}</span>, famous for wearing a lucky <span class="highlight">${accessory}</span> while exploring the sea! One day, feeling especially <span class="highlight">${adjective}</span>, the otter set off <span class="highlight">${verb}</span> through the waters near the reef in search of a legendary treasure. After a long search, and using a trusty <span class="highlight">${tool}</span>, <span class="highlight">${name}</span> finally uncovered a glowing <span class="highlight">${color}</span> pearl hidden beneath the sand. Excited, <span class="highlight">${name}</span> swam home to show his treasure to all his friends!`;
      
        
        box.classList.add('hidden');
        answer.classList.remove("hidden");
      

    });

    //refresh
    exitBtn.addEventListener('click', function(event){
        event.preventDefault();
        myForm.reset();
       // answer.innerHTML = result + `<p><a href = "#" id = "resubmit">Try Again!</a></p>`
       answer.classList.add("hidden");
       box.classList.remove("hidden");
    });
    

})();