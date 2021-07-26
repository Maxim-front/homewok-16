const textAreaElement = document.querySelector('textarea')
const buttonElement = document.querySelector('button')
const tableWordElement = document.querySelector('#table-word')
const tableAmountElement = document.querySelector('#table-amount')

buttonElement.addEventListener("click", handleClick)

function handleClick() {
    clear()
    let text = textAreaElement.value
    let array = text.split(/[,. ]/)

    let mySet = new Set(array)

    for (let itemSet of mySet) {
        let counter = 0
        for (let itemArray of array) {
            if (itemArray == itemSet)
                counter++
        }

        tableWordElement.innerHTML += itemSet + '<br>'
        tableAmountElement.innerHTML += counter + '<br>'

    }

    console.log(array)
}

function clear() {
    tableWordElement.innerHTML = ''
    tableAmountElement.innerHTML = ''
}

console.log(tableWordElement)