function changeColour(event){
  //remove active de class
  document.querySelectorAll('span.active').forEach(function(item){
    item.classList.remove('active')
  })

  //add active em class
  event.target.classList.add('active')
}
