import { useState } from "react"



const AddCategory = ({ addCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <=1){
          return
        }
        
        addCategory(inputValue)
        setInputValue('')
    }

    const onInputChange = (e) => {
        // console.log(e.target.value);
         setInputValue(e.target.value)
         
         
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            className="shadow appearance-none border rounded  h-12 w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            placeholder="buscar elementos"
            onChange={onInputChange}
            value={inputValue}/>
        </form>
      
    </div>
  )
}

export default AddCategory
