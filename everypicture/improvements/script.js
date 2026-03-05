(function () {
     "use strict";
     console.log("reading js");

    //code starts here
    let prevLoc = 0;
    const theImg = document.querySelector('.background-img img');
    const container = document.querySelector('#container');
    const percent = container.offsetWidth / 100;
    let isZoomed = false;
   
    //find boxes
    document.querySelector('#pic1').addEventListener('pointerenter', function(){
        console.log('over pic 1');
        
    });

    document.querySelector('#pic2').addEventListener('pointerenter', function(){
        console.log('over pic 2');
    });

    document.querySelector('#pic3').addEventListener('pointerenter', function(){
        console.log('over pic 3');
    });

    document.querySelector('#pic4').addEventListener('pointerenter', function(){
        console.log('over pic 4');
    });

    document.querySelector('#pic5').addEventListener('pointerenter', function(){
        console.log('over pic 5');
    });

    //stores the values
    const rect = container.getBoundingClientRect();

    //zoom in on mouse position
    container.addEventListener('mousemove', reportPos);

     function reportPos(event) {

        // variable is a test from slides
         const mousePosx = Math.ceil((event.clientX - (container.getBoundingClientRect().left)) / percent);
         
        //initialize positions 
         const mouseX = event.clientX - rect.left;
         const mouseY = event.clientY - rect.top;

        //define hotspot positions for mouse to zoom into
         const hotSpot1 = mouseX >= 395 && mouseX <= 440 && mouseY >=415 && mouseY <= 480;
         const hotSpot2 = mouseX >= 670 && mouseX <= 720 && mouseY >=350 && mouseY <= 415;
         
         const hotSpot3 = mouseX >= 560 && mouseX <= 605 && mouseY >=485 && mouseY <= 545;
        
         const hotSpot4 = mouseX >= 450 && mouseX <= 500 && mouseY >=550 && mouseY <= 610;
       
         const hotSpot5 = mouseX >= 670 && mouseX <= 718 && mouseY >=545 && mouseY <= 610;

         //to hide and show header
         const Header = document.querySelector("header");
        
         //conditionals for zoom ins based on mouse positon
         if( hotSpot1 ) {
            const originX = (mouseX / rect.width) * 100;
            const originY = (mouseY / rect.height) * 100;

            Header.style.visibility = "hidden";
            container.style.transformOrigin = originX + "%" + originY + "%";
            container.style.transform = "scale(4)";

            isZoomed = true;
         } else if (hotSpot2){
            const originX = (mouseX / rect.width) * 100;
            const originY = (mouseY / rect.height) * 100;

            Header.style.visibility = "hidden";
            container.style.transformOrigin = originX + "%" + originY + "%";
            container.style.transform = "scale(4)";

           
         } else if (hotSpot3){
            const originX = (mouseX / rect.width) * 100;
            const originY = (mouseY / rect.height) * 100;

            Header.style.visibility = "hidden";
            container.style.transformOrigin = originX + "%" + originY + "%";
            container.style.transform = "scale(4)";
         } else if (hotSpot4){
            const originX = (mouseX / rect.width) * 100;
            const originY = (mouseY / rect.height) * 100;

            Header.style.visibility = "hidden";
            container.style.transformOrigin = originX + "%" + originY + "%";
            container.style.transform = "scale(4)";
         } else if (hotSpot5){
            const originX = (mouseX / rect.width) * 100;
            const originY = (mouseY / rect.height) * 100;

            Header.style.visibility = "hidden";
            container.style.transformOrigin = originX + "%" + originY + "%";
            container.style.transform = "scale(4)";
         } else  {
            container.style.transform = "scale(1)";
            Header.style.visibility = "visible";
            
         }
         //acquire mouse values
         console.log(mouseX, mouseY);
     }

    
   

})();