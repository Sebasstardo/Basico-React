import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGIfs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GIfGrid = ({categories}) => {


    const {data, loading} =useFetchGifs(categories)



    return (
        <>
        <h3>{categories}</h3>
        {loading && <p>Loading</p>}
        
     

        <div className="card-grid">
           
               {

               data.map(img=>(

                  <GifGridItem 
                  key={img.id}
                  {...img}
                  />
               ))

               }
           
        </div>
        </>
    )
}

export default GIfGrid
