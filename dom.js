var button = document.querySelector('.button');
var body = document.querySelector('body');

var makeNote = function() {
    var div = document.createElement('div');
    body.appendChild(div);
    div.setAttribute('class', 'sheet note');
    div.setAttribute('contenteditable', 'true');
    div.textContent = 'Enter Text';
    document.querySelector('.note').classList.add('sheet');
    var span = document.createElement('span');
    // span.setAttribute('class','remove');
    span.textContent = 'X';
    div.appendChild(span);
    noteCount();
}

button.addEventListener("click", makeNote);


var noteCount = function() {
  var totalNotes = document.querySelectorAll('.note').length;
  document.getElementById('notes').innerHTML = totalNotes;
}



