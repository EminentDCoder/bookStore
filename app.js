//DELETE BOOKS
const booKlist = document.querySelector("#book-list ul");

booKlist.addEventListener("click", function(e){
    if(e.target.className == "delete"){
        const li = e.target.parentElement;
        booKlist.removeChild(li);
    }
});

const form = document.forms["add-book"]
form.addEventListener("submit", function(event){
    event.preventDefault();
    const addBook = document.querySelector('input[type="text"]').value;

    //creating elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //adding content to the created elements
    bookName.innerHTML = addBook;
    deleteBtn.innerHTML = "delete";

    //adding classname to the created elements
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    //appending child
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    booKlist.appendChild(li);

})


//HIDING BOOKS
const checkBox = document.querySelector("#checkBox");
checkBox.addEventListener("change", function(e){
    if(checkBox.checked){
        booKlist.style.display = "none";
    }
    else{
        booKlist.style.display = "initial";
    }
})


//search box events

const searchBar = document.querySelector("input[type='search']");
searchBar.addEventListener("keyup", function(event){
    const searchText = event.target.value.toLowerCase();
    const books = booKlist.getElementsByTagName("li");
    Array.from(books).forEach(function(books){
        const title = books.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(searchText) != -1){
            books.style.display = "flex";
        }
        else{
            books.style.display = "none";
        }
    })
});

