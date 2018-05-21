//Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}




//UI Constructor- methods to add books to the UI
function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    //insert columns
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'</td>
    `;


    list.appendChild(row);
}


UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    //Instantiate book
    const book = new Book(title, author, isbn);

    //Instantiate UI object to add books to our table
    const ui = new UI();

     //Add Book to list
    ui.addBookToList(book);

    //clear fields
    ui.clearFields();
          

    e.preventDefault();
});

