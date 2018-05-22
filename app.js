//Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}




//UI Constructor- methods to add books to the UI
function UI(){}

//add function to add books to UI table, adding to the UI prototype
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    //insert columns
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>
    `;


    list.appendChild(row);
}
//Show Alert
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement('div');
    //Add Classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //insert into DOM, get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form); //insert new alert div before the form
    //Timeout after 3 seconds, setTimeout part of Window object
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);

}

//Delete Book Prototype
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


//Event Listener for adding book
document.getElementById('book-form').addEventListener('submit', function(e){
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    //Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI object to add books to our table
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === ''){
        //Error alert
    ui.showAlert('Please fill in all fields', 'error');
    } else {
     //Add Book to list
     ui.addBookToList(book);

     //show success alert
     ui.showAlert('Book Added!', 'success');

     //clear fields
     ui.clearFields();
    }
    e.preventDefault();
});

//Event Listener for delete book
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);

    //show delete alert
    if(e.target.className === 'delete'){
    ui.showAlert('Book Removed', 'success');}
   
    e.preventDefault();
});  //selecting parent of soon to be added delete X



