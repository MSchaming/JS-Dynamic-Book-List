//Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}




//UI Constructor- methods to add books to the UI
function UI(){}


//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    console.log('test');

    e.preventDefault();
});

