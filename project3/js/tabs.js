$(document).ready(function() {
    $('.tabs-triggers__item').click(function(e){
      e.preventDefault();
    
      $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
      $('.tab-box').removeClass('tab-box--active');
    
      $(this).addClass('tabs-triggers__item--active');
      $($(this).attr('href')).addClass('tab-box--active');
    
    
    
    });
    $('.tabs-triggers__item:first').click();
    $('#web').addClass('tab-box--active');
    $('#mobileapp').addClass('tab-box--active');
    $('#illustration').addClass('tab-box--active');
    $('#photography').addClass('tab-box--active');
    $('#website').addClass('tab-box--active');
    $('#3dmodel').addClass('tab-box--active');
    
    });
    
    $(document).ready(function() {
      $('#all').click(function(){
        $('#web').addClass('tab-box--active');
        $('#mobileapp').addClass('tab-box--active');
        $('#illustration').addClass('tab-box--active');
        $('#photography').addClass('tab-box--active');
        $('#website').addClass('tab-box--active');
        $('#3dmodel').addClass('tab-box--active');
      })
    })