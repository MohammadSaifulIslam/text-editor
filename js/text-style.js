document.getElementById('text-bold').addEventListener('click', function(){
    textAria().style.fontWeight = 'bold';
})

document.getElementById('text-italic').addEventListener('click', function(){
    textAria().style.fontStyle = 'italic';
})

document.getElementById('text-underline').addEventListener('click', function(){
    textAria().style.textDecoration = 'underline';
})

document.getElementById('align-left').addEventListener('click', function(){
    textAria().style.textAlign = 'left';
})

document.getElementById('align-center').addEventListener('click', function(){
    textAria().style.textAlign = 'center';
})

document.getElementById('align-right').addEventListener('click', function(){
    textAria().style.textAlign = 'right';
})

document.getElementById('align-justify').addEventListener('click', function(){
    textAria().style.textAlign = 'justify';
})

document.getElementById('font-size').addEventListener('change', function(){
    const size = getInputValueById('font-size') ;
    textAria().style.fontSize = size + 'px';
})

document.getElementById('lower-upper-case').addEventListener('click', function(){
    const textAriaValue = textAria().value;
    const textUp = textAriaValue.toUpperCase();
    setInputValueById('text-aria', textUp)
})

document.getElementById('text-color').addEventListener('change', function(){
    const userColor = getInputValueById('text-color') ;
    const newColor = textAria().style.color = userColor;
})