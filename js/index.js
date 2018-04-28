var total_price = 0;
var total_items = 0;
var selected_item = 0;
var selected_counter=0;
var total_order_items = document.getElementById('item-counter');
var total_price_order = document.getElementById('price-counter');
var undoButton1 = document.querySelectorAll('.undo1');
var undoButton2 = document.querySelectorAll('.undo2');
var undoButton3 = document.querySelectorAll('.undo3');
var undoButton4 = document.querySelectorAll('.undo4');
var undoButton5 = document.querySelectorAll('.undo5');
var undoButton6 = document.querySelectorAll('.undo6');
var undoButton7 = document.querySelectorAll('.undo7');
var undoButton8 = document.querySelectorAll('.undo8');
var undoButton9 = document.querySelectorAll('.undo9');
var undoButton10 = document.querySelectorAll('.undo10');
var undoButton11= document.querySelectorAll('.undo11');
var undoButton12= document.querySelectorAll('.undo12');
var undoButton13= document.querySelectorAll('.undo13');
var undoButton14= document.querySelectorAll('.undo14');
var undoButton15= document.querySelectorAll('.undo15');
var customizeButton1 = document.querySelectorAll('.customize1'),
customizeButton2 = document.querySelectorAll('.customize2') ,
customizeButton3 = document.querySelectorAll('.customize3') ,
customizeButton4 = document.querySelectorAll('.customize4') ,
customizeButton5 = document.querySelectorAll('.customize5') ,
customizeButton6 = document.querySelectorAll('.customize6') ,
customizeButton7 = document.querySelectorAll('.customize7') ,
customizeButton8 = document.querySelectorAll('.customize8') ,
customizeButton9 = document.querySelectorAll('.customize9') ,
customizeButton10 = document.querySelectorAll('.customize10') ,
customizeButton11 = document.querySelectorAll('.customize11') ,
customizeButton12 = document.querySelectorAll('.customize12') ,
customizeButton13 = document.querySelectorAll('.customize13') ,
customizeButton14 = document.querySelectorAll('.customize14') ,
customizeButton15 = document.querySelectorAll('.customize15') ;

var orderCount1 = document.querySelector('#orderCount1') ;
var orderCount2 = document.querySelector('#orderCount2') ;
var orderCount3 = document.querySelector('#orderCount3') ;
var orderCount4 = document.querySelector('#orderCount4') ;
var orderCount5 = document.querySelector('#orderCount5') ;
var orderCount6 = document.querySelector('#orderCount6') ;
var orderCount7 = document.querySelector('#orderCount7') ;
var orderCount8 = document.querySelector('#orderCount8') ;
var orderCount9 = document.querySelector('#orderCount9') ;
var orderCount10 = document.querySelector('#orderCount10') ;
var orderCount11 = document.querySelector('#orderCount11') ;
var orderCount12 = document.querySelector('#orderCount12') ;
var orderCount13 = document.querySelector('#orderCount13') ;
var orderCount14 = document.querySelector('#orderCount14') ;
var orderCount15 = document.querySelector('#orderCount15') ;
var menuButton = document.querySelector("button.header");
var categories = document.querySelector(".categories");
var initialOrder1 = 0 ;
var initialOrder2 = 0  ;
var initialOrder3 = 0  ;
var initialOrder4 = 0  ;
var initialOrder5 = 0  ;
var initialOrder6 = 0  ;
var initialOrder7 = 0  ;
var initialOrder8 = 0  ;
var initialOrder9 = 0  ;
var initialOrder10 = 0  ;
var initialOrder11 = 0  ;
var initialOrder12 = 0  ;
var initialOrder13 = 0  ;
var initialOrder14 = 0  ;
var initialOrder15 = 0  ;

for (var i = 0 ; i < undoButton1.length ; i++){
    addEvent(undoButton1[i],undoItem1);
}
for(var  i = 0 ; i<customizeButton1.length  ;i++)
{
    addEvent(customizeButton1[i],addItem1) ;
}
for (var i = 0 ; i < undoButton2.length ; i++){
    addEvent(undoButton2[i],undoItem2);
}
for(var  j = 0 ; j<customizeButton2.length  ;j++)
{
    addEvent(customizeButton2[j],addItem2) ;
}
for (var i = 0 ; i < undoButton3.length ; i++){
    addEvent(undoButton3[i],undoItem3);
}
for(var  j = 0 ; j<customizeButton3.length  ;j++)
{
    addEvent(customizeButton3[j],addItem3) ;
}
for (var i = 0 ; i < undoButton4.length ; i++){
    addEvent(undoButton4[i],undoItem4);
}
for(var  j = 0 ; j<customizeButton4.length  ;j++)
{
    addEvent(customizeButton4[j],addItem4) ;
}
for (var i = 0 ; i < undoButton5.length ; i++){
    addEvent(undoButton5[i],undoItem5);
}
for(var  j = 0 ; j<customizeButton5.length  ;j++)
{
    addEvent(customizeButton5[j],addItem5) ;
}
for (var i = 0 ; i < undoButton6.length ; i++){
    addEvent(undoButton6[i],undoItem6);
}
for(var  j = 0 ; j<customizeButton6.length  ;j++)
{
    addEvent(customizeButton6[j],addItem6) ;
}
for (var i = 0 ; i < undoButton7.length ; i++){
    addEvent(undoButton7[i],undoItem7);
}
for(var  j = 0 ; j<customizeButton7.length  ;j++)
{
    addEvent(customizeButton7[j],addItem7) ;
}
for (var i = 0 ; i < undoButton8.length ; i++){
    addEvent(undoButton8[i],undoItem8);
}
for(var  j = 0 ; j<customizeButton8.length  ;j++)
{
    addEvent(customizeButton8[j],addItem8) ;
}
for (var i = 0 ; i < undoButton9.length ; i++){
    addEvent(undoButton9[i],undoItem9);
}
for(var  j = 0 ; j<customizeButton9.length  ;j++)
{
    addEvent(customizeButton9[j],addItem9) ;
}
for (var i = 0 ; i < undoButton10.length ; i++){
    addEvent(undoButton10[i],undoItem10);
}
for(var  j = 0 ; j<customizeButton10.length  ;j++)
{
    addEvent(customizeButton10[j],addItem10) ;
}
for (var i = 0 ; i < undoButton11.length ; i++){
    addEvent(undoButton11[i],undoItem11);
}
for(var  j = 0 ; j<customizeButton11.length  ;j++)
{
    addEvent(customizeButton11[j],addItem11) ;
}
for (var i = 0 ; i < undoButton12.length ; i++){
    addEvent(undoButton12[i],undoItem12);
}
for(var  j = 0 ; j<customizeButton12.length  ;j++)
{
    addEvent(customizeButton12[j],addItem12) ;
}
for (var i = 0 ; i < undoButton13.length ; i++){
    addEvent(undoButton13[i],undoItem13);
}
for(var  j = 0 ; j<customizeButton13.length  ;j++)
{
    addEvent(customizeButton13[j],addItem13) ;
}
for (var i = 0 ; i < undoButton14.length ; i++){
    addEvent(undoButton14[i],undoItem14);
}
for(var  j = 0 ; j<customizeButton14.length  ;j++)
{
    addEvent(customizeButton14[j],addItem14) ;
}
for (var i = 0 ; i < undoButton15.length ; i++){
    addEvent(undoButton15[i],undoItem15);
}
for(var  j = 0 ; j<customizeButton15.length  ;j++)
{
    addEvent(customizeButton15[j],addItem15) ;
}
for (var i = 0 ; i < undoButton1.length ; i++){
    addEvent(undoButton1[i],undoItem1);
}
function undoItem1(){
 initialOrder1-- ;
 orderCount1.value = initialOrder1;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price -=2;
 total_price_order.innerHTML = total_price;
}

function addItem1(){
 initialOrder1++ ;
 orderCount1.value = initialOrder1;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price +=2;
 total_price_order.innerHTML = total_price;
 var themain = document.createElement("div");

 console.log(initialOrder1);
}
function undoItem2(){
 initialOrder2-- ;
 orderCount2.value = initialOrder2;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price -=2;
 total_price_order.innerHTML = total_price;
}
function addItem2(){
 initialOrder2++ ;
 orderCount2.value = initialOrder2;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price +=2;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder2)
}
function undoItem3(){
 initialOrder3-- ;
 orderCount3.value = initialOrder3;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price -=2;
 total_price_order.innerHTML = total_price;
}
function addItem3(){
 initialOrder3++ ;
 orderCount3.value = initialOrder3;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price +=2;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder3)
}
function undoItem4(){
 initialOrder4-- ;
 orderCount4.value = initialOrder4;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price -=2;
 total_price_order.innerHTML = total_price;
}
function addItem4(){
 initialOrder4++ ;
 orderCount4.value = initialOrder4;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price +=2;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder4)
}
function undoItem5(){
 initialOrder5-- ;
 orderCount5.value = initialOrder5;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price -=2;
 total_price_order.innerHTML = total_price;
}
function addItem5(){
 initialOrder5++ ;
 orderCount5.value = initialOrder5;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price +=2;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder5)
}
function undoItem6(){
 initialOrder6-- ;
 orderCount6.value = initialOrder6;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price -=1.25;
 total_price_order.innerHTML = total_price;
}
function addItem6(){
 initialOrder6++ ;
 orderCount6.value = initialOrder6;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price +=1.25 ;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder6)
}
function undoItem7(){
 initialOrder7-- ;
 orderCount7.value = initialOrder7;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price -=2.75;
 total_price_order.innerHTML = total_price;
}
function addItem7(){
 initialOrder7++ ;
 orderCount7.value = initialOrder7;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price +=2.750;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder7)
}
function undoItem8(){
 initialOrder8-- ;
 orderCount8.value = initialOrder8;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price -=1.25;
 total_price_order.innerHTML = total_price;
}
function addItem8(){
 initialOrder8++ ;
 orderCount8.value = initialOrder8;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price +=1.25;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder5)
}
function undoItem9(){
 initialOrder9-- ;
 orderCount9.value = initialOrder9;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price -=1.5;
 total_price_order.innerHTML = total_price;
}
function addItem9(){
 initialOrder9++ ;
 orderCount9.value = initialOrder9;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price +=1.5;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder9)
}
function undoItem10(){
 initialOrder10-- ;
 orderCount10.value = initialOrder10;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price -=1.5;
 total_price_order.innerHTML = total_price;
}
function addItem10(){
 initialOrder10++ ;
 orderCount10.value = initialOrder10;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price +=1.5;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder10)
}
function undoItem11(){
 initialOrder11-- ;
 orderCount11.value = initialOrder11;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price -=2.5;
 total_price_order.innerHTML = total_price;
}
function addItem11(){
 initialOrder11++ ;
 orderCount11.value = initialOrder11;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price +=2.5;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder11)
}
function undoItem12(){
 initialOrder12-- ;
 orderCount12.value = initialOrder12;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price -=1.5;
 total_price_order.innerHTML = total_price;
}
function addItem12(){
 initialOrder12++ ;
 orderCount12.value = initialOrder12;
 selected_item =parseFloat(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price +=1.5;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder12)
}
function undoItem13(){
 initialOrder13-- ;
 orderCount13.value = initialOrder13;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price -=3;
 total_price_order.innerHTML = total_price;
}
function addItem13(){
 initialOrder13++ ;
 orderCount13.value = initialOrder13;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price +=3;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder13)
}
function undoItem14(){
 initialOrder14-- ;
 orderCount14.value = initialOrder14;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price -=1.75;
 total_price_order.innerHTML = total_price;
}
function addItem14(){
 initialOrder14++ ;
 orderCount14.value = initialOrder14;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseFloat(total_price_order.innerHTML);
 total_price +=1.75;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder14)
}
function undoItem15(){
 initialOrder15-- ;
 orderCount15.value = initialOrder15;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item - 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price -=2;
 total_price_order.innerHTML = total_price;
}
function addItem15(){
 initialOrder15++ ;
 orderCount15.value = initialOrder15;
 selected_item =parseInt(total_order_items.innerHTML);
 total_items = selected_item + 1;
 total_order_items.innerHTML = total_items;
 total_price = parseInt(total_price_order.innerHTML);
 total_price +=2;
 total_price_order.innerHTML = total_price;
 console.log(initialOrder15)
}

function addEvent(element , event )
{
    // debugger;
    element.onclick = event;
}

$(document).ready(function(){
    $(menuButton).click(function(){
        $(categories).toggleClass("active");
    })

    $(".hot").click(function(){
            $('.hot-drinks-section').fadeIn(100);
            $('.cold-drinks-section').hide();
            $('.sweet-section').hide();
            $('.light-food-section').hide();
                                })
     $(".cold").click(function(){
            $('.cold-drinks-section').fadeIn(100);
            $('.hot-drinks-section').hide();
            $('.sweet-section').hide();
            $('.light-food-section').hide();
                                })
    $(".sweet").click(function(){
            $('.sweet-section').fadeIn(100);
            $('.cold-drinks-section').hide();
            $('.hot-drinks-section').hide();
            $('.light-food-section').hide();
                                })
    $(".light").click(function(){
            $('.light-food-section').fadeIn(100);
            $('.sweet-section').hide();
            $('.cold-drinks-section').hide();
            $('.hot-drinks-section').hide();
                                })
})


$(".reviewOrder").click(function(){
            $('.reviewOrderPage').css("display","block");
                                })
