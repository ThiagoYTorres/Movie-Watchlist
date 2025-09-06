const filme = document.querySelector('.movie')
const procurar = document.querySelector('.search')
const filmes = document.querySelector('.filmes')

const key = '72d93772'
procurar.addEventListener('click', procurarFilme)

function procurarFilme(e){
    e.preventDefault()
    filmes.innerHTML = ''
    fetch(`http://www.omdbapi.com/?apikey=${key}&s=${filme.value}&page=1&type=series`)
    .then( resp => resp.json())
    .then( data => {
        console.log(data)
        for( i = 0; i < 5; i++){
            console.log(data.Search[i].imdbID)
             fetch(`http://www.omdbapi.com/?apikey=${key}&i=${data.Search[i].imdbID}`)
                .then( resp => resp.json())
                .then( data => {
                    console.log(data)
                    console.log(data.Response)
                try {
                    const response = data;
                    // Lógica para processar a resposta se for bem-sucedida
                    } catch (error) {
                    // Lógica para tratar o erro
                    console.error('Ocorreu um erro:', error);
}    
                const poster = data.Poster == 'N/A' ? 'imgs/notfound.png' : data.Poster
                const ratings = data.Ratings[0] && data.Ratings[1] ? data.Ratings[1].Value : '--'
                
                      filmes.innerHTML += `
    <div class="filmeCard">
        <img src=${poster} class="poster">
         
        <div class="carac">
            <div class="nota">
                <h1>${data.Title}</h1>
                <img src='imgs/imdb.png' class='imdbIcon'><span class='score'>${data.imdbRating}</span>
                <img src='imgs/tomato.png' class='tomatoIcon'><span class='score'><strong>${ratings}</strong></span>

              </div>  
            
             <div class="desc">
             <span class="add">${data.Runtime}</span>
             <span>${data.Genre}</span>
             
             </div> 
             <p class="plot">${data.Plot}</p>
        </div>
            
    
        `
                })
                 
        }
        
      
        
        
    })
}   
