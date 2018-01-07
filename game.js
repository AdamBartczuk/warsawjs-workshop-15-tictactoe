document.addEventListener('DOMContentLoaded', function() {
  initGame();

  function initGame() {
    var fields = document.querySelectorAll('.bord > div');

  fields.forEach(field function() {} => {
    field.addEventListener('click', fieldClickHandler)
  });
  }
  function fieldClickHandler() {
    console.log('clicked', this);
  }
});
