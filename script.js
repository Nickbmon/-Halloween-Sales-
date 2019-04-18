
$(".candy").click(function(){
  var canPics =["http://www.pngmart.com/files/3/Candy-PNG-File.png","https://ubisafe.org/images/candy-transparent-rainbow-4.png","https://ubisafe.org/images/candy-transparent-kit-kat-1.png","https://cdn.shopify.com/s/files/1/2170/3719/products/M_M_s_Milk_Chocolate_Candy_300x300.png?v=1512358075","https://png2.kisspng.com/20180622/ycx/kisspng-liquorice-gummi-candy-sweetarts-sweet-tart-5b2db5956d5bf3.391506681529722261448.png"];
var number = Math.floor(Math.random()*5);
console.log(number);
$(".can1").attr("src", canPics[number]);
});

$(".costume").click(function(){
  var cosPics =["https://img2.joke.co.uk/images/products/jmw-v3/small/81961.png","https://www.savers.com/sites/default/files/incredibles_adult_-_more_ideas.png","https://img2.joke.co.uk/images/products/jmw-v3/small/82017.png?1534825425818","http://img1.wikia.nocookie.net/__cb20140313124424/kamenrider/images/4/41/Kamen_Rider_OOO_Gatakiriba.png","https://i.pinimg.com/originals/97/53/e8/9753e89e17b6654657e86e4c8328ee27.png"];
var number = Math.floor(Math.random()*5);
console.log(number);
$(".cost1").attr("src", cosPics[number]);
});
$(".halloween").change(function(){
        var hal = $(this).children("option:selected").val();
        if( hal === "Buying Costume Only" ){
        alert("Your a broke boy!");
        }else if(hal === "Buying Candy Only"){
        alert("You got money like that?");
        }else{
        alert("Stop right there, your card was denied!");
        
}
});
        