const circle = document.querySelector('.circle')
const buttons = document.querySelectorAll('button')
// console.log(buttons);


buttons.forEach( function(btn){
// console.log(btn);
btn.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'red'){
        circle.style.backgroundColor = 'yellow'
    }else if(e.target.id === 'green'){
        circle.style.backgroundColor = 'white'
    }
    
});

} );


