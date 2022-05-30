function newItem() {
  //javascript
  //1. Adding a new item to the todo list in jquery:

  const li = $('<li></li>');
  const inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("Added item cannot be blank!");
  } else {
    $('#list').append(li);
  }

  //2. Crossing out an item:
  li.on("dblclick", () => li.toggleClass("strike"));
  
  //3(i). Adding the delete button "X":
  const crossOutButton = $("<crossOutButton></crossOutButton>");
 	crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  crossOutButton.on("click", () => li.addClass("delete"));

  // 4. Reordering the items:
  $("#list").sortable();

}
