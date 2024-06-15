import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGril from "./components/GifGril";



const GifEpertApp = () => {

  const [categories, setCategories] = useState([ 'one punch' , 'goku']);

  const addCategory = (text) =>{

    
    categories.includes(text.toLowerCase()) ? alert('la categoria ya existe agregue una nueva al listado') : setCategories([text, ...categories ])
    
    
  }

  return (
    <div className="text-center p-6 ">
      <h1 className="font-bold text-5xl m-8" >Gif Expert App
        
      </h1>
      <AddCategory addCategory={addCategory}/>
      
     
        { categories.map( (category) =>(
              
                <GifGril
                key={category} 
                category={category}
                />
                
              
        ))}
      
       
     
    </div>
  )
}

export default GifEpertApp
