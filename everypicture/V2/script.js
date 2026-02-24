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
         const hotSpot1 = mouseX >= 775 && mouseX <= 850 && mouseY >=590 && mouseY <= 680;
         const hotSopt2 = mouseX >= 545 && mouseX <= 620 && mouseY >=490 && mouseY <= 580;
         const hotSopt3 = mouseX >= 545 && mouseX <= 620 && mouseY >=690 && mouseY <= 785;
         const hotSopt4 = mouseX >= 930 && mouseX <= 1000 && mouseY >=690 && mouseY <= 785;
         const hotSopt5 = mouseX >= 930 && mouseX <= 1000 && mouseY >=400 && mouseY <= 485;

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
         } else if (hotSopt2){
            const originX = (mouseX / rect.width) * 100;
            const originY = (mouseY / rect.height) * 100;

            Header.style.visibility = "hidden";
            container.style.transformOrigin = originX + "%" + originY + "%";
            container.style.transform = "scale(4)";

           
         } else if (hotSopt3){
            const originX = (mouseX / rect.width) * 100;
            const originY = (mouseY / rect.height) * 100;

            Header.style.visibility = "hidden";
            container.style.transformOrigin = originX + "%" + originY + "%";
            container.style.transform = "scale(4)";
         } else if (hotSopt4){
            const originX = (mouseX / rect.width) * 100;
            const originY = (mouseY / rect.height) * 100;

            Header.style.visibility = "hidden";
            container.style.transformOrigin = originX + "%" + originY + "%";
            container.style.transform = "scale(4)";
         } else if (hotSopt5){
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