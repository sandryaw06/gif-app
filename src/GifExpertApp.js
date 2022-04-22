import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {


    const [categories, setCategories] = useState([''])

   
    return (
        <>
            <h1>Hola Mundo</h1>
            <hr />

            <AddCategory setCategories = {setCategories}/>

            <ul>
                {
                    categories.map( category =>  (

                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    ))

                }
                
            </ul>
        </>
    )
       
}

export default GifExpertApp;