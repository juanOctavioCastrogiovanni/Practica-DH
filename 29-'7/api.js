window.onload = function () {
    let h1 = document.querySelector('h1')
    let div = document.querySelector('div')
    let body = document.querySelector('body')
    function fetchRepeat () {
        fetch("https://api.giphy.com/v1/gifs/random?api_key=ABX2qvJT0DE1XLqvdGqtISp9dso4hTA4&tag=&rating=g")
        .then(response => {
           return response.json()
        })
        .then(gifts => {
            console.log(gifts.data.title, gifts.data.image_url)
            h1.innerHTML = gifts.data.title
            div.innerHTML = '<img src="'+ gifts.data.image_url +'">'
        })
    }

    function arrayGifts (){

        fetch("https://api.giphy.com/v1/gifs/trending?api_key=ABX2qvJT0DE1XLqvdGqtISp9dso4hTA4&limit=25&rating=g")
        .then(response => {
           return response.json()
        })
        .then(gifts => {
            gifts.data.forEach(data => {
            console.log(data.title, data.image_url)
            body.innerHTML += '<h1>'+data.title+'</h1><div>'+'<img src="'+ data.images.original.url +'">'+'</div>'
            });
        })
    }

    function filterGifts (){

        fetch("https://api.giphy.com/v1/gifs/trending?api_key=ABX2qvJT0DE1XLqvdGqtISp9dso4hTA4&limit=25&rating=g")
        .then(response => {
           return response.json()
        })
        .then(gifts => {
            let numero = prompt('coloque la cantidad que desea que muestre');
            
              for (let i=0;i<=numero-1;i++){
            console.log(gifts.data[i].title, gifts.data[i].image_url)
            body.innerHTML += '<h1>'+gifts.data[i].title+'</h1><div>'+'<img src="'+ gifts.data[i].images.original.url +'">'+'</div>'
              }
            });
    }


    // document.querySelector('button.btn').addEventListener('click', ()=>{
    //     fetchRepeat ()
    // })
    // fetchRepeat ()
    // arrayGifts ()
    filterGifts ()
}










