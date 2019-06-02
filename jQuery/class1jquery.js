$('h1').click(function(){
  console.log('There was a click');
})

$('li').click(function(){
  console.log('any li was clicked');
})

$('h1').click(function(){
  $(this).text('I was changed') // THis points to the h1 text
})

//Key press
$('input').eq(0).keypress(function(){
  $('h3').toggleClass('turnBlue');
})//When we type a character into the text box, the h3 tag text will change every time from blue to normal and vice versa

$('input').eq(0).keypress(function(event){
  console.log(event);
})//For every key press, the log will be dumped into the console

$('input').eq(0).keypress(function(event){
  if(event.which === 13){
    $('h3').toggleClass('turnBlue');
  } // 13 is the key for Enter, so only if you press enter the toggle happens
})

// on() method
// This is like the event listener in java script
$('h2').on('dblclick', function(){
  $(this).toggleClass('turnRed');
})

$('h4').on('mouseenter', function(){
  $(this).toggleClass('turnRed');
})//THe color on h4 toggles each and every time mouse hover over h4 text

// Event and animations
$('input').eq(1).on('click', function(){
  $('.container').fadeOut(2000)
})

$('input').eq(0).on('click', function(){
  $('.container').slideUp(2000)
})
