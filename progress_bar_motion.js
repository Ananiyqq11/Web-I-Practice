//progress
var init_value=1;  
function abc(){  
 var progress = document.getElementById ('progressbar');  
     setInterval (function ()  
    {   
                 if(init_value<100){  
                    init_value++;  
                    progress.value =init_value;    
                  }  
                 abc();              
      }, 1000);  }

      //range
      function fun(e)
      {
      var container = document.getElementById('container');
      var val = e.value;
      container.setAttribute("style", "filter: brightness("+val+"%);");
      }