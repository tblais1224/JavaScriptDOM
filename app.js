//another way to delete items from list, this is better version than old below version
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// this is one way to delete the books from list but not perfect
// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn) {
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;

//         li.parentNode.removeChild(li);

//     });
// });

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent, 'was prevented')
// })

//add book
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    //default refreshes page
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    //create elements 
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn= document.createElement('span');

    //add content
    deleteBtn.textContent = "delete";
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to document  (order matters)
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});
