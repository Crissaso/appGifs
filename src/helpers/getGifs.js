


export const gifs = async (category)  => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=EApm3Bb7oOELPvXL9MOxRKdVmBl4rE3Y&q=${category}&limit=12`;
    const conect = await fetch(url)
    const { data } = await conect.json();
   
    const getGifs = data.map(img => ({
        
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url
        
    }))
    console.log(getGifs);
    return getGifs
}