var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  //Create new li element
  var li = document.createElement('li');
  //Add class
  li.className = 'list-group-item';
  console.log(li);
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create del button element
  var deleteBtn = document.createElement('button');

  //Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //Append text node
  deleteBtn.appendChild(document.createTextNode('x'));

  //Append button to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
}

//Remove itemList
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get lis
  var items = itemList.getElementsByTagName('li');
  //Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
