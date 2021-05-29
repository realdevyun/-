var color = {
    링크:function(x){
//      var alist = document.querySelectorAll('#legend a');
// var i = 0;
// while(i<alist.length){
//  alist[i].style.color=x;
//  i=i+1;}
  $('a').css('color',x);},
  
    글자:function(x){
//      document.querySelector('body').style.color=x;
  $('body').css('color',x);
},
    배경:function(x){
//      document.querySelector('body').style.backgroundColor=x;
  $('body').css('backgroundColor',x);
}
  }
  function 다크모드(x){
    var dark = document.querySelector('body');
if(x.value === '다크모드'){
  color.배경('black');
  color.글자('white');
x.value='화이트모드';
  color.링크('powderblue');
}
else{
  color.배경('white');
  color.글자('black');
  x.value='다크모드';
  color.링크('blue');
}
  }