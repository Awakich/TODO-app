const form = document.querySelector('#form')
const input = form.querySelector('#input')
const task = document.querySelector('.tasks-block')

form.addEventListener('submit', submitHandler)

function submitHandler(element){
    element.preventDefault()

    const value = input.value

    if (!value){
        input.classList.add('input-task-unfill')
    }else{
        input.classList.remove('input-task-unfill')
    }

    const task__inner = document.createElement('div')
    task__inner.classList.add('task__inner')

    const content = document.createElement('div')
    content.classList.add('content')

    task__inner.appendChild(content)

    const btns_block = document.createElement('div')
    const input_btns = document.createElement('input')
    const edit = document.createElement('button')
    const deleted = document.createElement('button')
    const couple = document.createElement('div')

    btns_block.classList.add('btns-block')
    edit.classList.add('btn_edit', 'btn')
    deleted.classList.add('btn_deleted', 'btn')
    input_btns.classList.add('btns-block__inner')
    input_btns.type = 'text'
    input_btns.setAttribute('readonly', 'readonly')
    input_btns.value = input.value
    couple.classList.add('form')

    edit.innerHTML = 'Edit'
    deleted.innerHTML = 'Delete'

    btns_block.appendChild(edit)
    btns_block.appendChild(deleted)

    task__inner.appendChild(input_btns)
    task.appendChild(btns_block)
    couple.appendChild(task__inner)
    couple.appendChild(btns_block)
    task.appendChild(couple)

    input.value = ''

    edit.addEventListener('click', () => {
        if (edit.innerText.toLocaleLowerCase() === 'edit'){
            input_btns.removeAttribute('readonly')
            input_btns.focus()
            edit.innerText = 'Save'
        }else{
           edit.setAttribute('readonly', 'readonly')
           edit.innerText = 'Edit'
        }
    })

    deleted.addEventListener('click', () => {
        task.removeChild(couple)
    })
}