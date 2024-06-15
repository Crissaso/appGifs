import { useEffect, useState } from "react";
import { gifs } from '../helpers/getGifs'



export const useFetchGifs = ( category ) => {

    
  const [images, setPerso] = useState([])
  const [loading, setLoading] = useState( true )

  const getImages = async ()  => {
    const imag = await gifs( category );
    setPerso(imag)
    setLoading(false)
  }

   useEffect(() => {
    getImages();
   }, [])

  return {
    images,
    isLoading: loading
  }
}


