
const adding = document.querySelector(".adding");
const addingVarious = document.querySelector(".addingVarious");
const removing = document.querySelector(".removing");
const removingAll = document.querySelector(".removingAll")


adding.addEventListener('click', () =>
{
    const section = document.querySelector("section");
    const div = document.createElement('div');
    div.setAttribute('class', 'box fade')
    const p = document.createElement('p');
    p.setAttribute('class', 'paragraph');
    p.textContent = 'Hello';
    section.appendChild(div);
    div.appendChild(p);
})


addingVarious.addEventListener('click', () => {
    const addTimes = prompt("How many divs you want to add?");
    const section = document.querySelector("section");
    for (let i = 0; i < addTimes; i++)
    {
        
    const div = document.createElement('div');
    div.setAttribute('class', 'box fade')
    const p = document.createElement('p');
    p.setAttribute('class', 'paragraph');
    p.textContent = 'Hello';
    section.appendChild(div);
    div.appendChild(p);
    }
})

removing.addEventListener('click', () => {
    
    const removeDivBox = document.querySelector('.box ');
    removeDivBox.removeAttribute('class', 'fade');
    removeDivBox.setAttribute('class', 'box fade-out');
    setInterval(() => {removeDivBox.remove()}, 500);
    
})

removingAll.addEventListener('click', () =>{
    const removeAllDivBox = document.querySelectorAll('.box');
    removeAllDivBox.forEach(box => box.setAttribute('class', 'box fade-out'));
    
    setInterval(() => removeAllDivBox.forEach(box => box.remove()), 500);
})
    



