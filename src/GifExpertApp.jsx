import { useState } from "react"
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Valorant']); 
  
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
          onNewCategory={ onAddCategory }
        />

        {categories.map( category => (
          <GifGrid 
              key={category} 
              category={category} 
          />
        ))}
        
    </>
  )
}

//const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';