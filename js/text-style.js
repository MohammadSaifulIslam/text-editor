function f1(e){
   if( textAria().style.fontWeight === 'bold'){
    textAria().style.fontWeight = 'normal';
    document.getElementById('text-bold').classList.remove('active');
   }
   else{
    textAria().style.fontWeight = 'bold';
    document.getElementById('text-bold').classList.add('active');
   }
}

document.getElementById('text-italic').addEventListener('click', function(){
   if( textAria().style.fontStyle === 'italic'){
    textAria().style.fontStyle = 'normal';
    document.getElementById('text-italic').classList.remove('active');

   }
   else{
    textAria().style.fontStyle = 'italic';
    document.getElementById('text-italic').classList.add('active');

   }
})

document.getElementById('text-underline').addEventListener('click', function(){
   if( textAria().style.textDecoration === 'underline'){
    textAria().style.textDecoration = 'none';
    document.getElementById('text-underline').classList.remove('active');

   }
   else{
    textAria().style.textDecoration = 'underline';
    document.getElementById('text-underline').classList.add('active');

   }
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

document.getElementById('font-size').addEventListener('change', function(){
    const size = getInputValueById('font-size') ;
    textAria().style.fontSize = size + 'px';
})

document.getElementById('lower-upper-case').addEventListener('click', function(){
    if(textAria().style.textTransform === 'lowercase'){
        textAria().style.textTransform = 'uppercase';
    document.getElementById('lower-upper-case').classList.add('active');
    }
    else if( textAria().style.textTransform === 'uppercase' ||  textAria().style.textTransform === 'lowercase'){
        textAria().style.textTransform = 'capitalize';
    document.getElementById('lower-upper-case').classList.add('active');
    }
    else{
        textAria().style.textTransform = 'lowercase';
    document.getElementById('lower-upper-case').classList.remove('active');
    }
})

document.getElementById('text-color').addEventListener('change', function(){
    const userColor = getInputValueById('text-color') ;
    const newColor = textAria().style.color = userColor;
})