$(document).ready(function(){
  $('.title').click(function(e){
    e.preventDefault();
    $('.container').addClass('open');
    
    setTimeout(function(){
      window.location.href = 'iloveyou/iloveyouanimation.html';
    }, 20000);
  });
  
  
  $('.close').click(function(){
    $('.container').removeClass('open');
  });
});

