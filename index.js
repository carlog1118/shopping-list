$(function(){
$('#js-shopping-list-form').on('submit', function(event){
  var text= $("#shopping-list-entry").val();
  $('.shopping-list').append(`<li>
    <span class="shopping-item">${text}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`); 
  event.preventDefault();
});
$('.shopping-list').on('click', '.shopping-item-delete', function(event){
    this.closest('li').remove();
})
});

