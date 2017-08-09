   
$("#leInputName").keyup(function(){
          for( i=1 ; i<=6 ; i++) {
    $(".purchitem" + i + " img").attr({"src" : "../image/starnotgood.png"} );          
    $(".sales   .purchitem"+ i).hide();
       }
    var searchField = $("#leInputName").val();
    $.getJSON("data.json" , function(data) { 
    var myExp = new RegExp(searchField , "i");
    var j=0;
          $.each(data,  function(key , val){
           if (val.gamename.search(myExp) != -1) {
               j++;
               $(".purchitem" + j + " .gamename").html(val.gamename);
               $(".purchitem" + j + " .pricetag b").html(val.price);
               $(".purchitem" + j + " .pic").css('backgroundImage', val.pricture);
               $(".purchitem" + j + " .discribe").html(val.text);
               $(".purchitem" + j).show();
               var a=parseInt(val.numberofstars);
               for  (h=1 ; h<=a ; h++ )   { 
                 $(".purchitem" + j + " img:nth-child(" + h + ")").attr({"src" : val.star} );
                   console.log(val.star)
                 }
           }  
           })    
      
    });
    });
    


  function showitem(){
         for( i=1 ; i<=6 ; i++) {
    $(".purchitem" + i + " img").attr({"src" : "../image/starnotgood.png"} );          
    $(".sales   .purchitem"+ i).hide();
       }
        $.getJSON("data.json" , function(data) {
            var j=0;
             $.each(data,  function(key , val){
                 if ((val.status == "new" && $("#nova").prop( "checked" ) == true) || (val.status == "classic" && $("#classik").prop( "checked" ) == true) || (val.status == "sale" && $("#sellout").prop( "checked" ) == true)){
               j++;
               $(".purchitem" + j + " .gamename").html(val.gamename);
               $(".purchitem" + j + " .pricetag b").html(val.price);
               $(".purchitem" + j + " .pic").css('backgroundImage', val.pricture);
               $(".purchitem" + j + " .discribe").html(val.text);
               $(".purchitem" + j).show();
               var a=parseInt(val.numberofstars);
               for  (h=1 ; h<=a ; h++ )   { 
                 $(".purchitem" + j + " img:nth-child(" + h + ")").attr({"src" : val.star} );
                
                 }
             }
             })
        })
        
        
   }




  $("#nova").click(showitem);
  $("#classik").click(showitem);
  $("#sellout").click(showitem) ;

var arr=[];
var arr2=[];
(function(){
       $.getJSON("galary.json", function(data){ 
       console.log(data);
         $.each(data,  function(key , val){
          console.log(key);
          console.log(val.slidebg);
           arr.push(val.slidebg.trim());  
            arr2.push(val.slidetext.trim()); 
   
         });
       console.log(arr);
            console.log(arr2);
      
    })
})()



var i = 0;
$("#left").click(function(){
 i++;  
    if (i>(arr.length-1)) {i=0;}
for(j=1 ; j<=4; j++)
   {
    if ((j+i)>(arr.length)) {
        $(".slide"+ (j)).css('backgroundImage', arr[j+i-(arr.length+1)]);
        $(".slide"+ (j) + " .prozoro").html( arr2[j+i-(arr2.length+1)]);
    }
     else $(".slide"+ (j)).css('backgroundImage', arr[j+i-1]);
      $(".slide"+ (j) + " .prozoro").html( arr2[j+i-1]);
    // $(".slide"+ i + " .prozoro" ).html(val.slidetext); 
   }
 

})


$("#right").click(function(){
       i--;  
   if (i<0) {i=arr.length-1}
    
    for(j=1 ; j<=4; j++)
   {  
       if ((j+i)>(arr.length)) {
        $(".slide"+ (j)).css('backgroundImage', arr[j+i-(arr.length+1)]);
        $(".slide"+ (j) + " .prozoro").html( arr2[j+i-(arr2.length+1)]);
    }
     else $(".slide"+ (j)).css('backgroundImage', arr[j+i-1]);
      $(".slide"+ (j) + " .prozoro").html( arr2[j+i-1]);
    // $(".slide"+ i + " .prozoro" ).html(val.slidetext); 
    // $(".slide"+ i + " .prozoro" ).html(val.slidetext); 
   }
  
    
})    
    /*
    
    $("#nova").click(function (){
         for( i=1 ; i<=6 ; i++) {
    $(".purchitem" + i + " img").attr({"src" : "../image/starnotgood.png"} );          
    $(".sales   .purchitem"+ i).hide();
       }
        $.getJSON("data.json" , function(data) {
            var j=0;
             $.each(data,  function(key , val){
                  if ((val.status == "new" && $("#nova").prop( "checked" ) == true) || (val.status == "classic" && $("#classik").prop( "checked" ) == true) || (val.status == "sale" && $("#sellout").prop( "checked" ) == true)){
               j++;
               $(".purchitem" + j + " .gamename").html(val.gamename);
               $(".purchitem" + j + " .pricetag b").html(val.price);
               $(".purchitem" + j + " .pic").css('backgroundImage', val.pricture);
               $(".purchitem" + j + " .discribe").html(val.text);
               $(".purchitem" + j).show();
               var a=parseInt(val.numberofstars);
               for  (h=1 ; h<=a ; h++ )   { 
                 $(".purchitem" + j + " img:nth-child(" + h + ")").attr({"src" : val.star} );
                
                 }
             }
             })
        })
    });
   
    
    //функция gamestatus() ниже отрабатывает
    $("#classik").click(function(){
         for( i=1 ; i<=6 ; i++) {
    $(".purchitem" + i + " img").attr({"src" : "../image/starnotgood.png"} );          
    $(".sales   .purchitem"+ i).hide();
       }
        $.getJSON("data.json" , function(data) {
            var j=0;
             $.each(data,  function(key , val){
                 if ((val.status == "new" && $("#nova").prop( "checked" ) == true) || (val.status == "classic" && $("#classik").prop( "checked" ) == true) || (val.status == "sale" && $("#sellout").prop( "checked" ) == true)){
               j++;
               $(".purchitem" + j + " .gamename").html(val.gamename);
               $(".purchitem" + j + " .pricetag b").html(val.price);
               $(".purchitem" + j + " .pic").css('backgroundImage', val.pricture);
               $(".purchitem" + j + " .discribe").html(val.text);
               $(".purchitem" + j).show();
               var a=parseInt(val.numberofstars);
               for  (h=1 ; h<=a ; h++ )   { 
                 $(".purchitem" + j + " img:nth-child(" + h + ")").attr({"src" : val.star} );
                
                 }
             }
             })
        })
        
        
    })
   
   
   
   
   
   $("#sellout").click(function(){
         for( i=1 ; i<=6 ; i++) {
    $(".purchitem" + i + " img").attr({"src" : "../image/starnotgood.png"} );          
    $(".sales   .purchitem"+ i).hide();
       }
        $.getJSON("data.json" , function(data) {
            var j=0;
             $.each(data,  function(key , val){
                  if ((val.status == "new" && $("#nova").prop( "checked" ) == true) || (val.status == "classic" && $("#classik").prop( "checked" ) == true) || (val.status == "sale" && $("#sellout").prop( "checked" ) == true)){
               j++;
               $(".purchitem" + j + " .gamename").html(val.gamename);
               $(".purchitem" + j + " .pricetag b").html(val.price);
               $(".purchitem" + j + " .pic").css('backgroundImage', val.pricture);
               $(".purchitem" + j + " .discribe").html(val.text);
               $(".purchitem" + j).show();
               var a=parseInt(val.numberofstars);
               for  (h=1 ; h<=a ; h++ )   { 
                 $(".purchitem" + j + " img:nth-child(" + h + ")").attr({"src" : val.star} );
                
                 }
             }
             })
        })
    })*/