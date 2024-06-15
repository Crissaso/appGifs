
import GifCards from "./GifCards";
import  {useFetchGifs}  from '../hooks/useFetchGifs'

const GifGril = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category ); 
   

  return (
    <>
   
      <h3 className="m-8 font-semibold text-2xl">
        { category }
      </h3>
      {
        isLoading && <h2>Cargando ....</h2>
      }
      <div className="grid grid-cols-4"> 
          { images.map((img, id )=> (
            
             <GifCards 
                key={ id }
                { ...img }
              />

          ))}
      </div>
    
    </>
  )
}

export default GifGril
