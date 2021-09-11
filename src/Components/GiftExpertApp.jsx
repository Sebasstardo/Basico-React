import React,{useState} from 'react'
import AddCategories from './AddCategories'
import GIfGrid from './GIfGrid'

const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch'])



    return (
        <>
          <hr />  
          <h1>GifExpertApp</h1>
          <AddCategories setCategories={setCategories}/>

            <ol>
                {
                    categories.map(categories =>(
                        
                        <GIfGrid

                        key={categories}
                            categories = {categories}
                        />
                    )
                         
                    )
                }
            </ol>
        </>
    )
}

export default GiftExpertApp
