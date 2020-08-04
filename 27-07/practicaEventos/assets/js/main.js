window.onload = function () {
// alert('estoy vinculado')
let abracadabra = document.querySelector('#abracadabra')
abracadabra.addEventListener('click',()=>{
    let nombre = prompt('Escribe tu nombre')
    let titular = document.querySelector('h1#titular')
    titular.innerHTML = 'Hi, I’m <strong>'+ nombre +'</strong>.'
})
let touchMe = document.querySelector('footer a.button.big.scrolly.top')
let colores = ['red','blue','green','brown','yellow']
    let i = 0;
    let color = 'black'
    let aleatorio = 
    setInterval (()=>{
        color = colores[i]
        i<5?i++:i=0
    },100) 

touchMe.addEventListener('dblclick', () => {
    clearInterval(aleatorio)
    document.querySelector('.parrafo-color').style.color = color
})

let sections = document.getElementsByTagName('section')
Array.from(sections).forEach(section=>{
    section.addEventListener('click', function (){
        alert('Clickeaste sobre ' + this.querySelector('h3').innerHTML)
    })
})

let cambiar = document.querySelector('footer a.button.big.scrolly')

cambiar.addEventListener('mouseover',()=>{
    clearInterval(aleatorio)
    document.querySelector('footer p').style.color = color
})


cambiar.addEventListener('mouseout',()=>{
  
    document.querySelector('footer p').style.color = "#888"
})

let foto = document.querySelector('.image')

foto.addEventListener('click', ()=>{
    alert('preparate para el futuro...')
    setTimeout(()=>{
        alert('...y el futuro ya llego!')
    }, 5000)
})




//  document.addEventListener('keydown', (e)=>{
//      if(e.key==' '){
//      alert('Ey tocaste la barra')
//  } else {
//     // alert('Ey tocaste el teclado!')
//  }
//  })




}