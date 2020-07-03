import React, {useState} from 'react'
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['one push']);
    /* const handleAdd = ()=>{
        //setCategories([...categories,'HunterxHunter']);
        setCategories(cats=>[...cats, 'HunterxHunter']);
    } */


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/> 

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
