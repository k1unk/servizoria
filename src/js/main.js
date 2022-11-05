document.getElementById("slider").oninput = function () {
    this.style.background = 'linear-gradient(to right, black 0%, black ' +
        this.value * 10 + '%, #eaeaea ' + this.value * 10 + '%, #eaeaea 100%)'
    let sliderValue = document.getElementById("slider-value")
    sliderValue.innerHTML = this.value
    sliderValue.style.left = this.value * 10 + '%'

    if (this.value > 6) document.getElementById("bad-answer-block").style.display = 'none'
    else document.getElementById("bad-answer-block").style.display = 'flex'

    if (this.value == 0) {
        document.getElementById("slider").style.setProperty('--background-color', '#bdbdbd');
        document.getElementById("bad-answer-block").style.display = 'none'
        document.getElementById("button").style.backgroundColor = '#c9c9c9'
        document.getElementById("button").style.cursor = 'default'

    }
    if (this.value != 0) {
        document.getElementById("slider").style.setProperty('--background-color', 'black');
        document.getElementById("button").style.backgroundColor = 'red'
        document.getElementById("button").style.cursor = 'pointer'
    }
};

let handleChange = (element) => {
    let id = element.id.charAt(element.id.length - 1)
    element.checked
        ? document.getElementById(`extra-${id}`).style.display = 'flex'
        : document.getElementById(`extra-${id}`).style.display = 'none'
}

let extraItems = document.getElementsByClassName('extra__item');
for (let i = 0; i < extraItems.length; i++) {
    extraItems[i].onclick = () => {
        if (extraItems[i].style.color == 'white') {
            extraItems[i].style.backgroundColor = '#e1e1e1'
            extraItems[i].style.color = 'black'
        } else {
            extraItems[i].style.backgroundColor = 'black'
            extraItems[i].style.color = 'white'
        }
    }
}

document.getElementById('button').onclick = () => {
    let sliderValue = document.getElementById("slider").value
    if (sliderValue > 6) {
        alert("Вы успешно прошли анкету")
    }
    if (sliderValue > 0 && sliderValue < 7) {
        let optionIds = ['option-1', 'option-2', 'option-3', 'option-4']
        let somethingChecked = false
        optionIds.map(e => {
            if (document.getElementById(e).checked) somethingChecked = true
        })
        if (!somethingChecked) document.getElementById("bad-answer-block__title").scrollIntoView();
        else alert("Вы успешно прошли анкету")
    }
}
