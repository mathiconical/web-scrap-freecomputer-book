$(document).ready(function(){
  const items = $('.card');
  const totalItems = $('.card').length;
  const itemsOnPage = 30;
  const totalPagination = Math.round(totalItems / itemsOnPage);

  hideAll();
  drawInitPages();

  function drawInitPages(){
    for(var i=0; i < itemsOnPage; i++){
      $(items[i]).css('display', 'block');
    }
  }

  function hideAll(){
    $('.card').each(function(){
      $(this).css('display', 'none');
    });
  }

  $('.page-link').on('click', function(){
    let page = parseInt(this.text);
    if(page > 0){
      hideAll();
      for(var i = 0; i < itemsOnPage; i++){
        $(items[i + (itemsOnPage * (page - 1))]).css('display', 'block');
        console.log(i + (itemsOnPage * (page - 1)));
      }
    }
  });

});