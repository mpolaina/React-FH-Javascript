
// const getImgPromesa = () => new Promise( resolve => resolve('https://google.es') )
// getImgPromesa().then( console.log )

const getImage = async() => {
    
    try {
        
        const apiKey = 'm6y0jUxGLNxtSgUQSOOySmmWWkBp0hq9' 
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`) 
        const { data } = await resp.json()
        
        const { url } =  data.images.original
        
        // mostrar en el html
        const img = document.createElement('img')
        img.src = url 
        document.body.append( img )
        
    } catch (error) {
        // manejo del error...
        console.error( error )
    }
     
}

getImage()

