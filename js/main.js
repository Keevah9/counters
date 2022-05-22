// setting initial count
let count = 0;

// select buttons and value
const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(function(btn) {
    btn.addEventListener('click', function (ele) {
        const buttonStyle = ele.currentTarget.classList
        if(buttonStyle.contains('decrease')){
            count--
            document.body.style.backgroundColor = 'red'
        }else if (buttonStyle.contains('increase')){
            count++
            document.body.style.backgroundColor = 'green'
        }else{
            count = 0
            document.body.style.backgroundColor = 'black'
        }
        value.textContent = count
    })
})