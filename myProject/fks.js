'use strict';
var burberryImage = document.getElementById('burberry');
var kenzoImage = document.getElementById('kenzo');
var gucciImage = document.getElementById('gucci');
var burberrySelectedColor = document.getElementById('color1');
var kenzoSelectedColor = document.getElementById('color2');
var gucciSelectedColor = document.getElementById('color3');
var totalCost = document.getElementById('cost');
var burberryButton = document.getElementById('burberyButton');
var kenzoButton = document.getElementById('kenzoButton');
var gucciButton = document.getElementById('gucciButton');






/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("mySidepanel").style.height = "1000px";
    
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  burberryImage.addEventListener('mouseover',function(e){
    this.src = 'burberryTshirt.jpg';
 });

 burberryImage.addEventListener('mouseout',function(e){
  this.src = 'burberryTshirtWithModel.jpg';
 });

 burberrySelectedColor.addEventListener("change",function(e){

  if(this.value == 'White'){
    burberryImage.src = 'burberryTshirtWithModelWhite.jpg';
    
   
    burberryImage.addEventListener('mouseover',function(e){
      this.src = 'burberryTshirtWhite.jpg';
   });
  
   burberryImage.addEventListener('mouseout',function(e){
    this.src = 'burberryTshirtWithModelWhite.jpg';
   });
    
  }
  else{
    burberryImage.src = 'burberryTshirtWithModel.jpg';
   
    burberryImage.addEventListener('mouseover',function(e){
      this.src = 'burberryTshirt.jpg';
   });
  
   burberryImage.addEventListener('mouseout',function(e){
    this.src = 'burberryTshirtWithModel.jpg';
   });
  }

 });



 kenzoImage.addEventListener('mouseover',function(e){
  this.src = 'kenzoTshirt.jpg';
});



kenzoImage.addEventListener('mouseout',function(e){
this.src = 'kenzoTshirtWithModel.jpg';
});

kenzoSelectedColor.addEventListener("change",function(e){

  if(this.value == 'Black'){
    kenzoImage.src = 'kenzoTshirtWithModelBlack.jpg';
    
   
    kenzoImage.addEventListener('mouseover',function(e){
      this.src = 'kenzoTshirtBlack.jpg';
   });
  
  kenzoImage.addEventListener('mouseout',function(e){
    this.src = 'kenzoTshirtWithModelBlack.jpg';
   });
    
  }
  else{
    kenzoImage.src = 'kenzoTshirtWithModel.jpg';
   
    kenzoImage.addEventListener('mouseover',function(e){
      this.src = 'kenzoTshirt.jpg';
   });
  
 kenzoImage.addEventListener('mouseout',function(e){
    this.src = 'kenzoTshirtWithModel.jpg';
   });
  }

 });




gucciImage.addEventListener('mouseover',function(e){
  this.src = 'gucciTshirt.jpg';
});

gucciImage.addEventListener('mouseout',function(e){
this.src = 'gucciTshirtWithModel.jpg';
});
gucciSelectedColor.addEventListener("change",function(e){

  if(this.value == 'White'){
    gucciImage.src = 'gucciTshirtWithModelWhite.jpg';
    
   
    gucciImage.addEventListener('mouseover',function(e){
      this.src = 'gucciTshirtWhite.jpg';
   });
  
   gucciImage.addEventListener('mouseout',function(e){
    this.src = 'gucciTshirtWithModelWhite.jpg';
   });
    
  }
  else{
    gucciImage.src = 'gucciTshirtWithModel.jpg';
   
    gucciImage.addEventListener('mouseover',function(e){
      this.src = 'gucciTshirt.jpg';
   });
  
  gucciImage.addEventListener('mouseout',function(e){
    this.src = 'gucciTshirtWithModel.jpg';
   });
  }

 });

 burberryButton.addEventListener("click", function() {
  document.getElementById('cost').value =parseInt( document.getElementById('cost').value)+ document.getElementById('no1').value*parseInt(document.getElementById('burberryPrice').innerText);
});

kenzoButton.addEventListener("click", function() {
  document.getElementById('cost').value =parseInt( document.getElementById('cost').value)+ document.getElementById('no2').value*parseInt(document.getElementById('kenzoPrice').innerText);
});
gucciButton.addEventListener("click", function() {
  document.getElementById('cost').value =parseInt( document.getElementById('cost').value)+ document.getElementById('no3').value*parseInt(document.getElementById('gucciPrice').innerText);
});