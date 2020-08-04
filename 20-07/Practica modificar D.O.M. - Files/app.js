alert('Bienvenidos a mi sitio');
let confirmacion = confirm('¿Estas seguro que deseas avanzar?')

if (confirmacion == false){
    document.querySelector('h2').innerText = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio.'
} else {
    document.querySelector('h2').innerText = 'Que alegria que quieras continuar con tu visita por este maravilloso sitio.'
    let res = prompt('Ingrese su nombre');
    document.querySelector('h1').innerText = 'Bienvenido ' + res;
    let edad = prompt('Ingrese su edad');
    if (edad < 18){
        document.querySelector('div').style.display = 'none';
        document.getElementsById('accesoDenegado').split.display = 'block'
    } else {
        let separar = prompt('Ingrese hobbies con comas');
        let hobbiess = separar.split(',')
        let bool = 0
        hobbiess.forEach(hobbie => {
            if(hobbie.indexOf('Program')!=-1){
                bool+=1
            }
        })
        
        if (bool==1){
            alert('Que bueno que te guste la programacion')
        } else {
            alert('Que lastima que no te guste la programacion')
            let avatar = document.querySelector('.background-img')
            avatar.style.backgroundImage = 'url(./img/gatito.jpeg)'
        }

        

    //Punto remplazado por 12.1
    /*et etiqueta = document.querySelector('ol')
    hobbiess.forEach (hobbie => {
        etiqueta.innerHTML += '<li>'+hobbie+'</li>'
    })*/ 

    let colorPreferido = prompt('Ingrese su color preferido')
    console.log(colorPreferido);

    let NOMBRE = prompt('Ingrese su nombre nuevanebte')
    let frase = document.querySelector('h1')
    frase.innerHTML = 'Bienvenido <spam>'+ NOMBRE + '</spam>'   
    document.querySelector('spam').classList.add('color-preferido')

    let url = document.querySelector('ol')
    hobbiess.forEach (hobbie => {
        if ((hobbie.length>5)&&(hobbie.length<10)){
        if (hobbie == 'Netflix'){
        url.innerHTML += '<li><a href="http://netflix.com">'+hobbie+'</a></li>'
        } else 
        if (hobbie == 'Futbol'){
            url.innerHTML += '<li><a href="http://ole.com">'+hobbie+'</a></li>'
        } else {
            url.innerHTML += '<li>'+hobbie+'</li>'
        }
    }
    
    })

    url.style.textAlign = 'center'

}
}

