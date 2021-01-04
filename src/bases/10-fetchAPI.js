
const apiKey = 'm6y0jUxGLNxtSgUQSOOySmmWWkBp0hq9'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

peticion
    .then( resp => resp.json() ) // promesas en cadena
    .then( ({ data }) => {
        const { url } =  data.images.original 
        
        const img = document.createElement('img')
        img.src = url 
        document.body.append( img )
    })
    .catch( console.warn )
    
