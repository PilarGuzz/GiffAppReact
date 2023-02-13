//import React, { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    //const  [images, setImages] = useState([])

    const {data:images, loading} = useFetchGifs(category);
    // useEffect(()=>{
    //     getGifs(category)
    //     .then( setImages)
    // }, [])

    //      const getGifs = async() => {
    //
    //     const url = 'https://api.giphy.com/v1/gifs/search?api_key=tLt4SiPdwcNdb6W5VCZSFgLQEnwGffpG&q='+encodeURI(category)+'&limit=10&offset=0&rating=g&lang=en';
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //     /**El map sirve para recorrer todos los data, por cada data recupera solo esos datos
    //      * que le pedimos
    //      */
    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     })

    //     return gifs;
        
    // }

    // getGifs()
    //     .then((imgs) => setImages(imgs)
    //     )

        return (
        <>
            <h3>{category} </h3>
            {loading && <span className="loader"></span> }
            <div className='card-grid'>

            {
                images.map((img)=>
                <GifGridItem
                    key={img.id}
                    // img={img}
                    //Crea un objeto nuevo de img con todas sus propiedades
                    {...img}/>
                )
            }

            </div>
        </>
  )
}
