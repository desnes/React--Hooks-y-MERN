import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length > 2) {
            //setCategories( cats => [inputValue, ...cats])
            // con setCategories estamos enviando el valor de inputValue a la funcion onAddCategory y tendriamos que saber la logica de la funcion onAddCategory
            // onNewCategory(inputValue); solo enviamos el valor de inputValue a la funcion onAddCategory
            onNewCategory(inputValue.trim());
            setInputValue('');
        }
        
    }

  return (
    <form onSubmit={ onSubmit }>
    <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ onInputChange}
     />
     </form>
  )
}
