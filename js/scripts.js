function newItem() {

//Adds list item
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li)
  }

//Crosses item off
  function crossOut() {
		li.toggleClass('strike');
	}

	li.on('dblclick', crossOut);

//Adds delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

//Adds .delete CSS class
  function deleteListItem(){
  li.addClass('delete');
}

//Reorders list
   $('#list').sortable();

}
