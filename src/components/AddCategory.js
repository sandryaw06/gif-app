import React, {useState} from 'react'
import {PropTypes} from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [input, setInput] = useState("")

    const handleChange = (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( cats => [ input, ...cats ]);
        setInput("");
        // console.log('click');
    }
    return (
        
        <form onSubmit={ handleSubmit }>
            <h1> {input} </h1>
            <input
                type="text"
                onChange={handleChange}
                value={input}

            >
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
