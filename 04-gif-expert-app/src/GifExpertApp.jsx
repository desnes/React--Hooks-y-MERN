import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = ( newCategory) => {
        //categories.push(newCategory)

        //console.log(newCategory)
        // desestructuramos el array y agregamos un nuevo elemento
        //setCategories([...categories, 'HunterXHunter'])

        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
        //setCategories( cats => [...cats, 'HunterXHunter'])
    }
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories= { setCategories }
            onNewCategory={ onAddCategory }
            />

    
        { categories.map( (category) => (
                <GifGrid    
                    key={ category} 
                    category={ category} />
            )
        )}

    </>
  )
}
