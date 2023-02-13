import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    //Hay quedar un valor del tipo que queremos, en este caso una cadena vacia
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length>2){

            // setCategories( [...categories, inputValue])
            /**la funcion serCategories admite una funcion de flecha en la que el parametro sera el estado actual
             * del atributo que estamos modificando.
             * Nos quedamos con el array que teniamos(..catd) y le añadimos el valor nuevo(inputValue)
             * Al ponerlo delante se añade como primer elemento
             */
            setCategories((cats)=> [inputValue, ...cats] )
            setInputValue('');
        }
    }
  return (
    
    <form onSubmit={ handleSubmit }>
        <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }/>

    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
