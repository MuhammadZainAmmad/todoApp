//getting input todo item and our main div which contain all todo lists
var inpTodoItem = document.getElementById('inp')
var mainDiv = document.getElementById('main')

// function to add a todo item called on add btn
function add() {
    var todoItem = inpTodoItem.value

    if (todoItem == '') {
        alert('Can not add an empty list')
    }

    else {
        // creating a todo list div
        var todoList = document.createElement('div')
        todoList.setAttribute('class', 'container mb-2 bg-secondary rounded p-2')

        //making todo item a text node and making it a para
        var todoItemTextNode = document.createTextNode(todoItem)
        var paraForTodoList = document.createElement('p')
        paraForTodoList.appendChild(todoItemTextNode)
        paraForTodoList.setAttribute('class', 'd-inline-block me-3')

        //adding todo item text to todo list
        todoList.appendChild(paraForTodoList)

        // adding edit and delete buttons to todo list
        var editBtn = document.createElement('button')
        var editBtnTxt = document.createTextNode("Edit")
        editBtn.appendChild(editBtnTxt)
        editBtn.setAttribute('onclick', 'editBtn(this.parentNode)')
        editBtn.setAttribute('class', 'btn btn-outline-dark me-1')

        var delBtn = document.createElement('button')
        var delBtnTxt = document.createTextNode("Delete")
        delBtn.appendChild(delBtnTxt)
        delBtn.setAttribute('onclick', 'delBtn(this.parentNode)')
        delBtn.setAttribute('class', 'btn btn-outline-dark')

        todoList.appendChild(editBtn)
        todoList.appendChild(delBtn)





        // adding todo list to our main div
        mainDiv.appendChild(todoList)
        inpTodoItem.value = ""
    }
}



// function to delete all todo items
function delAll() {
    mainDiv.innerHTML = ''
    inpTodoItem.value = ''
}



// function to delete a todo item
function delBtn(parentNode) {
    parentNode.remove()
    inpTodoItem.value = ''
}



// function to edit a todo item
function editBtn(parentNode) {
    // getting todo list para text
    var paraText = parentNode.childNodes[0].innerText

    // deleting para and edit btn from todo list
    parentNode.childNodes[0].remove()
    parentNode.childNodes[0].remove()

    // creating an input field containing para text
    var inpAtPara = document.createElement('input')
    inpAtPara.setAttribute('value', paraText)
    inpAtPara.setAttribute('class','me-3 form-control mb-2')

    // creating add btn for todo list
    var addTodoListBtn = document.createElement('button')
    addTodoListBtn.setAttribute('onclick', 'addTodoList(this.parentNode)')
    var addTodoListTxt = document.createTextNode('ADD')
    addTodoListBtn.appendChild(addTodoListTxt)
    addTodoListBtn.setAttribute('class', 'btn btn-outline-dark me-1')

    // adding input and add btn in place of para and edit btn in todo list
    parentNode.insertBefore(inpAtPara, parentNode.childNodes[0])
    parentNode.insertBefore(addTodoListBtn, parentNode.childNodes[0].nextSibling)
}


// function to add edited text value of todo list (sub of editBtn func)
function addTodoList(parentNode) {
    // getting todo list input value
    var paraText = parentNode.childNodes[0].value

    // deleting input and add btn from todo list
    parentNode.childNodes[0].remove()
    parentNode.childNodes[0].remove()

    // creating a para containing input value
    var paraAtInp = document.createElement('p')
    var paraTextNode = document.createTextNode(paraText)
    paraAtInp.appendChild(paraTextNode)
    paraAtInp.setAttribute('class', 'd-inline me-3')

    // creating edit btn for todo list (same as in add())
    var editBtn = document.createElement('button')
    var editBtnTxt = document.createTextNode("Edit")
    editBtn.appendChild(editBtnTxt)
    editBtn.setAttribute('onclick', 'editBtn(this.parentNode)')
    editBtn.setAttribute('class', 'btn btn-outline-dark me-1')


    // adding para and edit btn in place of input and add btn in todo list
    parentNode.insertBefore(paraAtInp, parentNode.childNodes[0])
    parentNode.insertBefore(editBtn, parentNode.childNodes[0].nextSibling)

}
