(function () {
     "use strict";
     console.log("reading js");
     // your code starts here
     window.addEventListener('load', function(){
          const sliderPics = document.querySelector('.set1');
          const track = this.document.querySelector('.track');

          //width of original set of images
          const slideWidth = sliderPics.offsetWidth;

          //repeat the images and assign them a new class "set2"
          const repeat = sliderPics.cloneNode(true);
          repeat.className = "set2";
          
          //add the repeat slider to the DOM
          track.appendChild(repeat);

          //get root element
          let root = this.document.querySelector(':root');

          //set the end position based on the width of the slider
          const endLeftPos = `-${slideWidth}px`;
          root.style.setProperty('--sliderwidth', endLeftPos);

          //add animate class to start animating slider
          track.classList.add("animate");

          console.log(slideWidth);
          console.log(track);
     });

})();